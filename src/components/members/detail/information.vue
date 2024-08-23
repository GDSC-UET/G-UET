<template>
  <div class="flex flex-col gap-8">
    <div>
      <span class="text-lg font-bold">About this member</span>
      <ul class="ml-6 list-disc">
        <li v-for="item in about" :key="item">{{ item }}</li>
      </ul>
    </div>
    <div>
      <span class="text-lg font-bold">Activities</span>
      <ul class="ml-6 list-disc">
        <li v-for="item in about" :key="item">{{ item }}</li>
      </ul>
    </div>
    <div class="flex flex-col">
      <span class="text-lg font-bold">Favorite Quote</span>
      <span class="ml-6">"{{ quote }}"</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MembersDetailInformationProps } from '~/types/members'

defineProps<MembersDetailInformationProps>()
</script>
