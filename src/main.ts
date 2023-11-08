import './style.css'

import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import { createApp } from 'vue'

const routes = [
  { path: '/', component: App },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp({})

app.use(router)

app.mount('#app')
