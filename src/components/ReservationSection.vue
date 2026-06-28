<template>
  <section class="reservation" id="contact">
    <div class="container">
      <p class="section-label">联系我们</p>
      <h2 class="section-title">预订餐位</h2>
      <p class="section-desc">我们期待为您打造一次难忘的用餐体验</p>
      <div class="reservation-info">
        <div class="reservation-item" v-for="info in contactInfo" :key="info.label">
          <div class="info-icon">
            <component :is="info.icon" :size="20" />
          </div>
          <span class="info-label">{{ info.label }}</span>
          <span class="info-value">{{ info.value }}</span>
        </div>
      </div>
      <button class="btn btn-primary" @click="reserve" style="margin: 0 auto">
        立即预订
        <CalendarDays :size="16" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { Phone, MapPin, Clock, CalendarDays } from 'lucide-vue-next'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'
import { ref, onMounted } from 'vue'

const itemsRef = ref([])

const contactInfo = [
  { icon: Phone, label: '电话', value: '010-8888-6666' },
  { icon: MapPin, label: '地址', value: '北京市朝阳区建国路88号' },
  { icon: Clock, label: '营业时间', value: '11:00 - 22:00' }
]

function reserve() {
  alert('预订功能即将上线，敬请期待！')
}

onMounted(() => {
  const { observe } = useIntersectionObserver()
  const els = itemsRef.value
  if (Array.isArray(els)) {
    observe(els)
  }
})
</script>

<style scoped>
.reservation {
  background: linear-gradient(135deg, #1e1812 0%, #2c2418 100%);
  color: #fff; text-align: center; padding: 100px 0;
}
.reservation .section-label { color: var(--brand-light); }
.reservation .section-desc { color: rgba(255,255,255,.6); }
.reservation-info {
  display: flex; justify-content: center; gap: 48px;
  flex-wrap: wrap; margin: 48px 0 40px;
}
.reservation-item {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
}
.info-icon {
  width: 44px; height: 44px; border-radius: 50%;
  background: rgba(255,255,255,.08); display: flex;
  align-items: center; justify-content: center;
  margin-bottom: 4px; color: var(--brand-light);
}
.info-label {
  font-size: .75rem; letter-spacing: 2px; text-transform: uppercase;
  color: rgba(255,255,255,.4); font-weight: 500;
}
.info-value { font-size: 1rem; font-weight: 500; }
@media (max-width: 600px) { .reservation-info { gap: 24px; } }
</style>
