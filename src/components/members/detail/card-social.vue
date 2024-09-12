<template>
  <UButton size="lg" class="rounded-full border-gray-300" color="white" :to="link">
    <template #leading>
      <UIcon :name="icon" class="h-6 w-6" />
    </template>
  </UButton>
</template>

<script setup lang="ts">
import type { MembersDetailCardSocialProps } from '~/types/members'

defineProps<MembersDetailCardSocialProps>()
</script>
