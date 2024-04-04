import './assets/main.css'

import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import FavoritesPage from './pages/FavoritesPage.vue'

const app = createApp(App)

const routes = [
  { path: '/', component: HomePage },
  { path: '/favorites', component: FavoritesPage }
]

const router = createRouter({
  history: createWebHistory('/vue-sneakers/'),
  routes
})

app.use(autoAnimatePlugin).use(router).mount('#app')
