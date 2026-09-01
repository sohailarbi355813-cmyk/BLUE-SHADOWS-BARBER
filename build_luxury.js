const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// 1. Separate Header
const headerIndex = html.indexOf('</header>') + '</header>'.length;
const headerHtml = html.substring(0, headerIndex);
const restHtml = html.substring(headerIndex);

// 2. Parse Services
const cards = [];
const cardRegex = /<div class="card[^>]*>\s*<img src="([^"]+)" alt="([^"]+)" class="card-img" \/>\s*<div class="card-body">\s*<h3 class="card-title">([^<]+)<\/h3>\s*<div class="card-price">([^<]+)<\/div>\s*<p class="card-desc">([\s\S]*?)<\/p>\s*<\/div>\s*<\/div>/g;
let match;
while ((match = cardRegex.exec(restHtml)) !== null) {
    cards.push({
        src: match[1],
        alt: match[2],
        title: match[3],
        price: match[4],
        desc: match[5]
    });
}

// 3. Construct new sections
let newBody = `

<!-- DARK BRAND SECTION -->
<section class="section-dark-brand">
  <div class="container brand-stats-container">
    <div class="brand-text reveal-item">
      <span class="eyebrow">THE EXPERIENCE</span>
      <h2 class="serif-huge">MORE THAN<br>A HAIRCUT.</h2>
      <p class="brand-desc">Step into our calm, professional atmosphere and enjoy a moment of relaxation. We are dedicated to helping you look and feel your absolute best.</p>
    </div>
    <div class="brand-stats reveal-item">
      <div class="stat">
        <span class="stat-number">4.9★</span>
        <span class="stat-label">GOOGLE RATING</span>
      </div>
      <div class="stat">
        <span class="stat-number">1,000+</span>
        <span class="stat-label">CLIENTS SERVED</span>
      </div>
      <div class="stat">
        <span class="stat-number">MILTON</span>
        <span class="stat-label">ONTARIO</span>
      </div>
    </div>
  </div>
</section>

<!-- SERVICES SECTION -->
<section id="services" class="section-services-editorial">
  <div class="container">
    <div class="services-header reveal-item">
      <span class="eyebrow">OUR SERVICES</span>
      <h2 class="serif-huge">PRECISION GROOMING,<br>BUILT AROUND YOU.</h2>
    </div>
    
    <div class="services-grid-asymmetric">
`;

cards.forEach((card, i) => {
    const num = String(i + 1).padStart(2, '0');
    // Vary image height for asymmetry
    const isTall = i % 3 === 0;
    const cardClass = isTall ? 'card-editorial tall' : 'card-editorial';
    
    newBody += `
      <div class="${cardClass} reveal-item">
        <div class="card-img-container">
          <img src="${card.src}" alt="${card.alt}" />
        </div>
        <div class="card-content">
          <div class="card-meta">
            <span class="card-num">${num}</span>
            <span class="card-title-small">${card.title}</span>
          </div>
          <p class="card-desc">${card.desc}</p>
          <div class="card-footer">
            <span class="card-price">${card.price}</span>
            <a href="https://book.squareup.com/appointments/d34rhdcazwo38t/location/L2K4HDPJ9GD77" target="_blank" class="book-link">BOOK THIS SERVICE &rarr;</a>
          </div>
        </div>
      </div>
`;
});

