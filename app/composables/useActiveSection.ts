export function useActiveSection(sectionIds: string[] = ['hero', 'problems', 'features', 'pricing', 'faq']) {
  const activeSectionId = ref<string>('')

  if (process.client) {
    onMounted(() => {
      let ticking = false

      const computeActive = () => {
        ticking = false
        const viewportAnchorY = Math.round(window.innerHeight * 0.50)

        let currentId: string | '' = ''

        for (const id of sectionIds) {
          const el = document.getElementById(id)
          if (!el) continue
          const rect = el.getBoundingClientRect()
          if (rect.top <= viewportAnchorY) {
            currentId = id
          }
        }

        if (currentId === 'hero') {
          activeSectionId.value = ''
        } else {
          activeSectionId.value = currentId
        }
      }

      const onScroll = () => {
        if (!ticking) {
          ticking = true
          requestAnimationFrame(computeActive)
        }
      }

      const stopScroll = useEventListener(window, 'scroll', onScroll, { passive: true })
      const stopResize = useEventListener(window, 'resize', onScroll)

      computeActive()

      onBeforeUnmount(() => {
        stopScroll()
        stopResize()
      })
    })
  }

  return { activeSectionId }
}


