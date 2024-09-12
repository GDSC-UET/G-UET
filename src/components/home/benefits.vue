<template>
  <div class="flex flex-col items-center gap-20">
    <CommonTitleText text="Benefits" suffix="that we offer" />
    <div class="flex flex-col items-start gap-8">
      <div v-for="benefit in benefits" :key="benefit.icon" class="flex items-center gap-8">
        <CommonRoundedIcon
          :icon="benefit.icon"
          :color="benefit.color"
          :size="width > 640 ? 'lg' : 'md'"
          only-view
        />
        <div class="flex flex-col">
          <span class="text-2xl font-medium" :class="'text-' + benefit.color + '-500'">{{
            benefit.content
          }}</span>
          <span class="text-xl">{{ benefit.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const benefits = ref([
  {
    icon: 'i-heroicons-rocket-launch',
    color: 'green',
    content: 'Leading the trend',
    description: 'You can learn, work and create products that using newest technologies'
  },
  {
    icon: 'i-heroicons-users',
    color: 'red',
    content: 'Caring attentiveness',
    description: 'We always be available when you need some help'
  },
  {
    icon: 'i-heroicons-fire',
    color: 'yellow',
    content: 'Dynamic environment',
    description: 'Working with young people, easy to connect and communicate with us'
  }
])
</script>
