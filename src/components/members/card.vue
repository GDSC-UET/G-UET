<template>
  <div
    class="hover:bg-primary-50 hover:border-primary-500 flex w-[250px] cursor-pointer flex-col items-center gap-3 rounded-lg border border-gray-300 py-8"
  >
    <NuxtImg :src="avatar" class="w-[180px] rounded-full border border-gray-300" />
    <span class="font-bold">{{ name }}</span>
    <span>{{ position }}</span>
    <MembersBadge :label="team" />
  </div>
</template>

<script setup lang="ts">
import type { MembersCard } from '~/types/members'

defineProps<MembersCard>()
</script>
