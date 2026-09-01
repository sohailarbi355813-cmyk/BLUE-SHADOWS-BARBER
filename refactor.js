const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Refactor Cards
let cardIndex = 1;
html = html.replace(/<div class="card card-[a-z]+">\s*<img src="([^"]+)" alt="([^"]+)" class="card-img" \/>\s*<div class="card-body">\s*<h3 class="card-title">([^<]+)<\/h3>\s*<div class="card-price">([^<]+)<\/div>\s*<p class="card-desc">([\s\S]*?)<\/p>\s*<\/div>\s*<\/div>/g, (match, src, alt, title, price) => {
    const formattedIndex = String(cardIndex).padStart(2, '0');
    cardIndex++;
    return `<div class="card">
          <div class="card-img-wrapper">
            <img src="${src}" alt="${alt}" class="card-img" />
          </div>
          <div class="card-body">
            <div class="card-index">${formattedIndex} &mdash; SERVICE</div>
            <h3 class="card-title">${title}</h3>
            <div class="card-price">${price}</div>
            <div class="card-hover-btn">Book This Service &rarr;</div>
          </div>
        </div>`;
});

// 2. Insert Credibility Section after </header>
const credibilityHtml = `
  <!-- CREDIBILITY SECTION -->
  <section class="credibility-section">
    <div class="bg-statement">THE ART OF GROOMING</div>
    <div class="credibility-content">
      <h2 class="credibility-heading serif-huge">More than a haircut.</h2>
      <p class="credibility-subheading">Precision fades, classic cuts and modern grooming—designed around you.</p>
      
      <div class="stats-row">
        <div class="stat-item">
          <span class="stat-value">4.9★</span>
          <span class="stat-label">Google Rating</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">1,000+</span>
          <span class="stat-label">Clients Served</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">Milton</span>
          <span class="stat-label">Ontario</span>
        </div>
      </div>
    </div>
  </section>
`;
html = html.replace('</header>', '</header>\n' + credibilityHtml);

// 3. Insert Dark Section after Services
const darkSectionHtml = `
  <!-- DARK ESPRESSO SECTION -->
  <section class="section-dark-espresso">
    <div class="bg-statement">PREMIUM EXPERIENCE</div>
    <h2 class="serif-huge">MILTON'S GROOMING EXPERIENCE</h2>
    <p>We believe a haircut should be an experience, not a chore. Enjoy complementary beverages, hot towel finishes, and expert consultation.</p>
    <div style="display: flex; justify-content: center; gap: 20px; align-items: center; margin-top: 40px;">
      <div class="stat-item">
        <span class="stat-value" style="color: #F59E0B;">★★★★★</span>
        <span class="stat-label">150+ 5-STAR REVIEWS</span>
      </div>
      <a href="#services" class="btn btn-primary" style="background: #F0F7FA; color: #1A1513; margin-left: 20px;">Book Now</a>
    </div>
  </section>
`;
html = html.replace('</section>\n\n  <!-- ABOUT SECTION', '</section>\n' + darkSectionHtml + '\n  <!-- ABOUT SECTION');

// 4. Update About Us to Editorial Team Section
const teamHtml = `
  <section id="about" class="section-editorial-team">
    <div class="team-container">
      <div class="team-image-wrapper">
        <img src="gallery images/haircut-beard.png" alt="Master Barber" id="team-img" />
      </div>
      <div class="team-nav">
        <h2 class="sans-tiny-label" style="margin-bottom: 20px;">Meet Our Barbers</h2>
        
        <div class="team-member">
          <h3 class="team-name active" onmouseover="document.getElementById('team-img').src='gallery images/haircut-beard.png'">Hassan</h3>
          <div class="team-details" style="display: block;">
            <p>Master Barber &bull; 10+ Years Experience<br>Specializes in precision fades and beard sculpting.</p>
            <a href="#services" class="card-hover-btn" style="opacity: 1; transform: none; margin-top: 10px;">Book with Hassan &rarr;</a>
          </div>
        </div>
        
        <div class="team-member">
          <h3 class="team-name" onmouseover="document.getElementById('team-img').src='gallery images/straight-razor.png'">Ali</h3>
          <div class="team-details" style="display: none;">
            <p>Senior Stylist &bull; 5+ Years Experience<br>Expert in classic cuts and hot towel shaves.</p>
            <a href="#services" class="card-hover-btn" style="opacity: 1; transform: none; margin-top: 10px;">Book with Ali &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
html = html.replace(/<section id="about" class="section-about">[\s\S]*?<\/section>/, teamHtml);

// 5. Update Gallery to Masonry
const galleryMasonryHtml = `
  <section id="gallery" class="section-gallery" style="background-color: var(--color-bg-primary); padding: var(--space-6xl) var(--space-md);">
    <div style="max-width: 1200px; margin: 0 auto;">
      <h2 class="services-title" style="margin-bottom: var(--space-3xl);">Our Work</h2>
      <div class="masonry-grid">
        <div class="masonry-item" style="grid-row: span 2;">
          <img src="gallery images/kids-haircut.png" />
          <div class="masonry-overlay">
            <span>Fade &bull; By Hassan &rarr;</span>
          </div>
        </div>
        <div class="masonry-item" style="grid-row: span 1;">
          <img src="gallery images/beard-color.png" />
          <div class="masonry-overlay">
            <span>Color &bull; By Ali &rarr;</span>
          </div>
        </div>
        <div class="masonry-item" style="grid-row: span 2;">
          <img src="gallery images/student-haircut.png" />
          <div class="masonry-overlay">
            <span>Style &bull; By Hassan &rarr;</span>
          </div>
        </div>
        <div class="masonry-item" style="grid-row: span 1;">
          <img src="gallery images/steam-face-shave.png" />
          <div class="masonry-overlay">
            <span>Shave &bull; By Ali &rarr;</span>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
html = html.replace(/<section id="gallery" class="section-gallery">[\s\S]*?<\/section>/, galleryMasonryHtml);

// 6. Refine Animations (change GSAP script)
html = html.replace(/document\.addEventListener\('DOMContentLoaded', \(\) => \{[\s\S]*?\}\);/, `
    document.addEventListener('DOMContentLoaded', () => {
      gsap.registerPlugin(ScrollTrigger);

      // Subtle Fade/Slide Up for Headings
      const headings = gsap.utils.toArray('h1, h2, .serif-huge, .credibility-subheading');
      headings.forEach(heading => {
        gsap.from(heading, {
          scrollTrigger: {
            trigger: heading,
            start: "top 90%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 40,
          duration: 1.5,
          ease: "power3.out"
        });
      });

      // Mask Reveal for Images
      const images = gsap.utils.toArray('.card-img-wrapper, .masonry-item, .team-image-wrapper');
      images.forEach(img => {
        gsap.set(img, { clipPath: "inset(100% 0 0 0)" });
        ScrollTrigger.create({
          trigger: img,
          start: "top 85%",
          onEnter: () => gsap.to(img, { clipPath: "inset(0% 0 0 0)", duration: 1.2, ease: "power4.inOut", overwrite: true }),
          onLeaveBack: () => gsap.to(img, { clipPath: "inset(100% 0 0 0)", duration: 0.8, ease: "power2.in", overwrite: true })
        });
      });

      // Stagger Cards (Subtle fade up)
      const cards = gsap.utils.toArray('.card');
      gsap.set(cards, { opacity: 0, y: 30 });
      ScrollTrigger.batch(cards, {
        start: "top 85%",
        onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out", overwrite: true }),
        onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 30, duration: 0.5, overwrite: true })
      });
      
      // Interactive Team Section
      const teamNames = document.querySelectorAll('.team-name');
      teamNames.forEach(name => {
        name.addEventListener('mouseenter', () => {
          document.querySelectorAll('.team-name').forEach(n => n.classList.remove('active'));
          document.querySelectorAll('.team-details').forEach(d => d.style.display = 'none');
          name.classList.add('active');
          name.nextElementSibling.style.display = 'block';
        });
      });
    });
`);

// 7. Add Sticky Button
const stickyBtn = `<a href="#services" class="sticky-booking">Book Now</a>\n</body>`;
html = html.replace('</body>', stickyBtn);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully refactored index.html');
