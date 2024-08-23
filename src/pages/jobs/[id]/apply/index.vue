<template>
  <UContainer class="mt-12">
    <JobsApply :position="position" />
  </UContainer>
</template>

<script setup lang="ts">
const position = ref<string>('Frontend Developer')
</script>
