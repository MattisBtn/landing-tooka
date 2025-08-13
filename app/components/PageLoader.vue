<template>
    <motion.div v-if="isLoading"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gray-900"
        :initial="{ opacity: 1, scale: 1 }" :animate="{ opacity: isLoading ? 1 : 0, scale: isLoading ? 1 : 1.05 }"
        :transition="{ duration: 1.2, ease: 'easeInOut' }">
        <div class="text-center space-y-8">
            <!-- Logo during loading -->
            <motion.div :initial="{ opacity: 0, scale: 0.8 }" :animate="{ opacity: 1, scale: 1 }"
                :transition="{ duration: 0.6, ease: 'easeOut' }">
                <ClientOnly>
                    <NuxtImg :src="isDark ? '/images/logo2-dark.png' : '/images/logo2-light.png'" alt="Tooka - Logo"
                        class="h-16 w-auto mx-auto" />
                    <template #fallback>
                        <div class="h-16 w-auto mx-auto" />
                    </template>
                </ClientOnly>
            </motion.div>

            <!-- Loading text -->
            <motion.div :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.6, delay: 0.3, ease: 'easeOut' }" class="space-y-4">
                <h2 class="text-xl font-serif text-gray-900 dark:text-white tracking-wide">
                    Quelque chose de magique arrive...
                </h2>

                <!-- Progress bar -->
                <div class="w-64 mx-auto">
                    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                        <motion.div class="bg-indigo-500 h-1.5 rounded-full origin-left"
                            :style="{ scaleX: progressScale }" :initial="{ scaleX: 0 }" />
                    </div>

                    <!-- Progress percentage -->
                    <motion.p class="text-sm text-gray-500 dark:text-gray-400 mt-2 font-mono"
                        :animate="{ opacity: [0.5, 1, 0.5] }"
                        :transition="{ duration: 2, repeat: Infinity, ease: 'easeInOut' }">
                        {{ progressPercentage }}%
                    </motion.p>
                </div>
            </motion.div>
        </div>
    </motion.div>
</template>

<script lang="ts" setup>
import { motion, useMotionValueEvent, useSpring, useTransform } from 'motion-v';

interface Props {
    isLoading: boolean
    loadingProgress: MotionValue<number>
}

const props = defineProps<Props>()

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const progressSpring = useSpring(props.loadingProgress, { damping: 30, stiffness: 100 })
const progressScale = useTransform(progressSpring, [0, 100], [0, 1])
const progressPercentage = ref(0)

// Watch progress spring to update percentage display with animation
useMotionValueEvent(progressSpring, 'change', (latest) => {
    progressPercentage.value = Math.round(latest || 0)
})
</script>
