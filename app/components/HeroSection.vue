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

      <div class="mt-10 max-w-xl mx-auto">
        <form @submit.prevent="onSubmit" class="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0">
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
            class="sm:flex-1"
            group-position="start"
            required
          />
          <TkButton :disabled="loading || !isEmailValid" size="lg" variant="primary" type="submit" icon="i-heroicons-arrow-right" block class="sm:w-auto sm:rounded-l-none sm:-ml-px">
            <template v-if="!loading">M'avertir</template>
            <template v-else>Envoi…</template>
          </TkButton>
        </form>
        <div v-if="isEmailValid" class="mt-3 text-left max-w-xl mx-auto">
          <TkCheckbox v-model="consent" :disabled="loading" size="md" class="w-full">
            <span class="text-xs md:text-sm text-slate-600">
              J’accepte de recevoir des emails de Tooka. Voir
              <NuxtLink to="/legal/cookies" class="underline">notre politique</NuxtLink>.
            </span>
          </TkCheckbox>
        </div>
        <p v-if="message" class="mt-3 text-sm" :class="{ 'text-green-700': success, 'text-red-600': !success }">{{ message }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const email = ref('')
const loading = ref(false)
const message = ref('')
const success = ref<boolean | null>(null)
const consent = ref(false)
const isEmailValid = computed(() => !!email.value && email.value.includes('@'))

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
    const res = await $fetch('/api/klaviyo/subscribe', {
      method: 'POST',
      body: { email: email.value, consent: consent.value }
    }) as { success: boolean; message?: string }
    success.value = !!res?.success
    message.value = res?.message || (success.value ? 'Inscription réussie !' : "Erreur lors de l'inscription")
    if (success.value) {
      email.value = ''
      consent.value = false
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
</style>


