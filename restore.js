const fs = require('fs');
const { execSync } = require('child_process');

// 1. Revert style.css
let css = fs.readFileSync('style.css', 'utf8');
css = css.replace(/\/\* =========================================\r?\n   LUXURY EDITORIAL UPGRADES[\s\S]*/, `/ *  
 * S c r o l l  
 * R e v e a l  
 * i n i t i a l  
 * s t a t e  
 * a d d e d  
 * v i a  
 * J S  
 * /  
 .reveal-hidden {  
   opacity: 0; transform: translateY(40px);  
 }  
 .reveal-hidden.revealed {  
   opacity: 1; transform: translateY(0);  
 }`);
css = css.replace(/\.card \{[\s\S]*?\.card-img \{[\s\S]*?\}/, `.card {
  height: auto;
  border-radius: var(--space-sm);
  overflow: hidden; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-md) var(--space-lg); 
  box-shadow: 0 10px 30px rgba(38, 28, 20, 0.03);
}

.card:hover {
  box-shadow: 0 20px 40px rgba(38, 28, 20, 0.12);
}

.card-dark {
  background-color: var(--color-bg-primary);
}

.card-medium {
  background-color: #EFE5D5;
}

.card-light {
  background-color: var(--color-bg-secondary);
}

.card-img {
  width: 100%; 
  aspect-ratio: 1 / 1; 
  height: auto;
  object-fit: cover;
  object-position: top;
  border-radius: var(--space-xs); 
  transition: filter 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  filter: brightness(0.95) contrast(1.02);
}`);
fs.writeFileSync('style.css', css);

// 2. Revert index.html
let oldHtml = execSync('git show HEAD:index.html').toString();
let currHtml = fs.readFileSync('index.html', 'utf8');

const descMap = {};
const oldCardRegex = /<h3 class="card-title">([^<]+)<\/h3>\s*<div class="card-price">[^<]+<\/div>\s*<p class="card-desc">([\s\S]*?)<\/p>/g;
let match;
while ((match = oldCardRegex.exec(oldHtml)) !== null) {
    descMap[match[1].trim()] = match[2].trim();
}

let i = 0;
const colorCycle = ['card-dark', 'card-medium', 'card-light', 'card-light', 'card-medium', 'card-dark'];

let newHtml = currHtml.replace(/<div class="card">\s*<div class="card-img-wrapper">\s*<img src="([^"]+)" alt="([^"]+)" class="card-img" \/>\s*<\/div>\s*<div class="card-body">\s*<div class="card-index">[^<]+<\/div>\s*<h3 class="card-title">([^<]+)<\/h3>\s*<div class="card-price">([^<]+)<\/div>\s*<div class="card-hover-btn">[^<]+<\/div>\s*<\/div>\s*<\/div>/g, (m, src, alt, title, price) => {
    const colorClass = colorCycle[i % 6];
    i++;
    const desc = descMap[title.trim()] || "Experience professional styling with our premium service.";
    return `<div class="card ${colorClass}">
          <img src="${src}" alt="${alt}" class="card-img" />
          <div class="card-body">
            <h3 class="card-title">${title}</h3>
            <div class="card-price">${price}</div>
            <p class="card-desc">${desc}</p>
          </div>
        </div>`;
});

// Remove new sections (using split to easily drop them if regex fails)
newHtml = newHtml.replace(/<!-- CREDIBILITY SECTION -->[\s\S]*?<\/section>/, '');
newHtml = newHtml.replace(/<!-- DARK ESPRESSO SECTION -->[\s\S]*?<\/section>\s*/, '');
newHtml = newHtml.replace('<a href="#services" class="sticky-booking">Book Now</a>\n</body>', '</body>');

// Restore Gallery
const oldGalleryMatch = oldHtml.match(/<section id="gallery" class="section-gallery">[\s\S]*?<\/section>/);
if (oldGalleryMatch) {
    newHtml = newHtml.replace(/<section id="gallery" class="section-gallery"[\s\S]*?<\/section>/, oldGalleryMatch[0]);
}
// Restore About Us
const oldAboutMatch = oldHtml.match(/<section id="about" class="section-about">[\s\S]*?<\/section>/);
if (oldAboutMatch) {
    newHtml = newHtml.replace(/<section id="about" class="section-editorial-team">[\s\S]*?<\/section>/, oldAboutMatch[0]);
}

// Restore GSAP Script
const backflipScript = `    document.addEventListener('DOMContentLoaded', () => {
      gsap.registerPlugin(ScrollTrigger);

      // Headings Animation (Backflip from side)
      const headings = gsap.utils.toArray('h1, .services-title, .section-title');
      
      headings.forEach((heading, index) => {
        // Alternate coming from left or right
        const fromX = (index % 2 === 0) ? -600 : 600;
        
        gsap.set(heading, { opacity: 0, x: fromX, rotationX: -720, transformPerspective: 1000 });
        
        ScrollTrigger.create({
          trigger: heading,
          start: "top 90%",
          onEnter: () => gsap.to(heading, {
            opacity: 1,
            x: 0,
            rotationX: 0,
            duration: 1.8,
            ease: "back.out(1.2)",
            overwrite: true
          }),
          onLeaveBack: () => gsap.to(heading, {
            opacity: 0,
            x: fromX,
            rotationX: -720,
            duration: 1,
            ease: "power2.in",
            overwrite: true
          })
        });
      });

      // Directional Grid Items Animation (Left, Bottom, Right)
      const animateGridItems = (selector) => {
        const items = gsap.utils.toArray(selector);
        
        items.forEach((item, index) => {
          const col = index % 3;
          let startX = 0, startY = 200; // default bottom
          
          if (col === 0) {
            startX = -300; // left
            startY = 100;
          } else if (col === 2) {
            startX = 300; // right
            startY = 100;
          }
          
          gsap.set(item, { opacity: 0, x: startX, y: startY, scale: 0.8 });
        });

        ScrollTrigger.batch(items, {
          start: "top 85%",
          onEnter: batch => {
            batch.forEach((item, i) => {
              gsap.to(item, {
                opacity: 1, x: 0, y: 0, scale: 1,
                duration: 1.2,
                delay: (i % 3) * 0.15,
                ease: "back.out(1)",
                overwrite: true
              });
            });
          },
          onLeaveBack: batch => {
            batch.forEach((item) => {
              const col = items.indexOf(item) % 3;
              let startX = 0, startY = 200;
              if (col === 0) { startX = -300; startY = 100; }
              else if (col === 2) { startX = 300; startY = 100; }
              
              gsap.to(item, {
                opacity: 0, x: startX, y: startY, scale: 0.8,
                duration: 0.8,
                ease: "power2.in",
                overwrite: true
              });
            });
          }
        });
      };
      
      animateGridItems('.card');
      animateGridItems('.gallery-item');
    });`;

newHtml = newHtml.replace(/document\.addEventListener\('DOMContentLoaded', \(\) => \{[\s\S]*?\}\);/, backflipScript);

fs.writeFileSync('index.html', newHtml);
console.log("Success");
