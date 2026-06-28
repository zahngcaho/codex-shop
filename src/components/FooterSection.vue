<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-logo">梓<span>榭</span></div>
        <div class="footer-socials">
          <a href="#" aria-label="微信">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M17.5 13a7.5 7.5 0 1 0-14.2-3.9A5.5 5.5 0 0 0 7 19.5h7.5a5 5 0 0 0 3-9.1"/>
              <path d="M20 11.5a5.5 5.5 0 0 0-3-10 5.5 5.5 0 0 0-5.2 3.5"/>
            </svg>
          </a>
          <a href="#" aria-label="微博">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
            </svg>
          </a>
          <a href="#" aria-label="小红书">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="footer-copy">© 2026 梓榭 · 保留所有权利</div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #16110d; color: rgba(255,255,255,.5); padding: 48px 0;
}
.footer-inner {
  display: flex; justify-content: space-between;
  align-items: center; flex-wrap: wrap; gap: 16px;
}
.footer-logo {
  font-family: var(--font-serif); font-size: 1.2rem;
  color: rgba(255,255,255,.7); letter-spacing: 2px;
}
.footer-logo span { color: var(--brand-light); }
.footer-socials { display: flex; gap: 16px; }
.footer-socials a {
  width: 36px; height: 36px; border-radius: 50%;
  border: 1px solid rgba(255,255,255,.12);
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,.4); transition: .25s;
}
.footer-socials a:hover {
  border-color: var(--brand-light); color: var(--brand-light);
  background: rgba(184,134,11,.1);
}
.footer-copy {
  font-size: .8rem; margin-top: 24px; text-align: center;
  padding-top: 24px; border-top: 1px solid rgba(255,255,255,.06);
}
</style>
