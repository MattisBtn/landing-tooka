<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
  <Analytics/>
</template>

<script setup>
import { Analytics } from '@vercel/analytics/nuxt';
</script>