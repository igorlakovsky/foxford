<script setup lang="ts">
interface Props {
  modelValue: string
}

defineProps<Props>()
defineEmits(['update:modelValue'])

function onLogoClick() {
  window.open('https://github.com/', '_blank')
}
</script>

<template>
  <div
    class="w-full mx-auto bg-white rounded-xl shadow-md p-4 flex flex-wrap justify-between 2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl md:max-w-2xl max-w-lg"
  >
    <img class="h-10 w-32 mb-0 cursor-pointer" src="../assets/github-logo.svg" @click="onLogoClick" />
    <img class="w-6 mb-0 cursor-pointer transition-all opacity-30 hover:opacity-80" src="../assets/sun-icon.svg" />
    <form class="w-full mt-1">
      <label class="block relative">
        <span class="text-slate-600 font-medium text-sm">Search Repositories</span>
        <input
          type="text"
          :value="modelValue"
          class="w-full px-2 py-1 border border-slate-300 rounded-md shadow-sm text-sm transition-all hover:border-slate-500 focus:border-slate-500 focus:shadow-md focus-visible:outline-0"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
        <img class="absolute h-5 bottom-0 right-0 mb-1.5 mr-2 color opacity-30" src="../assets/search-icon.svg" />
      </label>
    </form>
  </div>
</template>
