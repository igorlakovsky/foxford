<script setup lang="ts">
import axios from 'axios'

import { useRouter, useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'

import SearchCard from './components/SearchCard.vue'
import Spinner from './components/Spinner.vue'
import RepoCard from './components/RepoCard.vue'

type ResponceData = {
  total_count: number
  items: {
    name: string
    description: string
    language: string
    stargazers_count: number
    owner: { login: string; avatar_url: string }
  }[]
}

type SearchData = {
  total_count: number
  items: {
    author: string
    name: string
    description: string | null
    language: string | null
    star_count: number
    avatar: string
  }[]
}

const router = useRouter()
const route = useRoute()

const searchText = ref('')
const searchData = ref<SearchData>()
const searchTimer = ref<number>()
const searchDelay = 500

const isLoading = ref(false)

const getRequestQ = (url: string) => {
  return url.slice(url.indexOf('?q=') + 3)
}

const getRequestData = (data: ResponceData) => {
  return {
    total_count: data.total_count,
    items: data.items.map((item) => {
      return {
        author: item.owner.login,
        name: item.name,
        description: item.description,
        language: item.language,
        star_count: item.stargazers_count,
        avatar: item.owner.avatar_url,
      }
    }),
  }
}

async function fetchData(repoName: string) {
  isLoading.value = true
  const responce = await axios.get(`https://api.github.com/search/repositories?q=${repoName}`)

  // Проверяем соответствие ответа с сервера и текущему поиску
  if (getRequestQ(responce.config.url!) === searchText.value) {
    searchData.value = getRequestData(responce.data)
    isLoading.value = false

    router.push({
      name: '',
      query: {
        q: searchText.value,
      },
    })
  }
}

watchEffect(() => {
  // Отменяем таймер запроса если поиск изменился
  if (searchTimer.value) {
    clearTimeout(searchTimer.value)
    searchTimer.value = undefined
  }

  // Запускаем таймер с запросом
  if (searchText.value) {
    searchTimer.value = setTimeout(() => {
      fetchData(searchText.value)
    }, searchDelay)
  } else {
    // Если пользователь очистил строку поиска
    isLoading.value = false
    searchData.value = undefined

    router.push({
      name: '',
      query: {},
    })
  }
})

// Наблюдаем за query параметрами
watchEffect(() => {
  if (route.query.q) {
    searchText.value = route.query.q as string
  }
})
</script>

<template>
  <section class="py-12 px-4 min-h-screen bg-gray-50 flex flex-col gap-6">
    <SearchCard v-model="searchText"></SearchCard>
    <Spinner v-if="isLoading"></Spinner>
    <div
      v-else-if="searchData?.items.length"
      class="w-full gap-4 2xl:max-w-7xl 2xl:grid-cols-3 xl:max-w-5xl lg:max-w-4xl md:max-w-2xl md:grid-cols-2 max-w-lg mx-auto grid grid-cols-1"
    >
      <RepoCard
        v-for="(repo, index) in searchData.items"
        :key="index"
        :author="repo.author"
        :name="repo.name"
        :description="repo.description"
        :language="repo.language"
        :star-count="repo.star_count"
        :avatar="repo.avatar"
      ></RepoCard>
    </div>
    <div v-else-if="searchData?.total_count === 0" class="text-center text-slate-400 font-medium text-sm">No data</div>
  </section>
</template>
