<template>
  <section class="py-16 md:py-20" aria-labelledby="cta-title">
    <div class="mx-auto max-w-6xl px-6">
      <div class="relative overflow-hidden rounded-3xl backdrop-blur-2xl bg-white/70 ring-1 ring-white/60 shadow-2xl shadow-black/20 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-b before:from-white/60 before:via-white/20 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:rounded-3xl after:border after:border-white/40 after:pointer-events-none">
        <span class="pointer-events-none absolute -top-20 left-1/2 h-32 w-96 -translate-x-1/2 rounded-full bg-white/40 blur-3xl"></span>
        <span class="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full bg-black/10 blur-2xl"></span>
        
        <div class="relative z-10 flex flex-col items-center text-center p-8 md:p-12">
          <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div class="flex -space-x-3">
              <NuxtImg
                v-for="avatar in avatars"
                :key="avatar.name"
                :src="avatar.src"
                :alt="avatar.name"
                class="h-12 w-12 rounded-full ring-2 ring-white object-cover"
                loading="lazy"
              />
            </div>
            
            <div class="flex flex-col items-center sm:items-start gap-1">
              <div class="flex gap-0.5">
                <Icon
                  v-for="i in 5"
                  :key="i"
                  name="i-heroicons-star-solid"
                  class="h-5 w-5 text-yellow-400"
                  aria-hidden="true"
                />
              </div>
              <p class="text-sm text-slate-600 font-medium">Rejoignez +200 photographes qui nous font confiance</p>
            </div>
          </div>

          <h2 id="cta-title" class="mt-10 text-2xl md:text-4xl font-extrabold leading-tight text-slate-900">
            Prêt à simplifier votre activité ?
          </h2>
          
          <p class="mt-4 text-base md:text-lg text-slate-600 max-w-2xl">
            Rejoignez la bêta et découvrez comment Tooka peut transformer votre façon de travailler avec vos clients.
          </p>

          <div class="mt-8">
            <TkButton to="/#hero" size="lg" variant="primary" icon="i-heroicons-arrow-right">
              Commencer gratuitement
            </TkButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const avatars = [
  { name: 'Mattis', src: '/images/avatars/mattis.jpeg' },
  { name: 'Damien', src: '/images/avatars/damien.jpeg' },
  { name: 'Tom', src: '/images/avatars/tom.jpeg' }
]
</script>

