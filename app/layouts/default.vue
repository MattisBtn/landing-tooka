<template>
  <div class="min-h-screen bg-slate-50">
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-slate-900 focus:px-3 focus:py-2 focus:rounded-md">Aller au contenu</a>
    <AppHeader />

    <main id="main" class="pt-12">
      <slot />
      <FaqSection />
    </main>

    <AppFooter />
    <BackToTop />
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
</style>


