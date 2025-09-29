<template>
    <div class="min-h-screen bg-slate-50 flex flex-col items-center justify-center relative px-4">
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50">Aller au contenu principal</a>


        <main id="main-content" class="w-full max-w-2xl">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10 ring-1 ring-white/60 backdrop-blur-2xl bg-white/70">
                <span class="pointer-events-none absolute -top-24 left-1/2 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-white/50 blur-3xl"></span>
                <div class="relative p-8 md:p-12 text-center space-y-6">
                    <div class="flex justify-center">
                        <NuxtImg src="/images/error.png" alt="Illustration d'erreur Tooka" class="h-36 md:h-44 w-auto" loading="lazy" />
                    </div>

                    <p class="text-base md:text-lg text-slate-600 leading-relaxed">{{ getErrorDescription() }}</p>

                    <div class="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                        <TkButton variant="primary" size="lg" icon="i-heroicons-home" icon-position="leading" type="button" @click="handleError">
                            Retour à l'accueil
                        </TkButton>
                        <TkButton variant="secondary" size="lg" icon="i-heroicons-arrow-left" icon-position="leading" type="button" @click="goBack">
                            Retour en arrière
                        </TkButton>
                    </div>

                    <p class="text-sm text-slate-500">
                        Si le problème persiste, contactez-nous à
                        <a href="mailto:contact@tooka.io" class="text-slate-900 hover:underline">contact@tooka.io</a>
                    </p>
                </div>
            </div>

            <p class="mt-6 text-center text-xs text-slate-500">© {{ new Date().getFullYear() }} Tooka. Tous droits réservés.</p>
        </main>
    </div>
    </template>

<script lang="ts" setup>
const error = useError()

const getErrorDescription = () => {
    const statusCode = error.value?.statusCode || 500
    switch (statusCode) {
        case 404:
            return 'La page que vous recherchez n\'existe pas ou a été déplacée.'
        case 403:
            return 'Vous n\'avez pas les permissions nécessaires pour accéder à cette page.'
        case 500:
            return 'Une erreur interne s\'est produite. Nos équipes ont été notifiées.'
        case 503:
            return 'Le service est temporairement indisponible. Veuillez réessayer plus tard.'
        default:
            return 'Une erreur inattendue s\'est produite. Veuillez réessayer.'
    }
}

const handleError = () => {
    clearError({ redirect: '/' })
}

const goBack = () => {
    if (import.meta.client) {
        window.history.back()
    }
}

useSeoMeta({
    title: `Erreur ${error.value?.statusCode || 500} - Tooka`,
    description: 'Une erreur est survenue. Retournez à l\'accueil de Tooka.',
    robots: 'noindex, nofollow'
})
</script>
