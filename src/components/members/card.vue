<template>
  <div
    class="hover:bg-primary-50 hover:border-primary-500 flex w-[170px] cursor-pointer flex-col items-center gap-3 rounded-lg border border-gray-300 py-4 md:w-[250px] md:py-8"
  >
    <NuxtImg :src="avatar" class="w-[150px] rounded-full border border-gray-300 md:w-[180px]" />
    <span class="text-sm font-bold md:text-base">{{ name }}</span>
    <span class="text-xs md:text-sm">{{ position }}</span>
    <MembersBadge :label="team" />
  </div>
</template>

<script setup lang="ts">
import type { MembersCard } from '~/types/members'

defineProps<MembersCard>()
</script>
