<template>
  <section class="section" id="gallery">
    <div class="container">
      <div class="section-header">
        <p class="section-label">餐厅环境</p>
        <h2 class="section-title">雅致空间</h2>
        <p class="section-desc">在东方美学与现代简约的交融中，感受用餐的仪式感</p>
      </div>
      <div class="gallery-grid">
        <div
          v-for="item in galleryItems"
          :key="item.label"
          class="gallery-item"
          :class="item.featured ? 'gallery-item-featured' : ''"
          ref="galleryRefs"
        >
          <img :src="item.image" :alt="item.label" loading="lazy" />
          <span class="gallery-label">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const galleryRefs = ref([])

const galleryItems = [
  { image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80', label: '大厅', featured: true },
  { image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&q=80', label: '包厢' },
  { image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', label: '摆盘艺术' },
  { image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80', label: '吧台' },
  { image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80', label: '茶室' }
]

onMounted(async () => {
  await nextTick()
  const { observe } = useIntersectionObserver()
  const els = galleryRefs.value
  if (Array.isArray(els)) {
    observe(els)
  }
})
</script>

<style scoped>
.gallery-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
}
.gallery-item {
  aspect-ratio: 1; border-radius: 8px; overflow: hidden;
  background: #e8e2d8; position: relative; cursor: pointer;
}
.gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
.gallery-item:hover img { transform: scale(1.08); }
.gallery-item-featured { grid-column: span 2; grid-row: span 2; }
.gallery-item .gallery-label {
  position: absolute; bottom: 12px; left: 12px; color: #fff;
  font-size: .8rem; font-weight: 500; text-shadow: 0 1px 4px rgba(0,0,0,.4);
  opacity: 0; transition: opacity .3s;
}
.gallery-item:hover .gallery-label { opacity: 1; }
@media (max-width: 900px) {
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .gallery-item-featured { grid-column: span 1; grid-row: span 1; }
}
@media (max-width: 600px) {
  .gallery-grid { grid-template-columns: 1fr 1fr; }
}
</style>
