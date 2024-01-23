<template>
  <div>
    <p class="mt-0 uppercase font-nomal text-slate-400 mb-1">
      Lesson {{ chapter?.number }} - {{ lesson?.number }}
    </p>
    <h2 class="my-0 text-2xl font-medium">{{ lesson?.title }}</h2>
    <div class="flex space-x-4 mt-2 mb-8">
      <a
        v-if="lesson?.sourceUrl"
        :href="lesson.sourceUrl"
        class="font-nomal text-md text-gray-500"
      >
        Dowload Source Code</a
      >

      <a
        v-if="lesson?.dowloadUrl"
        :href="lesson.dowloadUrl"
        class="font-nomal text-md text-gray-500"
      >
        Dowload Video</a
      >
    </div>
    <div class="flex justify-center">
      <VideoPlayer
        class="w-full xl:w-4/5"
        :video-id="lesson?.videoId"
      ></VideoPlayer>
    </div>
    <p class="mt-2">{{ lesson?.text }}</p>
  </div>
</template>

<script setup lang="ts">
const courses = useCourse();
const route = useRoute();

const chapter = computed(() => {
  return courses.chapters.find(
    (c) => c.number == Number(route.params.chapterNumber)
  );
});

const lesson = computed(() => {
  return chapter.value?.lesssons.find(
    (l) => l.number == Number(route.params.lessonNumber)
  );
});
</script>
