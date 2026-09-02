with open("style.css", "a", encoding="utf-8", errors="ignore") as f:
    f.write("""

/* Hide old CTA section on desktop */
@media (min-width: 769px) {
  .section-cta {
    display: none !important;
  }
}
""")
print("Appended media query to hide .section-cta on desktop")
