<template>
  <nav class="nav" :class="{ scrolled }">
    <div class="container nav-inner">
      <a href="#" class="nav-logo">梓<span>榭</span></a>
      <ul class="nav-links" :class="{ open: mobileOpen }">
        <li><a href="#about" @click="closeMobile">关于我们</a></li>
        <li><a href="#menu" @click="closeMobile">精选菜单</a></li>
        <li><a href="#gallery" @click="closeMobile">餐厅环境</a></li>
        <li><a href="#contact" @click="closeMobile">联系我们</a></li>
      </ul>
      <button class="nav-cta" @click="$emit('cta')">预订餐位</button>
      <button class="nav-mobile-toggle" @click="mobileOpen = !mobileOpen" aria-label="菜单">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="4" y1="6" x2="20" y2="6"/>
          <line x1="4" y1="12" x2="20" y2="12"/>
          <line x1="4" y1="18" x2="20" y2="18"/>
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollEffect } from '../composables/useScrollEffect'

const { scrolled } = useScrollEffect()
const mobileOpen = ref(false)

function closeMobile() {
  mobileOpen.value = false
}
</script>

<style scoped>
.nav {
  position: fixed; top: 0; left: 0; width: 100%; z-index: 100;
  height: var(--header-h); background: rgba(250,248,245,.85);
  backdrop-filter: blur(16px); border-bottom: 1px solid var(--border);
  transition: .3s;
}
.nav.scrolled { box-shadow: 0 2px 24px rgba(0,0,0,.06); }
.nav-inner {
  display: flex; align-items: center; justify-content: space-between;
  height: 100%;
}
.nav-logo {
  font-family: var(--font-serif); font-size: 1.4rem; font-weight: 700;
  color: var(--brand); letter-spacing: 2px;
}
.nav-logo span { color: var(--ink); }
.nav-links {
  display: flex; gap: 32px; list-style: none;
}
.nav-links a {
  font-size: .875rem; font-weight: 500; color: var(--muted);
  transition: color .25s; position: relative; padding: 4px 0;
}
.nav-links a::after {
  content: ''; position: absolute; bottom: 0; left: 0;
  width: 0; height: 2px; background: var(--brand); transition: width .3s;
}
.nav-links a:hover { color: var(--ink); }
.nav-links a:hover::after { width: 100%; }
.nav-cta {
  background: var(--brand); color: #fff; border: none;
  padding: 10px 24px; border-radius: 6px; font-size: .85rem;
  font-weight: 500; cursor: pointer; transition: .25s; letter-spacing: .5px;
}
.nav-cta:hover { background: var(--brand-dark); }
.nav-mobile-toggle {
  display: none; background: none; border: none; cursor: pointer;
  color: var(--ink); padding: 4px;
}
@media (max-width: 900px) {
  .nav-links {
    display: none; position: absolute; top: var(--header-h); left: 0;
    width: 100%; background: rgba(250,248,245,.98);
    backdrop-filter: blur(16px); flex-direction: column; padding: 24px;
    gap: 20px; border-bottom: 1px solid var(--border);
  }
  .nav-links.open { display: flex; }
  .nav-mobile-toggle { display: flex; }
  .nav-cta { display: none; }
}
</style>
