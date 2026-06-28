import { onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(selector, options = {}) {
  let observer = null

  const defaultOptions = { threshold: 0.1, ...options }

  function observe(refs) {
    if (observer) observer.disconnect()

    if (refs instanceof HTMLElement) {
      refs = [refs]
    }

    if (!refs || refs.length === 0) return

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, defaultOptions)

    refs.forEach((el) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(24px)'
        el.style.transition = 'opacity .6s ease, transform .6s ease'
        observer.observe(el)
      }
    })
  }

  function disconnect() {
    if (observer) observer.disconnect()
  }

  return { observe, disconnect }
}
