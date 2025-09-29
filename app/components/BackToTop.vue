<template>
  <transition name="fade">
    <div v-show="visible" class="fixed bottom-6 right-6 z-50">
      <TkButton
        icon-only
        variant="secondary"
        size="lg"
        :aria-label="'Revenir en haut'"
        @click="scrollToTop"
      >
        <template #icon>
          <Icon name="i-heroicons-arrow-up" class="h-5 w-5" />
        </template>
      </TkButton>
    </div>
  </transition>
  
</template>

<script lang="ts" setup>
const { y } = useWindowScroll()
const { width } = useWindowSize()

const anchorTop = ref<number>(0)

function computeSecondSectionTop() {
  const main = document.getElementById('main')
  const sections = main?.querySelectorAll('section')
  const target = sections && sections.length > 1
    ? sections[1]
    : (sections && sections.length > 0 ? sections[0] : null)
  if (!target) {
    anchorTop.value = 0
    return
  }
  const rect = target.getBoundingClientRect()
  anchorTop.value = rect.top + window.scrollY
}

onMounted(() => {
  computeSecondSectionTop()
  requestAnimationFrame(() => computeSecondSectionTop())
  window.addEventListener('load', computeSecondSectionTop, { passive: true })
  window.addEventListener('resize', computeSecondSectionTop, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', computeSecondSectionTop)
  window.removeEventListener('load', computeSecondSectionTop)
})

watch(width, () => computeSecondSectionTop())

const visible = computed(() => y.value >= Math.max(1, anchorTop.value - 1))

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>


