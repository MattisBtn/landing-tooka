<template>
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
      <p class="text-sm text-slate-600 font-medium">{{ text }}</p>
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

