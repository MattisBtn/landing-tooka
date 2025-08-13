<template>
    <div
        class="w-full h-full flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        <!-- Background Elements -->
        <div
            class="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] opacity-30" />

        <!-- Floating Shapes -->
        <div
            class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full blur-xl opacity-60" />
        <div
            class="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full blur-lg opacity-50" />
        <div
            class="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-2xl opacity-40" />

        <!-- Main Content -->
        <div class="relative z-10 flex flex-col justify-between h-full p-16">
            <!-- Header -->
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <img :src="isDark ? '/images/logo2-dark.png' : '/images/logo2-light.png'" alt="Tooka"
                        class="h-12 w-auto">
                    <div
                        class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60">
                        <div class="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Bientôt disponible</span>
                    </div>
                </div>
            </div>

            <!-- Main Title -->
            <div class="flex-1 flex flex-col justify-center">
                <h1 class="text-6xl font-medium tracking-tight text-gray-900 dark:text-white leading-tight">
                    Créez Plus.
                    <br>
                    Livrez Mieux.
                </h1>
                <p class="text-2xl text-gray-600 dark:text-gray-400 mt-4 font-serif italic">
                    En toute sérénité.
                </p>
                <p class="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl leading-relaxed">
                    {{ description }}
                </p>
            </div>

            <!-- Footer -->
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <div class="flex -space-x-2">
                        <img src="/images/avatars/damien.jpeg" alt="Damien"
                            class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800">
                        <img src="/images/avatars/mattis.jpeg" alt="Mattis"
                            class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800">
                        <img src="/images/avatars/tom.jpeg" alt="Tom"
                            class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800">
                    </div>
                    <span class="text-sm text-gray-600 dark:text-gray-400">
                        Déjà <strong class="text-gray-900 dark:text-white">127</strong> créatifs inscrits
                    </span>
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                    tooka.io
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title?: string
    description?: string
    colorMode?: 'light' | 'dark'
}

const props = withDefaults(defineProps<Props>(), {
    title: 'Créez Plus. Livrez Mieux.',
    description: 'La plateforme qui accompagne les créatifs du brief initial à la livraison finale. Gérez vos projets clients sans stress, avec style.',
    colorMode: 'light'
})

const isDark = computed(() => props.colorMode === 'dark')
</script>
