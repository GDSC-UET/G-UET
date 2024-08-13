<template>
  <div class="flex flex-col gap-16">
    <CommonTitleText text="About" suffix="us" />
    <div class="mx-16 flex flex-col gap-8">
      <div
        v-for="(about, index) in aboutList"
        :key="about.description"
        class="flex flex-col items-center gap-[60px]"
        :class="index % 2 ? 'md:flex-row' : 'md:flex-row-reverse'"
      >
        <span>{{ about.description }}</span>
        <NuxtImg :src="about.src" class="w-full md:w-[400px] lg:w-[500px]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const aboutList = ref([
  {
    src: '/about.png',
    description:
      'Chúng tôi là những sinh viên có niềm đam mê với công nghệ, luôn mong muốn mang lại những sản phẩm có giá trị với cộng đồng'
  },
  {
    src: '/about.png',
    description:
      'Không những thế, chúng tôi còn là những người luôn sẵn sàng chia sẻ, hỗ trợ, giúp đỡ mọi người trong quá trình học tập, tìm hiểu về công nghệ'
  }
])
</script>
