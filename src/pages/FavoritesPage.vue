<template>
  <h2 class="text-3xl font-bold mb-8">Избранные товары</h2>
  <div
    v-if="!favorites.length"
    class="flex flex-col w-full md:w-2/3 justify-center items-center grow self-center"
  >
    <p class="font-bold text-xl md:text-3xl text-center">Здесь пока пусто.</p>
    <p class="font-bold text-xl md:text-2xl text-center">
      Вы можете добавлять товары из каталога в закладки с помощью кнопки <HeartBtnActiveSVG class="inline" />
    </p>
  </div>
  <ProductList
    v-else
    :items="favorites"
    @handle-favorites="handleFavorites"
    @handle-cart="handleCart"
  />
</template>

<script setup>
import { inject } from 'vue'

import ProductList from '../components/ProductList.vue'
import HeartBtnActiveSVG from '@/components/svg/HeartBtnActiveSVG.vue';

const { handleCart } = inject('cart')
const { handleFavorites, favorites } = inject('favorites')
</script>

<style scoped></style>
