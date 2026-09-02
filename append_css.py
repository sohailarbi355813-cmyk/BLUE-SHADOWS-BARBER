with open("style.css", "a", encoding="utf-8") as f:
    f.write("""

/* =========================================
   BLOG STYLES
   ========================================= */

.blog-content h2 {
  font-family: var(--font-serif);
  font-size: 2.2rem;
  margin-top: var(--space-2xl);
  margin-bottom: var(--space-sm);
  color: var(--color-text-primary);
}

.blog-content p {
  margin-bottom: var(--space-md);
}
""")
print("Appended blog styles to style.css")
