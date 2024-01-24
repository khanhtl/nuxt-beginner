<script lang="ts" setup>
const slides:any = [
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
</script>

<template>
  <VueCarousel  :wrap-around="true">
    <VueSlide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </VueSlide>

    <template #addons>
      <VueNavigation />
      <VuePagination />
    </template>
  </VueCarousel>
</template>

<style lang="scss">
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: greenyellow;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__track {
  @apply p-3 rounded-xl;
}

.carousel__viewport {
  @apply rounded-xl  overflow-hidden;
}

.carousel__slide {
  @apply rounded-xl;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  @apply rounded-full bg-white;
}
</style>
