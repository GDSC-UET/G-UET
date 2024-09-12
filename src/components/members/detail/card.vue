<template>
  <div class="flex flex-col items-center gap-3">
    <NuxtImg :src="avatar" class="w-[200px] rounded-full border border-gray-300 md:w-[250px]" />
    <span class="text-lg font-bold">{{ name }}</span>
    <span class="text-center text-sm">{{ position }}</span>
    <span class="text-center text-sm">{{ school }}</span>
    <CommonBadge :team="team" type="solid" />
    <div class="h-[2px] w-[220px] bg-gray-300"></div>
    <span class="text-base font-bold">Timeline Activities</span>
    <div v-for="timeline in timelines" :key="timeline.period" class="flex flex-col items-center">
      <span class="text-sm font-bold">{{ timeline.period }}</span>
      <span class="text-sm">{{ timeline.position }}</span>
    </div>
    <div class="h-[2px] w-[220px] bg-gray-300"></div>
    <div class="flex gap-4">
      <MembersDetailCardSocial
        v-for="item in socialItems"
        :key="item.icon"
        :icon="item.icon"
        :link="item.link"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MembersDetailCardProps } from '~/types/members'

const props = defineProps<MembersDetailCardProps>()

const socialItems = computed(() => {
  const items = (Object.keys(props.socials) as Array<keyof MembersDetailCardProps['socials']>).map(
    (key) => {
      const icon = `i-mdi-${key}`

      return {
        icon,
        link: props.socials[key]
      }
    }
  )

  return items.filter((item) => item.link)
})
</script>
