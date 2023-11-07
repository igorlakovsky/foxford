<script setup lang="ts"></script>

<template>
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg p-4 flex flex-wrap justify-between">
    <img class="h-10 w-32 mb-0 cursor-pointer" src="../assets/github-logo.svg" />
    <img class="mb-0 cursor-pointer transition-all opacity-30 hover:opacity-80" src="../assets/sun-icon.svg" />
    <form class="w-full mt-1">
      <label class="block relative">
        <span class="text-slate-600 font-medium text-sm">Search Repositories</span>
        <input
          type="text"
          class="w-full px-2 py-1 border border-slate-300 rounded-md shadow-sm transition-all hover:border-slate-500 focus:border-slate-700 focus:shadow-md focus-visible:outline-0"
        />
        <img class="absolute bottom-0 right-0 h-5 mb-2 mr-2 color opacity-50" src="../assets/search-icon.svg" />
      </label>
    </form>
  </div>
</template>
