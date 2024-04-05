<template>
  <h2 class="text-3xl font-bold mb-8">Избранные товары</h2>
  <div v-if="!favorites.length" class="flex w-full justify-center items-center grow font-bold text-3xl text-center">Здесь пока пусто</div>
  <ProductList
    v-else
    :items="favorites"
    @handle-favorites="handleFavorites"
    @handle-cart="handleCart"
  />
</template>

<script setup>
import {inject } from 'vue'


import ProductList from '../components/ProductList.vue'

const { handleCart } = inject('cart')
const { handleFavorites, favorites } = inject('favorites')

</script>

<style scoped></style>
