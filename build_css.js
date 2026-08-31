const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const luxuryCSS = `
/* =========================================
   LUXURY EDITORIAL UPGRADES 2.0
   ========================================= */

.text-center { text-align: center; }

/* Typography System */
.serif-huge {
  font-family: var(--font-serif);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 600;
  line-height: 0.95;
  letter-spacing: -0.03em;
  margin: 0;
}

.massive-text {
  font-family: var(--font-serif);
  font-size: clamp(4rem, 12vw, 12rem);
  font-weight: 500;
  line-height: 0.85;
  letter-spacing: -0.05em;
  color: var(--color-text-primary);
  margin: 0;
}

.text-light {
  color: var(--color-bg-secondary);
}

.eyebrow {
  display: block;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: var(--space-md);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

/* Sections */
section:not(.section-hero) {
  padding: clamp(60px, 10vw, 140px) 0;
}

/* Navbar Sticky */
.navbar-sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(252, 247, 240, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1000;
  padding: var(--space-sm) var(--space-xl) !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
}

/* Dark Brand Section */
.section-dark-brand {
  background-color: #17130F;
  color: var(--color-bg-secondary);
}

.brand-stats-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-4xl);
}

@media (min-width: 768px) {
  .brand-stats-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.brand-text {
  flex: 1;
  max-width: 500px;
}

.brand-desc {
  margin-top: var(--space-lg);
  font-size: 1.1rem;
  color: rgba(252, 247, 240, 0.7);
  max-width: 400px;
}

.brand-stats {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

@media (min-width: 768px) {
  .brand-stats {
    flex-direction: row;
    justify-content: flex-end;
    gap: var(--space-3xl);
  }
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 500;
  line-height: 1;
}

.stat-label {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-accent);
  margin-top: var(--space-xs);
}

/* Services Editorial */
.section-services-editorial {
  background-color: var(--color-bg-secondary);
}

.services-header {
  margin-bottom: var(--space-4xl);
}

.services-grid-asymmetric {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4xl);
}

@media (min-width: 768px) {
  .services-grid-asymmetric {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4xl) var(--space-6xl);
  }
  .card-editorial.tall {
    margin-top: -80px;
  }
}

.card-editorial {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  cursor: pointer;
}

.card-img-container {
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  border: 1px solid rgba(68, 43, 27, 0.1);
}

.card-editorial.tall .card-img-container {
  aspect-ratio: 3/4;
}

.card-img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.card-editorial:hover .card-img-container img {
  transform: scale(1.03);
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.card-meta {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.card-num {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--color-accent);
}

.card-title-small {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 500;
}

.card-desc {
  font-size: 1rem;
  color: var(--color-text-secondary);
  max-width: 90%;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--space-sm);
  padding-top: var(--space-sm);
  border-top: 1px solid rgba(68, 43, 27, 0.1);
}

.card-price {
  font-weight: 500;
}

.book-link {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 600;
  color: var(--color-text-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

@media (min-width: 768px) {
  .book-link {
    opacity: 0;
    transform: translateX(-10px);
  }
  .card-editorial:hover .book-link {
    opacity: 1;
    transform: translateX(0);
  }
}

.book-link:hover {
  color: var(--color-accent);
}

/* Editorial Text */
.section-editorial-text {
  background-color: var(--color-bg-primary);
  overflow: hidden;
}

.editorial-subtext {
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  font-family: var(--font-serif);
  font-style: italic;
  color: var(--color-text-secondary);
  margin-top: var(--space-lg);
  max-width: 600px;
}

/* Meet Our Barbers */
.section-barbers {
  background-color: var(--color-bg-secondary);
}

.barber-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4xl);
  align-items: center;
}

@media (min-width: 768px) {
  .barber-split {
    grid-template-columns: 5fr 7fr;
  }
}

.barber-img-container {
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
}

.barber-img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.barber-list {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-2xl);
  border-top: 1px solid rgba(68, 43, 27, 0.1);
}

.barber-item {
  padding: var(--space-md) 0;
  border-bottom: 1px solid rgba(68, 43, 27, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.barber-item h3 {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 500;
  color: var(--color-text-secondary);
  margin: 0;
  transition: color 0.3s ease, transform 0.3s ease;
}

.barber-item:hover h3, .barber-item.active h3 {
  color: var(--color-text-primary);
  transform: translateX(20px);
}

.barber-details {
  max-width: 400px;
}

.barber-details p {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-lg);
  font-size: 1.1rem;
}

/* Masonry Gallery */
.section-masonry-gallery {
  background-color: #17130F;
  color: var(--color-bg-secondary);
}

.gallery-header {
  margin-bottom: var(--space-4xl);
}

.masonry-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);
}

@media (min-width: 768px) {
  .masonry-grid {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 250px;
  }
}

.masonry-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.masonry-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.masonry-item:hover img {
  transform: scale(1.05);
}

.masonry-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(23, 19, 15, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  text-align: center;
}

.masonry-item:hover .masonry-overlay {
  opacity: 1;
}

.masonry-overlay span {
  font-family: var(--font-sans);
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  font-weight: 600;
  color: #FCF7F0;
  text-transform: uppercase;
  transform: translateY(10px);
  transition: transform 0.4s ease;
}

.masonry-item:hover .masonry-overlay span {
  transform: translateY(0);
}

@media (min-width: 768px) {
  .masonry-item.tall { grid-row: span 2; grid-column: span 2; }
  .masonry-item.square { grid-row: span 1; grid-column: span 1; }
  .masonry-item.short { grid-row: span 1; grid-column: span 2; }
}

/* Testimonials */
.section-testimonials {
  background-color: var(--color-bg-primary);
}

.testimonial-slider {
  max-width: 800px;
  margin: var(--space-4xl) auto 0;
}

.stars {
  color: var(--color-accent);
  font-size: 1.5rem;
  margin-bottom: var(--space-md);
  letter-spacing: 0.1em;
}

.testimonial-slide blockquote {
  font-style: italic;
  margin-bottom: var(--space-xl);
}

.customer-name {
  font-family: var(--font-sans);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 600;
}

/* CTA Section */
.section-cta {
  background-color: #17130F;
  color: #FCF7F0;
  padding: clamp(100px, 15vw, 200px) 0 !important;
}

.cta-subtext {
  font-size: 1.2rem;
  color: rgba(252, 247, 240, 0.7);
  max-width: 500px;
  margin: var(--space-lg) auto var(--space-2xl);
}

.cta-buttons {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
}

/* Override Old Buttons globally to 4pt scale */
.btn {
  border-radius: 8px !important;
}

/* Footer Premium */
.section-footer-premium {
  background-color: var(--color-bg-primary);
  padding-top: clamp(80px, 10vw, 120px) !important;
  padding-bottom: 0 !important;
  overflow: hidden;
}

.footer-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4xl);
  margin-bottom: clamp(60px, 10vw, 100px);
}

@media (min-width: 768px) {
  .footer-split {
    grid-template-columns: repeat(3, 1fr);
  }
}

.footer-info, .footer-nav, .footer-hours {
  display: flex;
  flex-direction: column;
}

.footer-address {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: var(--space-md);
  line-height: 1.3;
}

.footer-phone {
  font-family: var(--font-sans);
  font-size: 1.1rem;
  color: var(--color-text-primary);
  text-decoration: none;
  font-weight: 500;
}

.footer-nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer-nav a {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 1.1rem;
}

.footer-nav a:hover {
  color: var(--color-text-primary);
}

.footer-hours p {
  color: var(--color-text-secondary);
  font-size: 1.1rem;
}

.footer-bottom {
  border-top: 1px solid rgba(68, 43, 27, 0.1);
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.giant-logo {
  font-family: var(--font-serif);
  font-size: clamp(3rem, 15vw, 18rem);
  font-weight: 600;
  line-height: 0.75;
  letter-spacing: -0.05em;
  color: rgba(68, 43, 27, 0.08);
  white-space: nowrap;
  transform: translateY(15%);
}

/* Sticky Booking */
.sticky-booking-btn {
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: #17130F;
  color: #FCF7F0;
  padding: 16px 32px;
  border-radius: 50px;
  font-family: var(--font-sans);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transform: translateY(20px);
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.sticky-booking-btn.visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.sticky-booking-btn:hover {
  transform: translateY(-5px);
  background-color: #2c251e;
}

@media (max-width: 768px) {
  .sticky-booking-btn {
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    border-radius: 0;
    text-align: center;
    padding: env(safe-area-inset-bottom, 20px) 20px 20px 20px;
    font-size: 1rem;
  }
}
`;

fs.writeFileSync('style.css', css + '\\n' + luxuryCSS);
console.log('Successfully added luxury styles.');
