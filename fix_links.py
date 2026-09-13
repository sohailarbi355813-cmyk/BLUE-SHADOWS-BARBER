import glob

old_url = 'href="https://book.squareup.com/appointments/d34rhdcazwo38t"'
new_url = 'href="https://book.squareup.com/appointments/d34rhdcazwo38t/location/L2K4HDPJ9GD77"'

# Update all HTML files
html_files = glob.glob('*.html')
for file in html_files:
    try:
        with open(file, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        if old_url in content:
            content = content.replace(old_url, new_url)
            with open(file, 'w', encoding='utf-8', errors='ignore') as f:
                f.write(content)
            print(f"Fixed URL in {file}")
    except Exception as e:
        print(f"Failed to update {file}: {e}")

# Update generate_blog.py
try:
    with open("generate_blog.py", "r", encoding="utf-8", errors='ignore') as f:
        py_content = f.read()

    if old_url in py_content:
        py_content = py_content.replace(old_url, new_url)
        with open("generate_blog.py", "w", encoding="utf-8", errors='ignore') as f:
            f.write(py_content)
        print("Fixed URL in generate_blog.py")
except Exception as e:
    print(f"Failed to update generate_blog.py: {e}")