newBody += `
    </div>
  </div>
</section>

<!-- LARGE EDITORIAL TEXT -->
<section class="section-editorial-text">
  <div class="container">
    <h2 class="massive-text reveal-item">THE ART OF<br>GROOMING.</h2>
    <p class="editorial-subtext reveal-item">Precision fades, classic cuts, and modern styling—tailored to modern trends.</p>
  </div>
</section>

<!-- MEET OUR BARBERS -->
<section id="barbers" class="section-barbers">
  <div class="container barber-split">
    <div class="barber-img-container reveal-item">
      <img src="gallery images/haircut-beard.png" id="active-barber-img" alt="Hassan" />
    </div>
    <div class="barber-info reveal-item">
      <span class="eyebrow">MEET THE EXPERTS</span>
      
      <div class="barber-list">
        <div class="barber-item active" data-img="gallery images/haircut-beard.png" data-bio="Master Barber. Specializes in skin fades, beard shaping, and classic cuts. Over 10 years of experience delivering precision grooming." data-link="https://book.squareup.com/appointments/d34rhdcazwo38t">
          <h3>01 HASSAN</h3>
        </div>
        <div class="barber-item" data-img="gallery images/straight-razor.png" data-bio="Senior Stylist. Expert in classic gentlemen's cuts, hot towel shaves, and modern texturizing techniques." data-link="https://book.squareup.com/appointments/d34rhdcazwo38t">
          <h3>02 ALI</h3>
        </div>
      </div>
      
      <div class="barber-details">
        <p id="barber-bio">Master Barber. Specializes in skin fades, beard shaping, and classic cuts. Over 10 years of experience delivering precision grooming.</p>
        <a id="barber-link" href="https://book.squareup.com/appointments/d34rhdcazwo38t" target="_blank" class="btn btn-primary">BOOK WITH HASSAN &rarr;</a>
      </div>
    </div>
  </div>
</section>

<!-- MASONRY GALLERY -->
<section id="gallery" class="section-masonry-gallery">
  <div class="container">
    <div class="gallery-header reveal-item">
      <span class="eyebrow">OUR PORTFOLIO</span>
      <h2 class="serif-huge">THE WORK<br>SPEAKS FOR ITSELF.</h2>
    </div>
    
    <div class="masonry-grid">
      <div class="masonry-item tall reveal-item">
        <img src="gallery images/kids-haircut.png" alt="Gallery" />
        <div class="masonry-overlay"><span>SKIN FADE<br>BY HASSAN</span></div>
      </div>
      <div class="masonry-item short reveal-item">
        <img src="gallery images/beard-color.png" alt="Gallery" />
        <div class="masonry-overlay"><span>BEARD COLOR<br>BY ALI</span></div>
      </div>
      <div class="masonry-item square reveal-item">
        <img src="gallery images/student-haircut.png" alt="Gallery" />
        <div class="masonry-overlay"><span>STUDENT CUT<br>BY HASSAN</span></div>
      </div>
      <div class="masonry-item tall reveal-item">
        <img src="gallery images/face-facial.png" alt="Gallery" />
        <div class="masonry-overlay"><span>FACIAL<br>BY ALI</span></div>
      </div>
      <div class="masonry-item square reveal-item">
        <img src="gallery images/steam-face-shave.png" alt="Gallery" />
        <div class="masonry-overlay"><span>STEAM SHAVE<br>BY HASSAN</span></div>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="section-testimonials">
  <div class="container reveal-item text-center">
    <span class="eyebrow">TRUSTED BY MILTON</span>
    <div class="testimonial-slider">
      <div class="testimonial-slide active">
        <div class="stars">★★★★★</div>
        <blockquote class="serif-huge">"Best fade in Milton. Professional, clean, and the hot towel shave is incredible."</blockquote>
        <div class="customer-name">- John D.</div>
      </div>
    </div>
  </div>
</section>

<!-- CALL TO ACTION -->
<section class="section-cta">
  <div class="container text-center reveal-item">
    <h2 class="serif-huge text-light">READY FOR<br>YOUR NEXT CUT?</h2>
    <p class="cta-subtext">Book your appointment and experience precision grooming done properly.</p>
    <div class="cta-buttons">
      <a href="https://book.squareup.com/appointments/d34rhdcazwo38t" target="_blank" class="btn btn-primary">BOOK YOUR APPOINTMENT &rarr;</a>
      <a href="tel:+1234567890" class="btn btn-secondary" style="border-color: #D9E8F5; color: #F0F7FA; background: transparent;">CALL US</a>
    </div>
  </div>
</section>

<!-- CONTACT & FOOTER -->
<footer id="contact" class="section-footer-premium">
  <div class="container">
    <div class="footer-split">
      <div class="footer-info">
        <span class="eyebrow">VISIT US</span>
        <h3 class="footer-address">123 Main Street<br>Milton, ON</h3>
        <a href="tel:+1234567890" class="footer-phone">CALL (123) 456-7890</a>
        <a href="#" class="book-link" style="margin-top:20px;">GET DIRECTIONS &rarr;</a>
      </div>
      <div class="footer-nav">
        <span class="eyebrow">NAVIGATION</span>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#barbers">Barbers</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>
      </div>
      <div class="footer-hours">
        <span class="eyebrow">HOURS</span>
        <p>Mon-Fri: 9am - 8pm<br>Sat: 9am - 6pm<br>Sun: Closed</p>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="giant-logo">BLUE SHADOWS</div>
    </div>
  </div>
</footer>

<!-- STICKY BOOKING -->
<a href="https://book.squareup.com/appointments/d34rhdcazwo38t" target="_blank" class="sticky-booking-btn">BOOK NOW</a>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Subtle fade & translate up for reveal items
    const revealItems = gsap.utils.toArray('.reveal-item');
    revealItems.forEach(item => {
      gsap.fromTo(item, 
        { opacity: 0, y: 40 },
        {
          opacity: 1, 
          y: 0, 
          duration: 0.9, 
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Staggered service cards
    ScrollTrigger.batch(".card-editorial", {
      start: "top 85%",
      onEnter: batch => gsap.fromTo(batch, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "cubic-bezier(0.22, 1, 0.36, 1)", overwrite: true }
      ),
      onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 50, duration: 0.5, overwrite: true })
    });

    // Image Mask Reveals
    const images = gsap.utils.toArray('.card-img-container img, .masonry-item img, .barber-img-container img');
    images.forEach(img => {
      gsap.fromTo(img, 
        { clipPath: "inset(100% 0 0 0)", scale: 1.1 },
        {
          clipPath: "inset(0% 0 0 0)", 
          scale: 1,
          duration: 1.2, 
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Sticky Navbar & Booking Button logic
    const navbar = document.querySelector('.navbar');
    const stickyBtn = document.querySelector('.sticky-booking-btn');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        navbar.classList.add('navbar-sticky');
      } else {
        navbar.classList.remove('navbar-sticky');
      }
      
      if (window.scrollY > 500) {
        stickyBtn.classList.add('visible');
      } else {
        stickyBtn.classList.remove('visible');
      }
    });

    // Barbers interactive section
    const barberItems = document.querySelectorAll('.barber-item');
    const activeImg = document.getElementById('active-barber-img');
    const bioText = document.getElementById('barber-bio');
    const bookLink = document.getElementById('barber-link');

    barberItems.forEach(item => {
      item.addEventListener('click', () => {
        barberItems.forEach(b => b.classList.remove('active'));
        item.classList.add('active');
        
        gsap.to([activeImg, bioText, bookLink], { opacity: 0, duration: 0.2, onComplete: () => {
          activeImg.src = item.dataset.img;
          bioText.textContent = item.dataset.bio;
          bookLink.href = item.dataset.link;
          bookLink.innerHTML = \`BOOK WITH \${item.querySelector('h3').textContent.split(' ')[1]} &rarr;\`;
          gsap.to([activeImg, bioText, bookLink], { opacity: 1, duration: 0.4 });
        }});
      });
    });
  });
</script>
</body>
</html>
`;

const finalHtml = headerHtml + newBody;
fs.writeFileSync('index.html', finalHtml);
console.log('Successfully rebuilt index.html for luxury redesign.');
