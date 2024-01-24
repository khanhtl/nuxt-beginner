
<template>
<div class="w-full h-full flex flex-col items-center">
    <!-- <div class="prose mb-12">
        <h1 class="text-3xl mb-2">
            <span class="font-medium">Courcse: </span>
            <span class="font-bold">Mastering Nuxt 3</span>
        </h1>
    </div> -->
    <div class="flex flex-row justify-center flex-grow  w-full">
        <div class="prose mr-4 p-8 bg-white rounded-md w-[25ch] xl:w-[30ch] flex flex-col">
            <h3 class="text-2xl mb-2 font-medium">Chapters</h3>
        </div>
        <div class="prose p-12 bg-white rounded-md flex-1">
            <NuxtPage />
        </div>
    </div>
</div>
</template>