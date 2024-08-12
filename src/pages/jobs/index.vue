<template>
  <UContainer>
    <div class="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <JobsItem
        v-for="job in jobs"
        :key="job.id"
        :position="job.position"
        :team="job.team"
        :job-description="job.jobDescription"
        :tag="job.tag"
        :id="job.id"
      />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
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
