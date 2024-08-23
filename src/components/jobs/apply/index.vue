<template>
  <div class="mx-8 flex max-w-[800px] flex-col gap-12 md:mx-auto">
    <CommonTitleText :prefix="position" text="" />
    <UFormGroup label="Full name" size="lg" required><UInput /></UFormGroup>
    <div class="flex w-full flex-col gap-8 md:flex-row">
      <UFormGroup label="Email" size="lg" class="grow" required><UInput /></UFormGroup>
      <UFormGroup label="Phone number" size="lg" class="grow" required><UInput /></UFormGroup>
    </div>
    <UFormGroup
      label="Upload your CV"
      class="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center"
      :description="(files && files[0].name) || 'Your file name'"
      required
    >
      <UButton
        size="lg"
        color="white"
        class="flex w-[200px] justify-center md:w-[340px]"
        leading-icon="i-heroicons-cloud-arrow-up"
        @click="open()"
        label="Upload"
      />
    </UFormGroup>
    <UFormGroup label="Message us">
      <UTextarea />
    </UFormGroup>
    <UButton
      label="Submit"
      :ui="{ rounded: 'rounded-full' }"
      size="lg"
      class="mx-auto w-[200px] justify-center md:w-[300px]"
    />
  </div>
</template>

<script setup lang="ts">
import { useFileDialog } from '@vueuse/core'
import type { JobsApplyProps } from '~/types/jobs'

defineProps<JobsApplyProps>()

const { files, open } = useFileDialog({
  accept: '.pdf',
  directory: false
})
</script>
