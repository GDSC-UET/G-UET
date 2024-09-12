<template>
  <UContainer class="mt-4 flex flex-col items-center text-black">
    <NuxtImg src="/404.png" class="w-[300px]" />
    <span class="text-2xl font-bold">Page not found</span>
    <span class="text-xl"
      >Back to <nuxt-link to="/" class="text-primary">Home page</nuxt-link></span
    >
  </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
  layout: '404'
})
</script>
