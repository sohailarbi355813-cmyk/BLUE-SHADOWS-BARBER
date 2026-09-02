import json
import os

blog_posts = [
    {
        "id": "1",
        "title": "Top 5 Men's Hair Trends for 2026",
        "excerpt": "Discover the most popular men's hairstyles dominating this year, from textured crops to modern mullets.",
        "image": "blog1_trends_1788350569858.jpg",
        "content": "<p>2026 is all about embracing natural textures while maintaining clean, sharp edges. We've seen a massive shift towards the <strong>Textured Crop</strong>, paired with a high skin fade, offering a low-maintenance yet highly stylish look. The <strong>Modern Mullet</strong> has also matured, featuring softer blends and less aggressive transitions.</p><h2>The Return of the Flow</h2><p>For those with longer locks, the 'bro flow' is back in full force. It requires a skilled barber to add layers without losing the masculine shape. At Blue Shadows Barbers, we specialize in scissor work to ensure your flow sits perfectly even weeks after your cut.</p>"
    },
    {
        "id": "2",
        "title": "How to Maintain a Sharp Beard Fade at Home",
        "excerpt": "Keep your beard looking fresh between barber visits with these expert maintenance tips.",
        "image": "blog2_beard_1788350583473.jpg",
        "content": "<p>A beard fade is the hallmark of a premium grooming experience. While nothing beats the precision of a professional straight razor, maintaining the look at home is possible with the right tools.</p><h2>Invest in a Quality Trimmer</h2><p>Use a trimmer with micro-adjustments. Start by defining the cheek line—keep it as natural as possible. Then, use a descending guard technique (e.g., #3 to #2 to #1) towards the sideburns to maintain that seamless blend into your haircut. Remember to always apply beard oil after trimming to hydrate the skin underneath.</p>"
    },
    {
        "id": "3",
        "title": "The Ultimate Experience: Why You Need a Hot Towel Shave",
        "excerpt": "More than just a shave—it's a ritual. Learn the benefits of a traditional hot towel shave.",
        "image": "blog3_shave_1788350595644.jpg",
        "content": "<p>The traditional hot towel shave is a lost art that we proudly preserve at Blue Shadows Barbers. Beyond the incredible relaxation, the steam from the hot towel opens up the pores, softens the hair follicles, and prepares the skin for the closest shave possible without irritation.</p><h2>Exfoliation and Rejuvenation</h2><p>The straight razor gently exfoliates the top layer of dead skin cells. Combined with our premium shaving creams and soothing aftershaves, your skin will feel tighter, cleaner, and incredibly refreshed.</p>"
    },
    {
        "id": "4",
        "title": "Choosing the Right Fade: Skin, Drop, or Burst?",
        "excerpt": "Confused about fades? We break down the differences so you know exactly what to ask your barber.",
        "image": "blog4_fade_1788350609232.jpg",
        "content": "<p>Asking for a 'fade' is just the beginning. The style of fade dictates the entire shape of your haircut.</p><h2>The Skin Fade</h2><p>Also known as a bald fade, this cuts the hair right down to the skin at the lowest point. It offers the highest contrast and a very sharp, modern look.</p><h2>The Drop Fade</h2><p>This fade drops behind the ear, creating a smooth arc. It leaves more weight at the back of the head, perfect for those wanting a less aggressive, more classic silhouette.</p><h2>The Burst Fade</h2><p>Tapering only around the ear to create a circular 'burst' effect, this leaves the neckline long. It pairs excellently with mullets or mohawks.</p>"
    },
    {
        "id": "5",
        "title": "The Best Hair Styling Products for Men",
        "excerpt": "Pomade, clay, or paste? Find out which product is right for your hair type and desired style.",
        "image": "blog5_products_1788350754234.jpg",
        "content": "<p>Using the wrong product can ruin a great haircut. If you have fine hair, heavy pomades will weigh it down and make it look greasy. Instead, opt for a matte clay or a styling powder to add volume and texture.</p><h2>Pomades vs. Pastes</h2><p>For classic styles like pompadours or slick-backs, water-based pomades offer high shine and strong hold. For a more casual, 'messy' look, a styling paste or sea salt spray gives a natural finish with a reworkable hold.</p>"
    },
    {
        "id": "6",
        "title": "Preparing for Your Barber Visit: Do's and Don'ts",
        "excerpt": "Get the most out of your appointment with these simple preparation tips.",
        "image": "blog6_prep_1788350803255.jpg",
        "content": "<p>We want you to leave looking your absolute best. To help us achieve that, try to arrive with clean, product-free hair. This allows us to see how your hair naturally falls and grows.</p><h2>Bring References</h2><p>Don't be afraid to bring a photo! Visual references are the best way to ensure you and your barber are on the same page. However, remember that hair texture and density vary—we will tailor the look to suit your specific head shape and hair type.</p>"
    },
    {
        "id": "7",
        "title": "Why Blue Shadows is Milton's Premier Barbershop",
        "excerpt": "Discover what sets us apart from the rest and why our clients keep coming back.",
        "image": "blog7_milton_1788350817382.jpg",
        "content": "<p>At Blue Shadows Barbers, we don't just cut hair; we curate an experience. Located in the heart of Milton, our shop combines the nostalgic feel of a traditional barbershop with modern techniques and luxury amenities.</p><h2>Attention to Detail</h2><p>From the complimentary beverages to the meticulous straight-razor neck shaves that finish every haircut, we believe that luxury is in the details. Our barbers are highly trained artisans who take immense pride in their craft.</p>"
    },
    {
        "id": "8",
        "title": "The Classic Pompadour: A Timeless Look",
        "excerpt": "A deep dive into the history and styling techniques of the iconic pompadour.",
        "image": "blog8_pompadour_1788350828548.jpg",
        "content": "<p>Made famous by Elvis Presley, the Pompadour has evolved but never faded. Today's pompadour often features a fade on the sides for a more contemporary edge, but the voluminous front remains the focal point.</p><h2>How to Style It</h2><p>Blow-drying is essential. Use a round brush to pull the hair upwards and backwards while drying to build volume. Finish with a strong-hold, high-shine pomade to lock the style in place all day.</p>"
    },
    {
        "id": "9",
        "title": "Scalp Health 101: Preventing Dandruff and Dryness",
        "excerpt": "Great hair starts at the roots. Learn how to maintain a healthy scalp.",
        "image": "hero-new.png", # Fallback image due to quota
        "content": "<p>A healthy scalp is the foundation of healthy hair. Many men suffer from dry scalp or dandruff without realizing that simple changes to their routine can fix it.</p><h2>Don't Over-Wash</h2><p>Washing your hair every single day strips the scalp of its natural oils, leading to dryness and irritation. Try washing every 2-3 days, and use a sulfate-free shampoo. If you use heavy styling products, incorporate a clarifying shampoo once a week.</p>"
    },
    {
        "id": "10",
        "title": "Tips for a Tear-Free Kids Haircut",
        "excerpt": "Make your child's next trip to the barbershop a fun and stress-free experience.",
        "image": "about-new.jpeg", # Fallback image due to quota
        "content": "<p>We love having kids in the shop, but we know it can be a scary experience for them. To make it easier, try to book appointments during their 'good' hours—usually after a nap and a meal.</p><h2>Familiarization</h2><p>Bring them in just to say hi before their actual appointment day. Let them sit in the chair, play with the cape, and see that it's a friendly place. During the cut, we take our time, explain the tools (like the 'tickle clippers'), and ensure they feel safe and comfortable.</p>"
    }
]

