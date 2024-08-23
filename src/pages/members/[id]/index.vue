<template>
  <UContainer class="mb-4 mt-8 flex flex-col items-center">
    <div class="flex w-full flex-col gap-8 self-start lg:flex-row">
      <UButton variant="link" icon="i-heroicons-arrow-uturn-left">Back to members</UButton>
      <div class="mx-auto flex flex-col items-center gap-8 lg:mx-0 lg:flex-row">
        <CommonSearch @search="handleSearch" />
        <div class="flex gap-8">
          <USelect v-model="teamSelect" :options="teams" size="lg" />
          <USelect v-model="genSelect" :options="gens" size="lg" />
        </div>
      </div>
    </div>
    <div class="mt-8 flex flex-col gap-16 md:flex-row">
      <MembersDetailCard
        :avatar="memberDetail.avatar"
        :name="memberDetail.name"
        :position="memberDetail.position"
        :school="memberDetail.school"
        :team="memberDetail.team"
        :timelines="memberDetail.timelines"
        :socials="memberDetail.socials"
      />
      <div class="flex flex-col gap-8 lg:flex-row">
        <MembersDetailInformation
          :activities="memberDetail.activities"
          :about="memberDetail.about"
          :quote="memberDetail.quote"
        />
        <MembersDetailAwards :awards="memberDetail.awards" />
      </div>
    </div>
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

const handleSearch = (searchData: string) => {
  console.log(searchData, teamSelect.value, genSelect)
}

const memberDetail = ref({
  avatar: './lead.png',
  name: 'Tran Manh Dung',
  position: 'Founder/President',
  school: 'University of Engineering and Technology',
  team: 'Board of Leader',
  timelines: [
    {
      period: 'Aug 2023 - Present',
      position: 'Founder/President'
    }
  ],
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    github: 'https://github.com/GDSC-UET'
  },
  about: [
    'Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum',
    'Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum',
    'Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum'
  ],
  activities: [
    'Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum',
    'Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum',
    'Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum'
  ],
  quote: 'Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum',
  awards: ['MIM Aug 2024', 'MOTM Aug 2024', 'MOTY 2024', 'MVM G-UET']
})
</script>
