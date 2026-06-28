<template>
  <section class="hero" id="hero">
    <div class="hero-bg">
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85"
        alt="餐厅环境"
        loading="eager"
      />
    </div>
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <p class="hero-suptitle">Since 2020</p>
      <h1 class="hero-title">品味<br>东方雅韵</h1>
      <p class="hero-desc">
        以现代手法演绎传统中餐美学，用应季食材讲述四季流转的味道故事。
        在梓榭，每一道菜都是一首诗。
      </p>
      <div class="hero-actions">
        <button class="btn btn-primary" @click="$emit('cta')">
          预订餐位
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
        <button class="btn btn-outline" @click="$emit('scroll-menu')">浏览菜单</button>
      </div>
    </div>
    <div class="hero-scroll">
      <span>向下探索</span>
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh; display: flex; align-items: center;
  position: relative; overflow: hidden; padding-top: var(--header-h);
}
.hero-bg {
  position: absolute; inset: 0; background: #2c2418;
}
.hero-bg img {
  width: 100%; height: 100%; object-fit: cover; opacity: .45;
}
.hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(28,20,12,.85) 0%, rgba(28,20,12,.4) 50%, rgba(28,20,12,.7) 100%);
}
.hero-content { position: relative; z-index: 2; max-width: 720px; padding: 80px 0; }
.hero-suptitle {
  font-size: .8rem; letter-spacing: 4px; text-transform: uppercase;
  color: var(--brand-light); margin-bottom: 16px; font-weight: 500;
}
.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(3rem, 8vw, 5.2rem); line-height: 1.15;
  color: #fff; margin-bottom: 20px; font-weight: 700;
}
.hero-desc {
  font-size: 1.1rem; color: rgba(255,255,255,.75);
  max-width: 520px; line-height: 1.7; margin-bottom: 36px;
}
.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.hero-scroll {
  position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
  z-index: 2; display: flex; flex-direction: column; align-items: center;
  gap: 8px; color: rgba(255,255,255,.5); font-size: .75rem; letter-spacing: 2px;
  animation: float 2.5s ease-in-out infinite;
}
.hero-scroll .scroll-line {
  width: 1px; height: 40px;
  background: linear-gradient(to bottom, rgba(255,255,255,.4), transparent);
}
@keyframes float {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}
@media (max-width: 600px) {
  .hero-content { padding: 60px 0; }
}
</style>
