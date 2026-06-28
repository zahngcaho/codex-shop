<template>
  <div class="menu-card" ref="cardRef">
    <div class="menu-card-img">
      <img :src="item.image" :alt="item.title" loading="lazy" />
    </div>
    <div class="menu-card-body">
      <h3 class="menu-card-title">{{ item.title }}</h3>
      <p class="menu-card-desc">{{ item.desc }}</p>
      <span class="menu-card-price">¥{{ item.price }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const props = defineProps({
  item: { type: Object, required: true }
})

const cardRef = ref(null)

onMounted(() => {
  const { observe } = useIntersectionObserver()
  if (cardRef.value) observe(cardRef.value)
})
</script>

<style scoped>
.menu-card {
  background: #fff; border-radius: 10px; overflow: hidden;
  transition: transform .3s, box-shadow .3s; cursor: pointer;
  border: 1px solid var(--border);
}
.menu-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,.07); }
.menu-card-img { aspect-ratio: 4/3; overflow: hidden; background: #e8e2d8; }
.menu-card-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
.menu-card:hover .menu-card-img img { transform: scale(1.06); }
.menu-card-body { padding: 20px; }
.menu-card-title {
  font-family: var(--font-serif); font-size: 1.1rem; font-weight: 600; margin-bottom: 6px;
}
.menu-card-desc { font-size: .85rem; color: var(--muted); line-height: 1.5; margin-bottom: 12px; }
.menu-card-price { font-weight: 600; color: var(--brand); font-size: 1rem; }
</style>
