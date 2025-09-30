<template>
  <div class="mx-auto max-w-3xl px-6 py-12">
    <h1 class="text-3xl font-bold tracking-tight text-slate-900">Mentions légales</h1>

    <section class="mt-8 space-y-6 text-slate-700">
      <div>
        <h2 class="text-xl font-semibold text-slate-900">Éditeur du site</h2>
        <p class="mt-2">SIMPLE STUDIO</p>
        <ul class="mt-2 space-y-1">
          <li><span class="font-medium">Forme juridique:</span> Société à responsabilité limitée (SARL)</li>
          <li><span class="font-medium">SIREN:</span> 938 516 960</li>
          <li><span class="font-medium">SIRET (siège social):</span> 938 516 960 00011</li>
          <li><span class="font-medium">N° TVA intracommunautaire:</span> FR83938516960</li>
          <li><span class="font-medium">Date de création:</span> 13 décembre 2024</li>
          <li><span class="font-medium">Activité (NAF / APE):</span> Activités photographiques - 7420Z</li>
          <li><span class="font-medium">Adresse:</span> 18 RUE ALEXANDRE PIEYRE, 30900 NIMES</li>
          <li><span class="font-medium">Dirigeant:</span> Tom ALBART</li>
          <li><span class="font-medium">Contact:</span> <a class="text-slate-900 underline" href="mailto:contact@tooka.io">contact@tooka.io</a></li>
        </ul>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-slate-900">Hébergeur</h2>
        <p class="mt-2">Vercel Inc.</p>
        <p>Site: <a class="text-slate-900 underline" href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></p>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-slate-900">Propriété intellectuelle</h2>
        <p class="mt-2">L'ensemble des contenus du site Tooka (textes, images, graphismes, logos, marques, etc.) est protégé par le droit d'auteur et les droits de propriété intellectuelle. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation préalable est interdite.</p>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-slate-900">Responsabilité</h2>
        <p class="mt-2">SIMPLE STUDIO s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site. Elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu. La responsabilité de SIMPLE STUDIO ne saurait être engagée pour tout dommage direct ou indirect pouvant résulter de l'accès au site ou de son utilisation.</p>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-slate-900">Données personnelles</h2>
        <p class="mt-2">Pour toute question relative à la protection des données personnelles, vous pouvez nous contacter à l'adresse <a class="text-slate-900 underline" href="mailto:contact@tooka.io">contact@tooka.io</a>.</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Mentions légales',
  description: 'Mentions légales du site Tooka et informations sur l’éditeur et l’hébergeur.'
})

definePageMeta({
  layout: 'default',
  showFaq: false
})
</script>


