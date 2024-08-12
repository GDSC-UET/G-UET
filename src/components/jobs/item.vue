<template>
  <nuxt-link :to="jobPath">
    <div
      class="mx-2 my-2 h-[160px] cursor-pointer overflow-hidden rounded-lg border border-gray-300 hover:border-blue-500 hover:bg-blue-50"
    >
      <div class="mt-3 flex w-full justify-between">
        <div class="ml-4 flex flex-col">
          <span class="text-xl font-medium">{{ position }}</span>
          <span class="text-sm text-gray-700">{{ team }}</span>
        </div>
        <UBadge :class="!tag && 'hidden'" class="mr-4 h-fit" size="sm" :color="badgeColor">{{
          tag
        }}</UBadge>
      </div>
      <p class="mx-4 mt-4 line-clamp-3 overflow-hidden text-ellipsis text-gray-900">
        {{ jobDescription }}
      </p>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { JobsItemProps } from '~/types/jobs'

const props = defineProps<JobsItemProps>()

const badgeColors = [
  { tag: 'New', color: 'blue' },
  { tag: 'Hot', color: 'red' }
]

const badgeColor = computed(() => {
  const index = badgeColors.findIndex((badge) => badge.tag === props.tag)
  return badgeColors[index].color
})

const jobPath = computed(() => {
  return '/jobs/' + props.id
})
</script>
