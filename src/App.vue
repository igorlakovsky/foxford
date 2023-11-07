<script setup lang="ts">
import axios from 'axios'
import { ref, watchEffect } from 'vue'
import SearchCard from './components/SearchCard.vue'

type ResponceData = {
  total_count: number
  items: {
    name: string
    description: string
    language: string
    stargazers_count: number
    owner: { login: string }
  }[]
}

const searchText = ref('')
const searchData = ref()
const searchTimer = ref<number>()
const searchDelay = 500

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
      }
    }),
  }
}

async function fetchData(repoName: string) {
  const responce = await axios.get(`https://api.github.com/search/repositories?q=${repoName}`)

  // Проверяем соответствие ответа с сервера и текущему поиску
  if (getRequestQ(responce.config.url!) === searchText.value) {
    searchData.value = getRequestData(responce.data)
    console.log(searchData.value)
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
      // fetchData(searchText.value) - Раскомментировать

      // Статические данные
      searchData.value = {
        total_count: 10636,
        items: [
          {
            author: 'spinnaker',
            name: 'igor',
            description: 'Integration with Jenkins and Git for Spinnaker',
            language: 'Groovy',
            star_count: 141,
          },
          {
            author: 'Apress',
            name: 'low-level-programming',
            description: "Source code for 'Low-Level Programming' by Igor Zhirkov",
            language: 'Assembly',
            star_count: 679,
          },
          {
            author: 'qmarcou',
            name: 'IGoR',
            description:
              'IGoR is a C++ software designed to infer V(D)J recombination related processes from sequencing data. Find full documentation at:',
            language: 'C',
            star_count: 47,
          },
          {
            author: 'igorw',
            name: 'IgorwFileServeBundle',
            description: 'Symfony2 Bundle for serving protected files.',
            language: 'PHP',
            star_count: 167,
          },
          {
            author: 'HexHive',
            name: 'Igor',
            description: null,
            language: 'C',
            star_count: 65,
          },
          {
            author: 'jwasham',
            name: 'assembly-and-c',
            description: 'Personal study of book "Low-Level Programming" by Igor Zhirkov (Apress, 2017)',
            language: 'Assembly',
            star_count: 132,
          },
          {
            author: 'galeone',
            name: 'igor',
            description: 'igor is an abstraction layer for PostgreSQL with a gorm like syntax.',
            language: 'Go',
            star_count: 113,
          },
          {
            author: 'reflectometry',
            name: 'igor.py',
            description: 'Read Igor Pro pxp files from python',
            language: 'Python',
            star_count: 12,
          },
          {
            author: 'share',
            name: 'igor',
            description: 'scripts for managing your livedb',
            language: 'CoffeeScript',
            star_count: 20,
          },
          {
            author: 'jilavsky',
            name: 'SAXS_IgorCode',
            description: 'Irena, Nika, and Indra SAXS Igor code by Jan Ilavsky',
            language: 'IGOR Pro',
            star_count: 21,
          },
          {
            author: 'salsita',
            name: 'passthruapp',
            description: "Updated version of Igor Tandetnik's PassthroughAPP",
            language: 'C',
            star_count: 26,
          },
          {
            author: 'dhemery',
            name: 'igor',
            description: 'CSS-like selectors for iOS views.',
            language: 'Objective-C',
            star_count: 30,
          },
          {
            author: 'IgorKowalczyk',
            name: 'igorkowalczyk.github.io',
            description: '⚛️ My personal portfolio written on Next.js and Tailwind.css',
            language: 'JavaScript',
            star_count: 47,
          },
          {
            author: 'AllenInstitute',
            name: 'MIES',
            description: 'Multichannel Igor Electrophysiology Suite',
            language: 'IGOR Pro',
            star_count: 18,
          },
          {
            author: 'abunsen',
            name: 'Paython',
            description:
              'ActiveMerchant rip off in Python created by Auston Bunsen, with help from Igor Guerrero & a handful of others. Fork me & improve me!',
            language: 'Python',
            star_count: 208,
          },
          {
            author: 'cyxx',
            name: 'igor',
            description: 'Igor: Objetivo Uikokahonia game interpreter (Android, SDL)',
            language: 'C++',
            star_count: 21,
          },
          {
            author: 'ArjenSchwarz',
            name: 'igor',
            description: 'Igor is a multilingual Slack bot, written in Go and running on Lambda',
            language: 'Go',
            star_count: 17,
          },
          {
            author: 'bluescarni',
            name: 'igor',
            description: 'Named arguments for C++17',
            language: 'C++',
            star_count: 28,
          },
          {
            author: 'IgorKowalczyk',
            name: 'igorkowalczyk',
            description: "🔐 PSS! This is a ✨ secret ✨ repo! It's updated every 5 minutes with new stats!",
            language: 'JavaScript',
            star_count: 8,
          },
          {
            author: 'bkgoksel',
            name: 'emergent-language',
            description:
              'An implementation of Emergence of Grounded Compositional Language in Multi-Agent Populations by Igor Mordatch and Pieter Abbeel',
            language: 'Python',
            star_count: 70,
          },
          {
            author: 'yamad',
            name: 'igorutils',
            description: 'Utility modules for Igor Pro',
            language: 'IGOR Pro',
            star_count: 20,
          },
          {
            author: 'igorw',
            name: 'weblog',
            description: 'Weblog on igor.io.',
            language: 'CSS',
            star_count: 5,
          },
          {
            author: 'kpi-ua',
            name: 'schedule.kpi.ua',
            description: 'Igor Sikorsky Kyiv Polytechnic Institute schedule UI',
            language: 'JavaScript',
            star_count: 21,
          },
          {
            author: 'paul-voyles',
            name: 'Igor',
            description: 'Voyles group Igor procedures',
            language: 'IGOR Pro',
            star_count: 4,
          },
          {
            author: 'quantixed',
            name: 'CellMigration',
            description: 'Analysis of cell migration in Igor Pro',
            language: 'IGOR Pro',
            star_count: 7,
          },
          {
            author: 'lloyd',
            name: 'easylzma',
            description:
              "An easy to use, tiny, public domain, C wrapper library around Igor Pavlov's work that can be used to compress and extract lzma files.",
            language: 'C',
            star_count: 119,
          },
          {
            author: 'felixb',
            name: 'igor',
            description: 'Opens a shell in your favorite docker container',
            language: 'Shell',
            star_count: 4,
          },
          {
            author: 'jefferis',
            name: 'IgorR',
            description: 'R package to load Igor Pro waves (ibw) and experiment files (pxp) in R',
            language: 'R',
            star_count: 6,
          },
          {
            author: 'kacperjurak',
            name: 'igorm',
            description: 'Interface wrapper for gorm.DB',
            language: 'Go',
            star_count: 11,
          },
          {
            author: 'david-hoffman',
            name: 'Igor-Data-Analysis',
            description: 'Igor Pro data analysis procedures',
            language: 'IGOR Pro',
            star_count: 12,
          },
        ],
      }
      console.log(searchData.value)
    }, searchDelay)
  }
})
</script>

<template>
  <section class="pt-8 h-screen bg-gray-50">
    <SearchCard v-model="searchText"></SearchCard>
  </section>
</template>
