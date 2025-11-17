<template>
  <div class="mx-auto max-w-3xl px-6 py-12">
    <h1 class="text-3xl font-bold tracking-tight text-slate-900">Politique de cookies</h1>
    <div class="mt-8">
      <NuxtCookieConsentPolicy />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  showFaq: false
})

useSeoMeta({
  title: 'Politique de cookies | Tooka',
  description: 'Politique de cookies et gestion des données de navigation sur Tooka.',
  robots: 'noindex, follow'
})
</script>