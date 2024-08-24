<template>
  <UContainer class="mt-8 flex flex-col items-center gap-12">
    <div class="w-full max-w-[500px]">
      <CommonTitleText prefix="Find your most" text="suitable position" />
    </div>
    <div class="flex flex-col items-center gap-4">
      <CommonSearch />
      <USelect v-model="teamSelect" :options="teams" size="lg" />
    </div>
    <JobsNoJobsFound />
  </UContainer>
</template>

<script setup lang="ts">
const teams = ref([
  'All Teams',
  'Technical',
  'Event',
  'Human Resources',
  'Marketing',
  'Alumni',
  'Board of Leader'
])

const teamSelect = ref([teams.value[0]])

const jobs = ref([
  {
    id: 1,
    position: 'Frontend Developer',
    team: 'Technical',
    jobDescription:
      'Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum',
    tag: 'New'
  },
  {
    id: 2,
    position: 'Frontend Developer',
    team: 'Technical',
    jobDescription:
      'Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum',
    tag: 'New'
  },
  {
    id: 3,
    position: 'Frontend Developer',
    team: 'Technical',
    jobDescription:
      'Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum',
    tag: 'New'
  }
])
</script>
