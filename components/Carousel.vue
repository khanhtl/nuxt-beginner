<script lang="ts" setup>
const slides: any = [
  {
    Id: 1,
  },
  {
    Id: 2,
  },
  {
    Id: 3,
  },
];

const onChange = (current: number) => {
  console.log(current);
};
</script>

<template>
  <div class="h-[270px] overflow-hidden select-none rounded-xl">
    <a-carousel
      :after-change="onChange"
      :autoplay="true"
      :autoplay-speed="2000"
      :draggable="true"
      :adaptive-height="true"
    >
      <div v-for="slide in slides" :key="slide.Id">{{ slide.Id }}</div>
    </a-carousel>
  </div>
</template>

<style scoped>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 270px;
  line-height: 270px;
  @apply bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl;
  overflow: hidden;
}

</style>
