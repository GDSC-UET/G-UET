<template>
  <UContainer class="my-8 flex flex-col items-center gap-12">
    <div class="w-full max-w-[500px]">
      <CommonTitleText prefix="Find your most" text="suitable position" />
    </div>
    <div class="flex flex-col items-center gap-4">
      <CommonSearch />
      <USelect v-model="teamSelect" :options="teams" size="lg" />
    </div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <JobsItem
        v-for="job in jobs"
        :key="job.id"
        :id="job.id"
        :position="job.position"
        :team="job.team"
        :job-description="job.jobDescription"
        :tag="job.tag"
      />
    </div>
    <UButton
      label="Explore more positions"
      class="w-[300px] justify-center rounded-full"
      size="xl"
    />
    <HomeBenefits class="mt-16" />
    <JobsHiringProcess class="mt-16" />
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
  },
  {
    id: 4,
    position: 'Frontend Developer',
    team: 'Technical',
    jobDescription:
      'Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum',
    tag: 'New'
  },
  {
    id: 5,
    position: 'Frontend Developer',
    team: 'Technical',
    jobDescription:
      'Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum',
    tag: 'New'
  },
  {
    id: 6,
    position: 'Frontend Developer',
    team: 'Technical',
    jobDescription:
      'Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum',
    tag: 'New'
  }
])
</script>