header_template = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | Blue Shadows Barbers</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css?v=12">
</head>
<body>
  <header style="background-color: var(--color-bg-primary); padding: var(--space-xs) var(--space-md);">
    <nav class="navbar">
      <a href="index.html" class="brand-logo">
        <img src="logo-processed.png" alt="Blue Shadows Logo" class="custom-logo-img">
      </a>
      <div class="nav-links" id="navLinks">
        <a href="index.html">Home</a>
        <a href="index.html#services">Services</a>
        <a href="index.html#about">About Us</a>
        <a href="gallery.html">Gallery</a>
        <a href="blog.html">Blog</a>
        <a href="index.html#contact">Contact</a>
      </div>
    </nav>
  </header>
"""

footer_template = """
  <section id="contact" class="section-footer">
    <h2 class="services-title" style="margin-bottom: var(--space-xl);">Book Your Visit</h2>
    <p style="text-align: center; color: var(--color-text-secondary); max-width: 600px; margin-bottom: var(--space-xl);">
      Ready for a fresh look? Walk-ins are always welcome, but we recommend booking ahead to secure your preferred barber and time slot.
    </p>
    <a href="https://book.squareup.com/appointments/d34rhdcazwo38t/location/L2K4HDPJ9GD77?rwg_token=AE37R_ibhKv9c_ppnG9isv6O2e0KGNxafWN1WFI0hpzIcBoU0vepBfBXgxU9D-uWhLQhBl4fD_9iYn9DoJrqm6km4a09WHGQCg%3D%3D" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Book Appointment Online</a>
    <div style="margin-top: var(--space-2xl); text-align: center; font-size: 0.9rem; color: var(--color-text-secondary);">
      &copy; 2026 Blue Shadows Barbers. All rights reserved.
    </div>
  </section>

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

