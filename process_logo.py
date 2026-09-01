import sys
from PIL import Image

def process_logo_multiply(input_path, output_path, target_bg_color):
    try:
        img = Image.open(input_path).convert("RGBA")
    except Exception as e:
        print(f"Error opening image: {e}")
        return
        
    data = img.getdata()
    
    new_data = []
    tr, tg, tb = target_bg_color
    
    for r, g, b, a in data:
        # Multiply blend mode
        new_r = int((r / 255.0) * tr)
        new_g = int((g / 255.0) * tg)
        new_b = int((b / 255.0) * tb)
        new_data.append((new_r, new_g, new_b, 255))
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved processed logo to {output_path}")

input_img = r"C:\Users\Believer\Downloads\WhatsApp Image 2026-09-01 at 7.27.05 PM.jpeg"
output_img = "logo-processed.png"
# #D9E8F5 is rgb(217, 232, 245)
process_logo_multiply(input_img, output_img, (217, 232, 245))
