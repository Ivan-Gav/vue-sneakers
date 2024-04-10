import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import FavoritesPage from '@/pages/FavoritesPage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory('/vue-sneakers/'),
  routes: [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/favorites', name: 'FavoritesPage', component: FavoritesPage },
    { path: '/about', name: 'AboutPage', component: AboutPage },
    { path: '/:pathMatch(.*)*', name: 'NotFoundPage', component: NotFoundPage }
  ]
})

export default router
