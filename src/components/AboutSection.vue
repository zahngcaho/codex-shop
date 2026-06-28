<template>
  <section class="section" id="about" ref="sectionRef">
    <div class="container">
      <div class="section-header">
        <p class="section-label">关于我们</p>
        <h2 class="section-title">食承自然，味归于简</h2>
        <p class="section-desc">在梓榭，我们用最朴素的食材唤醒最深刻的味道记忆</p>
      </div>
      <div class="about-grid" ref="gridRef">
        <div class="about-image">
          <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80" alt="厨房" loading="lazy" />
        </div>
        <div class="about-text">
          <h3>一锅一铲，皆是修行</h3>
          <p>梓榭创立于2020年，由主理人林师傅领衔。我们坚持"不时不食"的理念——只用当季最新鲜的本地食材，以最克制的方式烹饪，让食材本身的味道成为主角。</p>
          <p>从云南的松茸到舟山的带鱼，从江南的春笋到北疆的羊肉，我们的菜谱随着四季节气更迭而变化。每一道料理背后，都是对食材来源的尊重和对烹饪本质的理解。</p>
          <p class="signature">—— 林师傅，主理人 & 行政总厨</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const sectionRef = ref(null)
const gridRef = ref(null)

onMounted(() => {
  const { observe } = useIntersectionObserver()
  if (gridRef.value) observe(gridRef.value)
})
</script>

<style scoped>
.about-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
}
.about-image {
  position: relative; border-radius: 12px; overflow: hidden;
  aspect-ratio: 4/3; background: #e8e2d8;
}
.about-image img { width: 100%; height: 100%; object-fit: cover; }
.about-image::after {
  content: ''; position: absolute; inset: 0;
  border: 1px solid rgba(255,255,255,.08); border-radius: 12px;
  pointer-events: none;
}
.about-text h3 {
  font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 20px;
}
.about-text p {
  color: var(--muted); font-size: .95rem; line-height: 1.8; margin-bottom: 16px;
}
.about-text .signature {
  font-family: var(--font-serif); font-size: 1.1rem; color: var(--brand); margin-top: 24px;
}
@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
}
</style>
