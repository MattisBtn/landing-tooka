<template>
    <motion.div class="flex items-center justify-center gap-4 pt-4" :initial="{ opacity: 0, y: 20 }"
        :animate="!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }"
        :transition="{ duration: 0.7, delay: 3.6, ease: 'easeOut' }">
        <!-- Avatar Group -->
        <motion.div :initial="{ opacity: 0, scale: 0.8 }"
            :animate="!isLoading ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }"
            :transition="{ duration: 0.6, delay: 3.9, ease: 'easeOut' }">
            <UAvatarGroup :avatars="avatars" size="sm" class="flex-shrink-0" aria-label="Équipe Tooka">
                <UAvatar src="/images/avatars/damien.jpeg" alt="Damien - Membre de l'équipe Tooka" />
                <UAvatar src="/images/avatars/mattis.jpeg" alt="Mattis - Membre de l'équipe Tooka" />
                <UAvatar src="/images/avatars/tom.jpeg" alt="Tom - Membre de l'équipe Tooka" />
            </UAvatarGroup>
        </motion.div>

        <!-- Text -->
        <motion.span class="text-sm text-gray-600 dark:text-gray-400" :initial="{ opacity: 0, x: -10 }"
            :animate="!isLoading ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }"
            :transition="{ duration: 0.5, delay: 4.2, ease: 'easeOut' }">
            Déjà <strong class="text-gray-900 dark:text-white">127</strong> créatifs inscrits
        </motion.span>

        <!-- Pipe -->
        <motion.div :initial="{ opacity: 0 }" :animate="!isLoading ? { opacity: 1 } : { opacity: 0 }"
            :transition="{ duration: 0.4, delay: 4.5, ease: 'easeOut' }">
            <USeparator orientation="vertical" />
        </motion.div>

        <!-- LinkedIn Icon -->
        <motion.a href="#"
            class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Suivez-nous sur LinkedIn" target="_blank" rel="noopener noreferrer"
            :initial="{ opacity: 0, scale: 0.8 }"
            :animate="!isLoading ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }"
            :transition="{ duration: 0.5, delay: 4.8, ease: 'easeOut' }" :while-hover="{ scale: 1.1 }"
            :while-tap="{ scale: 0.95 }">
            <UIcon name="i-lucide-linkedin" class="w-4 h-4" />
            <UIcon name="i-lucide-instagram" class="ml-2 w-4 h-4" />
        </motion.a>
    </motion.div>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v';

interface Props {
    isLoading: boolean
}

const props = defineProps<Props>()

// Real avatars from the avatars folder
const avatars = [
    {
        src: '/images/avatars/damien.jpeg',
        alt: 'Damien'
    },
    {
        src: '/images/avatars/mattis.jpeg',
        alt: 'Mattis'
    },
    {
        src: '/images/avatars/tom.jpeg',
        alt: 'Tom'
    }
]
</script>
