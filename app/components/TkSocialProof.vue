<template>
  <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-6" role="group" aria-label="Preuve sociale">
    <div class="flex -space-x-2 sm:-space-x-3" role="list" aria-label="Photos de photographes utilisateurs">
      <NuxtImg
        v-for="avatar in avatars"
        :key="avatar.name"
        :src="avatar.src"
        :alt="`Photo de ${avatar.name}, photographe utilisant Tooka`"
        class="h-10 w-10 sm:h-12 sm:w-12 rounded-full ring-2 ring-white object-cover"
        loading="lazy"
        role="listitem"
      />
    </div>
    
    <div class="flex flex-col items-center sm:items-start gap-0.5 sm:gap-1">
      <div class="flex gap-0.5" role="img" aria-label="Note de 5 étoiles sur 5">
        <Icon
          v-for="i in 5"
          :key="i"
          name="i-heroicons-star-solid"
          class="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400"
          aria-hidden="true"
        />
      </div>
      <p class="text-xs sm:text-sm text-slate-600 font-medium">{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  text?: string
}

withDefaults(defineProps<Props>(), {
  text: 'Rejoignez +200 photographes qui nous font confiance'
})

const avatars = [
  { name: 'Mattis', src: '/images/avatars/mattis.jpeg' },
  { name: 'Damien', src: '/images/avatars/damien.jpeg' },
  { name: 'Tom', src: '/images/avatars/tom.jpeg' }
]
</script>

