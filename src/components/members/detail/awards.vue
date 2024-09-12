<template>
  <div>
    <span class="text-lg font-bold">Awards</span>
    <div class="mt-4 flex flex-col gap-2 font-medium">
      <UBadge
        v-for="award in awards"
        :key="award"
        :label="award"
        variant="solid"
        :class="bgColor(award)"
        size="lg"
        class="w-fit"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MembersDetailAwardsProps } from '~/types/members'

const props = defineProps<MembersDetailAwardsProps>()

const awardColors = [
  {
    type: 'MIM',
    color: 'green-500'
  },
  {
    type: 'MOTM',
    color: 'red-500'
  },
  {
    type: 'MOTY',
    color: 'blue-500'
  },
  {
    type: 'MVM',
    color: 'yellow-500'
  }
]

const bgColor = (val: string) => {
  const index = awardColors.findIndex((award) => {
    return award.type === val.split(' ')[0]
  })

  return `bg-${awardColors[index].color}`
}
</script>
