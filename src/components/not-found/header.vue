<template>
  <div class="h-16 w-full border-b border-gray-300 sm:h-20">
    <UContainer class="flex h-full items-center justify-between">
      <CommonLogo />
      <UAvatar :src="avatarUrl" :size="avatarSize" class="cursor-pointer" chip-color="primary" />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const avatarUrl = ref('https://avatars.githubusercontent.com/u/739984?v=4')

const avatarSize = computed(() => (width.value < 640 ? 'sm' : 'md'))
</script>
