<template>
  <UContainer class="mt-8 flex flex-col items-center gap-12">
    <CommonTitleText prefix="Our" text="members" />
    <div class="flex flex-col items-center gap-4">
      <CommonSearch />
      <div class="flex gap-4">
        <USelect v-model="teamSelect" :options="teams" size="lg" />
        <USelect v-model="genSelect" :options="gens" size="lg" />
      </div>
    </div>
    <MembersCard
      avatar="/lead.png"
      name="Tran Manh Dung"
      position="Founder/President"
      team="Board of Leader"
    />
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

const gens = ref(['All Gens', 'Gen 0', 'Gen 1'])

const teamSelect = ref([teams.value[0]])
const genSelect = ref([gens.value[0]])
</script>
