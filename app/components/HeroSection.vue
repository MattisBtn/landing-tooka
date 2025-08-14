<template>
    <div class="max-w-4xl w-full text-center space-y-8">
        <!-- Logo -->
        <motion.div class="flex justify-center" :initial="{ opacity: 0, y: -20 }"
            :animate="!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }"
            :transition="{ duration: 0.8, delay: 0.3, ease: 'easeOut' }">
            <ClientOnly>
                <NuxtImg :src="isDark ? '/images/logo2-dark.png' : '/images/logo2-light.png'"
                    alt="Tooka - Logo de la plateforme créative" class="h-12 w-auto" />
                <template #fallback>
                    <div class="h-12 w-auto" />
                </template>
            </ClientOnly>
        </motion.div>

        <!-- Badge -->
        <motion.div :initial="{ opacity: 0, scale: 0.8 }"
            :animate="!isLoading ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }"
            :transition="{ duration: 0.6, delay: 0.6, ease: 'easeOut' }">
            <StatusBadge size="lg" status-text="Bientôt disponible"
                class="mx-auto text-gray-700 dark:text-gray-300 font-semibold">
                Bientôt disponible
            </StatusBadge>
        </motion.div>

        <!-- Title -->
        <h1 class="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 dark:text-white">
            <motion.span class="inline-block" :initial="{ opacity: 0, filter: 'blur(10px)', y: 20 }"
                :animate="!isLoading ? { opacity: 1, filter: 'blur(0px)', y: 0 } : { opacity: 0, filter: 'blur(10px)', y: 20 }"
                :transition="{ duration: 0.8, delay: 0.8, ease: 'easeOut' }">
                Créez
            </motion.span>
            {{ ' ' }}
            <motion.span class="inline-block" :initial="{ opacity: 0, filter: 'blur(10px)', y: 20 }"
                :animate="!isLoading ? { opacity: 1, filter: 'blur(0px)', y: 0 } : { opacity: 0, filter: 'blur(10px)', y: 20 }"
                :transition="{ duration: 0.8, delay: 1.1, ease: 'easeOut' }">
                Plus.
            </motion.span>
            {{ ' ' }}
            <motion.span class="inline-block" :initial="{ opacity: 0, filter: 'blur(10px)', y: 20 }"
                :animate="!isLoading ? { opacity: 1, filter: 'blur(0px)', y: 0 } : { opacity: 0, filter: 'blur(10px)', y: 20 }"
                :transition="{ duration: 0.8, delay: 1.4, ease: 'easeOut' }">
                Livrez
            </motion.span>
            {{ ' ' }}
            <motion.span class="inline-block" :initial="{ opacity: 0, filter: 'blur(10px)', y: 20 }"
                :animate="!isLoading ? { opacity: 1, filter: 'blur(0px)', y: 0 } : { opacity: 0, filter: 'blur(10px)', y: 20 }"
                :transition="{ duration: 0.8, delay: 1.7, ease: 'easeOut' }">
                Mieux.
            </motion.span>
            <br>
            <motion.span class="font-serif font-normal italic text-gray-600 dark:text-gray-400 inline-block"
                :initial="{ opacity: 0, filter: 'blur(8px)', y: 15 }"
                :animate="!isLoading ? { opacity: 1, filter: 'blur(0px)', y: 0 } : { opacity: 0, filter: 'blur(8px)', y: 15 }"
                :transition="{ duration: 1, delay: 2.1, ease: 'easeOut' }">
                En toute sérénité.
            </motion.span>
        </h1>

        <!-- Subtitle -->
        <motion.div class="max-w-2xl mx-auto" :initial="{ opacity: 0, y: 20 }"
            :animate="!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }"
            :transition="{ duration: 0.7, delay: 2.4, ease: 'easeOut' }">
            <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                La plateforme qui accompagne les créatifs du brief initial à la livraison finale. Gérez vos projets
                clients sans stress, avec style.
            </p>
        </motion.div>

        <!-- Email Form -->
        <motion.div class="max-w-lg mx-auto" :initial="{ opacity: 0, y: 30 }"
            :animate="!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }"
            :transition="{ duration: 0.8, delay: 2.7, ease: 'easeOut' }">
            <form class="space-y-6" role="form" aria-labelledby="waitlist-title" @submit.prevent="joinWaitlist">
                <h2 id="waitlist-title" class="sr-only">Rejoindre la liste d'attente</h2>
                <motion.div class="flex flex-col sm:flex-row gap-3 sm:gap-4" :initial="{ opacity: 0, scale: 0.95 }"
                    :animate="!isLoading ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }"
                    :transition="{ duration: 0.6, delay: 3.0, ease: 'easeOut' }">
                    <UInput v-model="email" type="email" placeholder="Entrez votre adresse email" class="flex-1"
                        color="neutral" variant="outline" size="lg" :ui="{
                            base: 'h-12 sm:h-14 text-sm sm:text-base placeholder:text-gray-400 dark:placeholder:text-gray-500'
                        }" aria-label="Adresse email pour rejoindre la liste d'attente" required />
                    <Button type="submit" variant="glass" size="lg" :loading="loading"
                        class="h-12 sm:h-14 text-sm sm:text-base" trailing-icon="i-lucide-arrow-up-right"
                        :aria-label="loading ? 'Inscription en cours...' : 'Rejoindre la liste d\'attente'">
                        <span v-if="!loading">Rejoindre la liste</span>
                        <span v-else>Inscription...</span>
                    </Button>
                </motion.div>

                <!-- Trust indicator -->
                <motion.p class="text-xs text-gray-500 dark:text-gray-400 text-center" :initial="{ opacity: 0 }"
                    :animate="!isLoading ? { opacity: 1 } : { opacity: 0 }"
                    :transition="{ duration: 0.5, delay: 3.3, ease: 'easeOut' }">
                    ✨ Pas de spam, promis. Désinscription en un clic.
                </motion.p>
            </form>
        </motion.div>
    </div>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v';

interface Props {
    isLoading: boolean
}

defineProps<Props>()

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

// Form state
const email = ref('')
const loading = ref(false)

const router = useRouter()

const joinWaitlist = async () => {
    if (!email.value) return

    loading.value = true

    try {
        await $fetch<{ success: boolean; message: string }>('/api/klaviyo/subscribe', {
            method: 'POST',
            body: { email: email.value }
        })

        // Redirect to thank you page
        await router.push('/thank-you')
    } catch (error: unknown) {
        console.error('Error joining waitlist:', error)

        const toast = useToast()
        const errorMessage = error && typeof error === 'object' && 'data' in error
            ? (error.data as { statusMessage?: string })?.statusMessage
            : 'Une erreur est survenue. Veuillez réessayer.'

        toast.add({
            title: 'Erreur lors de l\'inscription',
            description: errorMessage,
            color: 'error',
            icon: 'i-lucide-alert-circle'
        })
    } finally {
        loading.value = false
    }
}
</script>