</body>
</html>
"""

def generate_index():
    cards = ""
    for post in blog_posts:
        cards += f'''
        <a href="blog-post-{post['id']}.html" style="text-decoration: none;">
            <div class="card card-dark">
              <img src="{post['image']}" alt="{post['title']}" class="card-img" style="aspect-ratio: 16/9;">
              <div class="card-body">
                <h3 class="card-title" style="margin-bottom: 0;">{post['title']}</h3>
                <p class="card-desc" style="text-align: left;">{post['excerpt']}</p>
                <div style="color: var(--color-accent); font-weight: 600; margin-top: 10px; font-size: 0.9rem;">Read Article &rarr;</div>
              </div>
            </div>
        </a>
        '''
    
    html = header_template.format(title="Blog") + f'''
    <section class="section-services" style="min-height: 80vh;">
      <h1 class="services-title" style="margin-bottom: var(--space-4xl);">Our Grooming Blog</h1>
      <div class="cards-grid" style="max-width: 1040px; margin: 0 auto;">
        {cards}
      </div>
    </section>
    ''' + footer_template
    
    with open("blog.html", "w") as f:
        f.write(html)

def generate_posts():
    for post in blog_posts:
        html = header_template.format(title=post['title']) + f'''
        <article style="max-width: 800px; margin: 0 auto; padding: var(--space-4xl) var(--space-md); min-height: 80vh;">
            <a href="blog.html" style="color: var(--color-text-secondary); text-decoration: none; display: inline-block; margin-bottom: var(--space-md); font-weight: 500;">&larr; Back to Blog</a>
            <h1 style="font-family: var(--font-serif); font-size: 3rem; line-height: 1.1; margin-bottom: var(--space-lg); color: var(--color-text-primary);">{post['title']}</h1>
            <img src="{post['image']}" alt="{post['title']}" style="width: 100%; border-radius: var(--space-sm); margin-bottom: var(--space-2xl); box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <div class="blog-content" style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text-primary);">
                {post['content']}
            </div>
        </article>
        ''' + footer_template
        
        with open(f"blog-post-{post['id']}.html", "w") as f:
            f.write(html)

if __name__ == "__main__":
    generate_index()
    generate_posts()
    print("Successfully generated blog index and 10 blog post pages!")
