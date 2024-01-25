<script setup>
</script>

<template>
  <Navbar></Navbar>
  <Aside></Aside>
  <div class="pt-6 h-screen overflow-hidden sm:ml-32 flex flex-col">
    <div class="rounded-lg mt-14 p-4 overflow-hidden bg-gray-100 flex-1">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
