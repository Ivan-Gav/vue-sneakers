<template>
  <h2 class="text-3xl font-bold mb-8">Избранные товары</h2>
  <div v-if="!favorites.length">Здесь пока пусто</div>
  <ProductList
    v-else
    :items="favorites"
    @add-to-favorites="handleFavClick"
    @add-to-cart="addToCart"
  />
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref, inject } from 'vue'

import ProductList from '../components/ProductList.vue'

const favorites = ref([])

const { addToCart, cart } = inject('cart')

const fetchFavoriteItems = async () => {
  try {
    const { data } = await axios.get(
      `https://6b389cda7832ddc2.mokky.dev/favorites?_relations=items`
    )
    if (!data.length) {
      return
    }
    favorites.value = data.map((favorite) => ({
      ...favorite.item,
      isFavorite: true,
      favoriteId: favorite.id,
      isAdded: cart.value.some((cartItem) => cartItem.id === favorite.item.id)
    }))
  } catch (err) {
    console.log(err)
  }
}

const handleFavClick = async (item) => {
  try {
    favorites.value = favorites.value.filter((favorite) => favorite.id !== item.id)
    await axios.delete(`https://6b389cda7832ddc2.mokky.dev/favorites/${item.favoriteId}`)
  } catch (err) {
    console.log(err)
  }
}

onMounted(fetchFavoriteItems)
</script>

<style scoped></style>
