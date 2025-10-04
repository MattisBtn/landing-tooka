<template>
  <div class="min-h-screen flex flex-col bg-slate-50">
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-slate-900 focus:px-3 focus:py-2 focus:rounded-md">Aller au contenu</a>
    <AppHeader />

    <main id="main" class="pt-24 flex-1">
      <slot />
      <FaqSection v-if="showFaq" />
      <CtaSection />
    </main>

    <AppFooter />
    <BackToTop />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const showFaq = computed(() => route.meta.showFaq !== false)
</script>

<style scoped>
</style>


