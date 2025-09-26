<template>
  <section id="hero" class="py-16 md:py-20" aria-labelledby="hero-title">
    <div class="mx-auto max-w-4xl px-6 text-center">
      <TkBadge>
        <template #left>
          <span class="inline-flex items-center gap-2">
            <UIcon name="i-heroicons-sparkles-20-solid" class="h-4 w-4" aria-hidden="true" />
            Nouvelle version
          </span>
        </template>
        Pensée pour créatifs
      </TkBadge>

      <h1 id="hero-title" class="mt-8">
        <span class="block text-5xl md:text-7xl font-extrabold leading-[1.05] [letter-spacing:-.02em] text-slate-900">
          Créez plus.
        </span>
        <span class="mt-2 block text-5xl md:text-7xl font-extrabold leading-[1.05] [letter-spacing:-.02em] text-slate-900">
          Livrez mieux.
        </span>
      </h1>

      <p class="mt-6 text-base md:text-xl text-slate-600 max-w-2xl md:max-w-3xl mx-auto">
        Clients, devis, contrats et livrables —
        <br class="hidden sm:block" />
        tout dans un seul CRM pensé pour les créatifs.
      </p>

      <div class="mt-10 flex items-center justify-center gap-4">
        <TkButton size="lg" variant="primary" icon="i-heroicons-arrow-right">
          Essayer gratuitement
        </TkButton>
        <TkButton size="lg" variant="secondary">
          Voir les fonctionnalités
        </TkButton>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>

<style scoped>
</style>


