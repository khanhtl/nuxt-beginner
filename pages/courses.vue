
<template>
<div class="p-12 bg-gray-100 w-full h-full min-h-screen flex flex-col items-center">
    <div class="prose mb-12">
        <h1 class="text-5xl mb-2">
            <span class="font-medium">Course: </span>
            <span class="font-bold">Nuxt 3</span>
        </h1>
    </div>
    <div class="flex flex-row justify-center flex-grow">
        <div class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] flex flex-col">
            <h3 class="text-3xl mb-2 font-medium">Chapters</h3>
        </div>
        <div class="prose p-12 bg-white rounded-md w-[65ch]">
            <NuxtPage />
        </div>
    </div>
</div>
</template>