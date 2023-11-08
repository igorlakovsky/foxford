<script setup lang="ts">
interface Props {
  author: string
  name: string
  description: string | null
  language: string | null
  starCount: number
  avatar: string
}

const props = defineProps<Props>()

function onClick() {
  window.open(`https://github.com/${props.author}`, '_blank')
}
</script>

<template>
  <div
    class="w-full mx-auto bg-white shadow-md rounded-xl p-4 flex gap-4 items-center flex-wrap cursor-pointer transition-all hover:shadow-lg dark:bg-gray-700"
    @click="onClick"
  >
    <img :src="props.avatar" class="w-10 h-10 rounded-xl" />
    <div>
      <div class="text-base font-medium text-slate-800 dark:text-slate-300">{{ props.name }}</div>
      <div class="text-sm text-slate-600 dark:text-slate-400">{{ props.author }}</div>
    </div>
    <div v-if="props.description" class="w-full text-sm text-slate-500 dark:text-slate-400">
      {{ props.description }}
    </div>
    <div class="flex gap-4 w-full">
      <div class="text-xs text-slate-500 align-middle dark:text-slate-400">★ {{ props.starCount }}</div>
      <div v-if="props.language" class="text-xs text-slate-500 dark:text-slate-400">▸ {{ props.language }}</div>
    </div>
  </div>
</template>
