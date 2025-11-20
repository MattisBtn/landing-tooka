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
        <TkButton
          href="https://app.tooka.io/register"
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          variant="primary"
          icon="i-heroicons-arrow-right"
          class="sm:w-auto sm:rounded-xl"
          @click="handleAppAccessCta('hero')"
        >
          Commencer maintenant
        </TkButton>
      </div>

      <ul class="mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-sm text-slate-500 animate-fade-in-up" style="animation-delay: 300ms;" role="list" aria-label="Avantages Tooka">
        <li class="flex items-center gap-1.5">
          <UIcon name="i-heroicons-check-circle-solid" class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0" aria-hidden="true" />
          <span>Sans engagement</span>
        </li>
        <li class="flex items-center gap-1.5">
          <UIcon name="i-heroicons-check-circle-solid" class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0" aria-hidden="true" />
          <span>Accès prioritaire</span>
        </li>
        <li class="flex items-center gap-1.5">
          <UIcon name="i-heroicons-check-circle-solid" class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0" aria-hidden="true" />
          <span>+200 photographes inscrits</span>
        </li>
      </ul>

      <div class="mt-6 sm:mt-10 flex justify-center animate-fade-in-up" style="animation-delay: 400ms;">
        <TkSocialProof />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { handleAppAccessCta } = useAppCta()
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


