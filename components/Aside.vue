<script lang="ts" setup>
const asideItems = [
    {
      Id: 1,
      Text: 'Trang chủ',
      Icon: 'ic-home',
      Link: '/',
    },
    {
      Id: 2,
      Text: 'Khóa học',
      Icon: 'ic-book',
      Link: '/courses',
    },
    {
      Id: 3,
      Text: 'Lộ trình',
      Icon: 'ic-career-path',
      Link: '/career-path',
    },
    {
      Id: 4,
      Text: 'Bài viết',
      Icon: 'ic-paper',
      Link: '/blog',
    }
  ]
</script>

<template>
  <aside
      class="fixed hidden lg:block top-0 left-0 z-40 w-32 h-screen pt-20 transition-transform -translate-x-full bg-white  sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <template v-for="asideItem in asideItems" :key="asideItem.Id">
            <li class="aside-item">
              <NuxtLink class="flex flex-col hover:bg-gray-100 transition-all items-center p-2 text-gray-900 rounded-lg dark:text-white hover: dark:hover:bg-gray-700 group" :to="asideItem.Link">
                <div class="ic mb-2" :class="asideItem.Icon"></div>
              <span class="text-sm font-medium">{{ asideItem.Text }}</span>
              </NuxtLink>
          </li>
          </template>
        </ul>
      </div>
    </aside>
</template>

<style scoped></style>
