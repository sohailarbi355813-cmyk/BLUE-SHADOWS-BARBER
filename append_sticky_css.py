with open("style.css", "a", encoding="utf-8") as f:
    f.write("""

/* =========================================
   STICKY FOOTER CTA
   ========================================= */
.sticky-footer-cta {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-bg-primary);
  box-shadow: 0 -4px 20px rgba(26, 47, 76, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  z-index: 9999;
  border-top: 1px solid rgba(26, 47, 76, 0.08);
}

.sticky-btn {
  flex: 1;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.95rem;
  padding: 14px var(--space-md);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* Adjust body padding so content isn't hidden behind the sticky footer */
body {
  padding-bottom: 80px;
}

@media (max-width: 480px) {
  .sticky-btn {
    font-size: 0.85rem;
    padding: 12px var(--space-xs);
  }
}
""")
print("Appended sticky footer styles to style.css")
