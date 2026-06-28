import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollEffect() {
  const scrolled = ref(false)

  function handleScroll() {
    scrolled.value = window.scrollY > 40
  }

  onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))

  return { scrolled }
}
