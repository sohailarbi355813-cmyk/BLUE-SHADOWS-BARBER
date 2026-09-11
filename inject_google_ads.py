import glob
import os

gtag_script = """
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17551570187"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17551570187');

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.open(url, '_blank');
      }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-17551570187/qe3NCIyTnPqCEIvqnrFB',
        'event_callback': callback
    });
    return false;
  }
</script>
"""

# Update all HTML files
html_files = glob.glob('*.html')
for file in html_files:
    try:
        with open(file, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        if "googletagmanager.com/gtag/js" not in content:
            # Insert before </head>
            content = content.replace("</head>", gtag_script + "\n</head>")
            
            # Update buttons to add onclick
            # Book Now button in sticky footer
            content = content.replace('href="https://book.squareup.com/appointments/d34rhdcazwo38t" target="_blank"', 
                                      'href="https://book.squareup.com/appointments/d34rhdcazwo38t" target="_blank" onclick="gtag(\'event\', \'conversion\', {\'send_to\': \'AW-17551570187/qe3NCIyTnPqCEIvqnrFB\'});"')
            # Call Us button in sticky footer
            content = content.replace('href="tel:+1234567890"', 
                                      'href="tel:+1234567890" onclick="gtag(\'event\', \'conversion\', {\'send_to\': \'AW-17551570187/qe3NCIyTnPqCEIvqnrFB\'});"')
            
            # The hero button (in index.html)
            content = content.replace('href="https://book.squareup.com/appointments/d34rhdcazwo38t/location/L2K4HDPJ9GD77?rwg_token=AE37R_ibhKv9c_ppnG9isv6O2e0KGNxafWN1WFI0hpzIcBoU0vepBfBXgxU9D-uWhLQhBl4fD_9iYn9DoJrqm6km4a09WHGQCg%3D%3D" class="btn btn-primary" target="_blank"',
                                      'href="https://book.squareup.com/appointments/d34rhdcazwo38t" class="btn btn-primary" target="_blank" onclick="gtag(\'event\', \'conversion\', {\'send_to\': \'AW-17551570187/qe3NCIyTnPqCEIvqnrFB\'});"')

            with open(file, 'w', encoding='utf-8', errors='ignore') as f:
                f.write(content)
            print(f"Updated {file}")
    except Exception as e:
        print(f"Failed to update {file}: {e}")

# Update generate_blog.py
try:
    with open("generate_blog.py", "r", encoding="utf-8", errors='ignore') as f:
        py_content = f.read()

    if "googletagmanager.com/gtag/js" not in py_content:
        py_content = py_content.replace("</head>", gtag_script + "\n</head>")
        py_content = py_content.replace('href="https://book.squareup.com/appointments/d34rhdcazwo38t" target="_blank"', 
                                        'href="https://book.squareup.com/appointments/d34rhdcazwo38t" target="_blank" onclick="gtag(\'event\', \'conversion\', {\'send_to\': \'AW-17551570187/qe3NCIyTnPqCEIvqnrFB\'});"')
        py_content = py_content.replace('href="tel:+1234567890"', 
                                        'href="tel:+1234567890" onclick="gtag(\'event\', \'conversion\', {\'send_to\': \'AW-17551570187/qe3NCIyTnPqCEIvqnrFB\'});"')
        
        with open("generate_blog.py", "w", encoding="utf-8", errors='ignore') as f:
            f.write(py_content)
        print("Updated generate_blog.py")
except Exception as e:
    print(f"Failed to update generate_blog.py: {e}")
