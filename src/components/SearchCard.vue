<script setup lang="ts">
interface Props {
  modelValue: string
}

defineProps<Props>()
defineEmits(['update:modelValue'])

function onLogoClick() {
  window.open('https://github.com/', '_blank')
}

function switchColorTheme() {
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }
  }
}
</script>

<template>
  <div
    class="w-full mx-auto bg-white rounded-xl shadow-md p-4 flex flex-wrap justify-between 2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl md:max-w-2xl max-w-lg dark:bg-gray-700 transition-all"
  >
    <img
      class="h-10 w-32 mb-0 cursor-pointer dark:filter dark:invert"
      src="../assets/github-logo.svg"
      @click="onLogoClick"
    />
    <img
      class="w-6 mb-0 cursor-pointer transition-all opacity-30 hover:opacity-80 dark:filter dark:invert"
      src="../assets/sun-icon.svg"
      @click="switchColorTheme"
    />
    <label class="w-full mt-2 block relative">
      <span class="text-slate-600 font-medium text-sm dark:text-slate-300">Search Repositories</span>
      <input
        type="text"
        :value="modelValue"
        class="w-full px-2 py-1 border border-slate-300 rounded-md shadow-sm text-sm transition-all hover:border-slate-500 focus:border-slate-500 focus:shadow-md focus-visible:outline-0 dark:bg-gray-700 dark:text-slate-300 dark:border-slate-400 dark:hover:border-slate-200 dark:focus:border-slate-200"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <img
        class="absolute h-5 bottom-0 right-0 mb-1.5 mr-2 color opacity-30 dark:filter dark:invert"
        src="../assets/search-icon.svg"
      />
    </label>
  </div>
</template>
