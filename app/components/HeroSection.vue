<template>
  <section id="hero" class="relative pt-20 pb-8 overflow-hidden" aria-labelledby="hero-title">
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-full blur-3xl opacity-30"></div>
      <div class="absolute top-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-amber-50 to-orange-50 rounded-full blur-3xl opacity-20"></div>
    </div>

    <div class="mx-auto max-w-5xl px-6 text-center relative">
      <div class="inline-block animate-fade-in">
        <TkBadge label="Bientôt disponible">
        </TkBadge>
      </div>

      <h1 id="hero-title" class="mt-10 animate-fade-in-up">
        <span class="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] [letter-spacing:-.02em] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
          La solution tout-en-un
        </span>
        <span class="mt-2 block text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] [letter-spacing:-.02em] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
          pour les photographes
        </span>
      </h1>

      <p class="mt-8 text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style="animation-delay: 100ms;">
        Gagnez du temps. Augmentez vos revenus.
      </p>

      <div class="mt-12 max-w-xl mx-auto animate-fade-in-up" style="animation-delay: 200ms;">
        <div class="relative">
          <div class="absolute -inset-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-3xl blur-2xl opacity-30"></div>
          <form @submit.prevent="onSubmit" class="relative flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0 p-2 rounded-2xl bg-white/80 backdrop-blur-xl ring-1 ring-slate-200/50 shadow-2xl shadow-slate-900/10">
            <TkInput
              v-model="email"
              type="email"
              name="email"
              inputmode="email"
              autocomplete="email"
              placeholder="Entrez votre email"
              size="lg"
              aria-label="Adresse email"
              :disabled="loading"
              block
              class="sm:flex-1 border-0 bg-transparent focus:ring-0"
              group-position="start"
              required
            />
            <TkButton :disabled="loading || !isEmailValid" size="lg" variant="primary" type="submit" icon="i-heroicons-arrow-right" block class="sm:w-auto sm:rounded-xl">
              <template v-if="!loading">M'inscrire à la bêta</template>
              <template v-else>Envoi…</template>
            </TkButton>
          </form>
        </div>
        <div v-if="isEmailValid" class="mt-4 text-left max-w-xl mx-auto">
          <TkCheckbox v-model="consent" :disabled="loading" size="md" class="w-full">
            <span class="text-sm text-slate-600">
              J'accepte de recevoir des emails de Tooka. Voir
              <NuxtLink to="/legal/cookies" class="underline hover:text-slate-900 transition-colors">notre politique</NuxtLink>.
            </span>
          </TkCheckbox>
        </div>
        <p v-if="message" class="mt-4 text-sm font-medium" :class="{ 'text-green-700': success, 'text-red-600': !success }">{{ message }}</p>
      </div>

      <div class="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 animate-fade-in-up" style="animation-delay: 300ms;">
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-check-circle-solid" class="w-5 h-5 text-green-500" />
          <span>Sans engagement</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-check-circle-solid" class="w-5 h-5 text-green-500" />
          <span>Accès prioritaire</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-check-circle-solid" class="w-5 h-5 text-green-500" />
          <span>+200 photographes inscrits</span>
        </div>
      </div>

      <div class="mt-12 flex justify-center animate-fade-in-up" style="animation-delay: 400ms;">
        <TkSocialProof />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useFacebookPixel } from '~/composables/useFacebookPixel'
import { useTikTokPixel } from '~/composables/useTikTokPixel'
import { sha256Hex } from '~/utils/crypto'

const email = ref('')
const loading = ref(false)
const message = ref('')
const success = ref<boolean | null>(null)
const consent = ref(false)
const isEmailValid = computed(() => !!email.value && email.value.includes('@'))
const { track } = useFacebookPixel()
const { track: trackTt, identify: identifyTt } = useTikTokPixel()

watch(email, () => {
  if (!isEmailValid.value) consent.value = false
})

async function onSubmit() {
  if (!email.value || !email.value.includes('@')) {
    message.value = 'Veuillez saisir un email valide.'
    success.value = false
    return
  }
  if (!consent.value) {
    message.value = 'Veuillez accepter le consentement.'
    success.value = false
    return
  }
  loading.value = true
  message.value = ''
  success.value = null
  
  try {
    const emailHash = await sha256Hex(email.value)
    identifyTt({ email: emailHash })
    sessionStorage.setItem('tt_email_hash', emailHash)
  } catch {}
  
  track('Lead', {
    content_name: 'Waitlist Form Submit',
    content_category: 'waitlist'
  })
  trackTt('Lead', {
    contents: [
      {
        content_name: 'Waitlist Form Submit',
        content_category: 'waitlist'
      }
    ],
    status: 'submitted'
  })
  
  try {
    const res = await $fetch('/api/klaviyo/subscribe', {
      method: 'POST',
      body: { email: email.value, consent: consent.value }
    }) as { success: boolean; message?: string }
    success.value = !!res?.success
    message.value = res?.message || (success.value ? 'Inscription réussie !' : "Erreur lors de l'inscription")
    if (success.value) {
      email.value = ''
      consent.value = false
      await new Promise(resolve => setTimeout(resolve, 300))
      await navigateTo('/merci')
      return
    }
  } catch (err: any) {
    success.value = false
    message.value = err?.statusMessage || "Erreur lors de l'inscription"
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}
</style>


