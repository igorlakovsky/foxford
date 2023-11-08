<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  page: number
  perPage: number
  totalCount: number
}

const props = defineProps<Props>()
const $emit = defineEmits(['update:page', 'update:perPage'])

const showingMin = computed(() => (props.page - 1) * props.perPage + 1)
const showingMax = computed(() => props.page * props.perPage)

const hasPrev = computed(() => props.page === 1)
const hasNext = computed(() => props.page * props.perPage > props.totalCount)

function onPrevClick() {
  if (props.page > 1) {
    $emit('update:page', props.page - 1)
  }
}

function onNextClick() {
  $emit('update:page', props.page + 1)
}
</script>

<template>
  <div class="flex flex-col items-center mt-6">
    <!-- Buttons -->
    <div class="inline-flex mt-2 xs:mt-0">
      <button
        class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-400 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-40 disabled:hover:bg-gray-800 transition-all"
        :disabled="hasPrev"
        @click="onPrevClick"
      >
        <svg
          class="w-3.5 h-3.5 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        Prev
      </button>
      <button
        class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-400 border-0 border-l border-gray-200 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-40 disabled:hover:bg-gray-800 transition-all"
        :disabled="hasNext"
        @click="onNextClick"
      >
        Next
        <svg
          class="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>

    <!-- Info text -->
    <span class="text-sm text-gray-700 dark:text-gray-400 mt-4">
      Showing <span class="font-semibold text-gray-900 dark:text-white">{{ showingMin }}</span> to
      <span class="font-semibold text-gray-900 dark:text-white">{{ showingMax }}</span> of
      <span class="font-semibold text-gray-900 dark:text-white">{{ totalCount }}</span> Repositories
    </span>

    <!-- Per page select -->
    <div>
      <span class="text-sm text-gray-700 dark:text-gray-400"> Show per page </span>
      <select
        name="select"
        class="text-xs"
        :value="perPage"
        @input="$emit('update:perPage', Number(($event.target as HTMLInputElement).value))"
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  </div>
</template>
