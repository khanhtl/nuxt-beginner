<script setup lang="ts">
withDefaults(defineProps<{ title?: string; backgroundColor?: string }>(), {
  title: 'Z8 | Học lập trình cơ bản',
  backgroundColor: 'bg-gradient-to-r from-cyan-500 to-blue-500',
});
</script>
<template>
  <div
    :class="[backgroundColor || 'bg-gradient-to-r from-cyan-500 to-blue-500']"
    class="w-full h-full flex text-white items-center justify-center"
  >
    <h1>{{ title || 'Z8 | Học lập trình cơ bản' }}</h1>
  </div>
</template>
<style scoped>
  h1 {
    color: white;
    font-size: 70px;
  }
</style>