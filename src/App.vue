<template>
  <NavBar @cta="scrollTo('contact')" />
  <HeroSection @cta="scrollTo('contact')" @scroll-menu="scrollTo('menu')" />
  <AboutSection />
  <MenuSection />
  <GallerySection />
  <ReservationSection />
  <FooterSection />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import MenuSection from './components/MenuSection.vue'
import GallerySection from './components/GallerySection.vue'
import ReservationSection from './components/ReservationSection.vue'
import FooterSection from './components/FooterSection.vue'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
