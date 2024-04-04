<template>
  <div class="grid grid-cols-4 gap-5" v-auto-animate>
    <ProductCard 
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      :isFavorite="item.isFavorite"
      :onFavoriteClick="() => emit('addToFavorites', item)"
      :isAdded="item.isAdded"
      :onAddClick="() => emit('addToCart', item)"
    />
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  items: Array
})

const emit = defineEmits(['addToFavorites', 'addToCart'])

</script>

<style></style>
