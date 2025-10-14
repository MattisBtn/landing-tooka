<template>
  <section class="py-16 md:py-10" aria-labelledby="merci-title">
    <div class="mx-auto max-w-3xl px-6 text-center">
      <h1 id="merci-title" class="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
        Merci !
      </h1>
      <NuxtImg
        src="/images/merci.png"
        alt="Merci"
        class="mx-auto mt-8 w-full max-w-xs md:max-w-sm select-none"
        loading="eager"
        decoding="async"
      />
      <p class="mt-6 text-base md:text-xl text-slate-600">
        Votre email a bien été enregistré. Nous vous préviendrons très bientôt.
      </p>
      <div class="mt-10">
        <TkButton variant="primary" size="lg" to="/">
          Retour à l'accueil
        </TkButton>
      </div>
    </div>
  </section>
  
</template>

<script lang="ts" setup>
import { useFacebookPixel } from '~/composables/useFacebookPixel'
import { useTikTokPixel } from '~/composables/useTikTokPixel'
import merciMiddleware from '~/middleware/merci'

definePageMeta({
  showFaq: false,
  middleware: [merciMiddleware]
})

useSeoMeta({
  title: 'Merci',
  description: "Merci pour votre inscription à la liste d'attente Tooka."
})

const { track } = useFacebookPixel()
const { track: trackTt, identify: identifyTt } = useTikTokPixel()

onMounted(() => {
  const emailHash = sessionStorage.getItem('tt_email_hash')
  if (emailHash) {
    identifyTt({ email: emailHash })
    sessionStorage.removeItem('tt_email_hash')
  }
  
  track('CompleteRegistration', {
    content_name: 'Waitlist Signup',
    status: 'completed',
    value: 0,
    currency: 'EUR'
  })
  trackTt('CompleteRegistration', {
    contents: [
      {
        content_name: 'Waitlist Signup'
      }
    ],
  })
})
</script>

<style scoped>
</style>


