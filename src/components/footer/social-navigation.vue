<template>
  <div class="flex space-x-6 pt-6">
    <nuxt-link v-for="button in buttons" :key="button.icon" :to="button.href">
      <UButton
        color="gray"
        size="xl"
        class="cursor-pointer rounded-full border border-gray-300 text-gray-600"
        :icon="button.icon"
      >
      </UButton>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const buttons = ref([
  { icon: 'i-mdi-facebook', href: 'https://facebook.com' },
  { icon: 'i-mdi-linkedin', href: 'https://linkedin.com' },
  { icon: 'i-mdi-github', href: 'https://github.com' },
  { icon: 'i-mdi-email-outline', href: 'mailto:example@example.com' },
  { icon: 'i-mdi-instagram', href: 'https://instagram.com' }
])
</script>
