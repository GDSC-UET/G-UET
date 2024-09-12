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
    <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
      <nuxt-link v-for="member in members" :key="member.id" :to="`/members/${member.id}`">
        <MembersCard
          :avatar="member.avatar"
          :name="member.name"
          :position="member.position"
          :team="member.team"
        />
      </nuxt-link>
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

const members = ref([
  {
    id: 1,
    avatar: '/lead.png',
    name: 'Tran Manh Dung',
    position: 'Founder/President',
    team: 'Board of Leader'
  },
  {
    id: 2,
    avatar: '/lead.png',
    name: 'Tran Manh Dung',
    position: 'Founder/President',
    team: 'Board of Leader'
  },
  {
    id: 3,
    avatar: '/lead.png',
    name: 'Tran Manh Dung',
    position: 'Founder/President',
    team: 'Board of Leader'
  },
  {
    id: 4,
    avatar: '/lead.png',
    name: 'Tran Manh Dung',
    position: 'Founder/President',
    team: 'Board of Leader'
  },
  {
    id: 5,
    avatar: '/lead.png',
    name: 'Tran Manh Dung',
    position: 'Founder/President',
    team: 'Board of Leader'
  },
  {
    id: 6,
    avatar: '/lead.png',
    name: 'Tran Manh Dung',
    position: 'Founder/President',
    team: 'Board of Leader'
  }
])
</script>
