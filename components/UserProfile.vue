<script lang="ts" setup>

const emit = defineEmits(['onLogout'])

</script>

<template>
  <div class="ml-4">
      <button
        type="button"
        class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        data-dropdown-toggle="dropdown-user"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="w-8 h-8 rounded-full"
          alt="user photo"
        />
      </button>
    </div>
    <div
      class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
      id="dropdown-user"
    >
      <div class="px-4 py-4 flex items-center" role="none">
        <div>
          <img
            class="w-16 h-16 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="user photo"
          />
        </div>
        <div class="ml-2">
          <p class="text-sm text-gray-900 dark:text-white" role="none">
            Tạ Long Khánh
          </p>
          <p
            class="text-sm text-gray-500 truncate dark:text-gray-300"
            role="none"
          >
            &#64;tlkhanh
          </p>
        </div>
      </div>
      <ul class="py-1" role="none">
      <li>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
            >Trang cá nhân</a
          >
        </li>
      </ul>
      <ul class="py-1" role="none">

        <li>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
            >Thiết lập</a
          >
        </li>
        <li>
          <a
            @click="emit('onLogout')"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
            >Đăng xuất</a
          >
        </li>
      </ul>
    </div>
</template>

<style scoped></style>
