<template>
  <section id="problems" class="scroll-mt-28 py-16 md:py-10" aria-labelledby="problems-title">
    <div class="mx-auto max-w-6xl px-6">
      <div class="text-center">
        <TkBadge label="Zéro chaos" />
        <h2 id="problems-title" class="mt-8 text-2xl md:text-3xl font-extrabold leading-tight text-slate-900">
          Tout ce dont un photographe a besoin, au même endroit.        </h2>
        <p class="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
          Centralisez vos devis, sélections et livraisons au même endroit. Gagnez du temps, augmentez vos revenus, offrez une expérience client pro.        </p>
      </div>

      <div class="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <div class="relative overflow-hidden rounded-xl md:rounded-2xl backdrop-blur-2xl bg-white/70 ring-1 ring-white/60 shadow-xl md:shadow-2xl shadow-black/20 before:absolute before:inset-0 before:rounded-xl md:before:rounded-2xl before:bg-gradient-to-b before:from-white/60 before:via-white/20 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:rounded-xl md:after:rounded-2xl after:border after:border-white/40 after:pointer-events-none">
          <span class="pointer-events-none absolute -top-14 left-1/2 h-24 w-64 -translate-x-1/2 rounded-full bg-white/40 blur-3xl"></span>
          <span class="pointer-events-none absolute -bottom-6 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-black/10 blur-2xl"></span>
          <div class="relative z-10 flex flex-row md:flex-col items-center md:text-center text-left gap-4 md:gap-0 p-4 md:p-6">
          <NuxtImg
            src="/images/gagner-du-temps.png"
            alt="Gagner du temps"
            class="h-16 w-16 md:h-24 md:w-24 object-contain shrink-0"
            loading="lazy"
          />
          <div class="flex-1">
            <h3 class="md:mt-6 text-lg md:text-xl font-semibold text-slate-900">Gagnez du temps</h3>
            <p class="mt-1 md:mt-2 text-sm md:text-base text-slate-600">Tout est centralisé au même endroit pour un process simple et fluide.</p>
          </div>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-xl md:rounded-2xl backdrop-blur-2xl bg-white/70 ring-1 ring-white/60 shadow-xl md:shadow-2xl shadow-black/20 before:absolute before:inset-0 before:rounded-xl md:before:rounded-2xl before:bg-gradient-to-b before:from-white/60 before:via-white/20 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:rounded-xl md:after:rounded-2xl after:border after:border-white/40 after:pointer-events-none">
          <span class="pointer-events-none absolute -top-14 left-1/2 h-24 w-64 -translate-x-1/2 rounded-full bg-white/40 blur-3xl"></span>
          <span class="pointer-events-none absolute -bottom-6 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-black/10 blur-2xl"></span>
          <div class="relative z-10 flex flex-row md:flex-col items-center md:text-center text-left gap-4 md:gap-0 p-4 md:p-6">
          <NuxtImg
            src="/images/gagner-de-l-argent.png"
            alt="Gagner de l'argent"
            class="h-16 w-16 md:h-24 md:w-24 object-contain shrink-0"
            loading="lazy"
          />
          <div class="flex-1">
            <h3 class="md:mt-6 text-lg md:text-xl font-semibold text-slate-900">Augmentez vos revenus</h3>
            <p class="mt-1 md:mt-2 text-sm md:text-base text-slate-600">Propositions interactives et un système de sélection pensé pour booster naturellement vos ventes.</p>
          </div>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-xl md:rounded-2xl backdrop-blur-2xl bg-white/70 ring-1 ring-white/60 shadow-xl md:shadow-2xl shadow-black/20 before:absolute before:inset-0 before:rounded-xl md:before:rounded-2xl before:bg-gradient-to-b before:from-white/60 before:via-white/20 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:rounded-xl md:after:rounded-2xl after:border after:border-white/40 after:pointer-events-none">
          <span class="pointer-events-none absolute -top-14 left-1/2 h-24 w-64 -translate-x-1/2 rounded-full bg-white/40 blur-3xl"></span>
          <span class="pointer-events-none absolute -bottom-6 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-black/10 blur-2xl"></span>
          <div class="relative z-10 flex flex-row md:flex-col items-center md:text-center text-left gap-4 md:gap-0 p-4 md:p-6">
          <NuxtImg
            src="/images/paraitre-plus-pro.png"
            alt="Paraître plus pro"
            class="h-16 w-16 md:h-24 md:w-24 object-contain shrink-0"
            loading="lazy"
          />
          <div class="flex-1">
            <h3 class="md:mt-6 text-lg md:text-xl font-semibold text-slate-900">Paraissez plus pro</h3>
            <p class="mt-1 md:mt-2 text-sm md:text-base text-slate-600">Un workflow clair et professionnel qui inspire confiance dès le premier échange. </p>
          </div>
          </div>
        </div>

      </div>
      <div class="flex w-full justify-center mt-12">
        <TkButton href="https://app.tooka.io" target="_blank" rel="noopener noreferrer" size="lg" variant="primary" icon="i-heroicons-arrow-right" @click="handleAppAccessCta('problems')">Commencer maintenant</TkButton>
        </div>
    </div>
  </section>
  
</template>

<script lang="ts" setup>
const { handleAppAccessCta } = useAppCta()
</script>

<style scoped>
</style>


