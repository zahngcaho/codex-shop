<template>
  <section class="section section-alt" id="menu">
    <div class="container">
      <div class="section-header">
        <p class="section-label">精选菜单</p>
        <h2 class="section-title">四季风物</h2>
        <p class="section-desc">精选当季食材，以现代手法演绎经典风味</p>
      </div>
      <div class="menu-grid">
        <MenuCard v-for="item in menuItems" :key="item.title" :item="item" />
      </div>
    </div>
  </section>
</template>

<script setup>
import MenuCard from './MenuCard.vue'

const menuItems = [
  {
    title: '黑松露野菌烩饭',
    desc: '云南野生菌配意大利黑松露，帕玛森芝士慢煮',
    price: 100,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80'
  },
  {
    title: '清蒸东海鲈鱼',
    desc: '当日捕捞东海鲈鱼，姜葱清蒸，淋热油酱汁',
    price: 198,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80'
  },
  {
    title: '慢炖东坡肉',
    desc: '精选五花肉，黄酒冰糖慢炖六小时，入口即化',
    price: 128,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80'
  }
]
</script>

<style scoped>
.menu-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
}
@media (max-width: 900px) {
  .menu-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .menu-grid { grid-template-columns: 1fr; }
}
</style>
