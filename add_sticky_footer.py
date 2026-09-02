import glob
import os

html_snippet = """
<!-- STICKY FOOTER CTA -->
<div class="sticky-footer-cta">
  <a href="tel:+1234567890" class="btn btn-secondary sticky-btn">
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: sub; margin-right: 5px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    CALL US
  </a>
  <a href="https://book.squareup.com/appointments/d34rhdcazwo38t" target="_blank" rel="noopener noreferrer" class="btn btn-primary sticky-btn">
    BOOK NOW &rarr;
  </a>
</div>
"""

# Update all HTML files
html_files = glob.glob('*.html')
for file in html_files:
    try:
        with open(file, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        if "sticky-footer-cta" not in content:
            # Insert before </body>
            content = content.replace("</body>", html_snippet + "\n</body>")
            
            with open(file, 'w', encoding='utf-8', errors='ignore') as f:
                f.write(content)
            print(f"Updated {file}")
    except Exception as e:
        print(f"Failed to update {file}: {e}")

# Update generate_blog.py
try:
    with open("generate_blog.py", "r", encoding="utf-8", errors='ignore') as f:
        py_content = f.read()

    if "sticky-footer-cta" not in py_content:
        py_content = py_content.replace("</body>", html_snippet + "\n</body>")
        with open("generate_blog.py", "w", encoding="utf-8", errors='ignore') as f:
            f.write(py_content)
        print("Updated generate_blog.py")
except Exception as e:
    print(f"Failed to update generate_blog.py: {e}")
