<template>
  <div class="h-16 w-full border-b border-gray-300 sm:h-20">
    <UContainer class="relative my-auto flex h-full items-center justify-between">
      <div class="flex items-center gap-3">
        <UButton color="white" variant="ghost" class="lg:hidden" @click="toggleNavigation">
          <UIcon name="i-heroicons-bars-3" :size="buttonSize" />
        </UButton>
        <CommonLogo />
      </div>
      <div class="flex items-center gap-8">
        <CommonHorizontalNavigation />
        <UAvatar :src="avatarUrl" :size="avatarSize" class="cursor-pointer" chip-color="primary" />
      </div>
      <CommonVerticalNavigation
        :isNavigationOpen="isNavigationOpen"
        @toggleNavigation="toggleNavigation"
      />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const avatarUrl = ref('/lead.png')

const avatarSize = computed(() => (width.value < 640 ? 'sm' : 'md'))
const buttonSize = computed(() => (width.value < 640 ? 20 : 24))

const isNavigationOpen = ref(false)

const toggleNavigation = () => {
  isNavigationOpen.value = !isNavigationOpen.value
}
</script>
