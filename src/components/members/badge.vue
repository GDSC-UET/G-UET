<template>
  <div class="relative w-fit">
    <UBadge
      :label="label"
      :color="color"
      variant="outline"
      size="lg"
      class="relative hidden md:block"
    />
    <UBadge :label="label" :color="color" variant="outline" size="sm" class="relative md:hidden" />
    <div v-if="label === 'Board of Leader'" class="absolute bottom-[0.5px] flex h-[2px] w-full">
      <div class="bg-primary grow rounded-bl-lg"></div>
      <div class="grow bg-red-500"></div>
      <div class="grow bg-green-500"></div>
      <div class="grow rounded-br-lg bg-yellow-500"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MembersBadge } from '~/types/members'

const props = defineProps<MembersBadge>()

const badgeColors = [
  { team: 'Technical', color: 'red' },
  { team: 'Marketing', color: 'yellow' },
  { team: 'Human Resources', color: 'blue' },
  { team: 'Event', color: 'green' },
  { team: 'Board of Leader', color: 'white' },
  { team: 'Alumni', color: 'white' }
]

const color = computed(() => {
  const index = badgeColors.findIndex((badgeColor) => badgeColor.team === props.label)
  console.log(props.label)
  return badgeColors[index].color
})
</script>
