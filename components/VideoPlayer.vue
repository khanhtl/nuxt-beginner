<script lang="ts" setup>
const props = defineProps<{
  videoId?: number;
}>();
</script>

<template>
  <iframe
  class="aspect-video"
  :src="`https://www.youtube.com/embed/6N1otNYPsTM`"
  title="Video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen"
  allowfullscreen
  >

  </iframe>
</template>

<style scoped></style>
