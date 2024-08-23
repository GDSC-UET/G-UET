<template>
  <div class="relative">
    <UBadge :color="color" :label="team" size="lg" class="relative mt-2" />
    <div class="absolute bottom-[0.5px] flex h-[2px] w-full">
      <div class="bg-primary grow rounded-bl-lg"></div>
      <div class="grow bg-red-500"></div>
      <div class="grow bg-green-500"></div>
      <div class="grow rounded-br-lg bg-yellow-500"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CommonBadgeProps } from '~/types/common'
const props = defineProps<CommonBadgeProps>()

const badgeColors = [
  { team: 'Technical', color: 'red' },
  { team: 'Marketing', color: 'yellow' },
  { team: 'Human Resources', color: 'blue' },
  { team: 'Technical', color: 'red' },
  { team: 'Board of Leader', color: 'white' },
  { team: 'Alumni', color: 'white' }
]

const color = computed(() => {
  const index = badgeColors.findIndex((badgeColor) => badgeColor.team === props.team)
  return badgeColors[index].color
})
</script>
