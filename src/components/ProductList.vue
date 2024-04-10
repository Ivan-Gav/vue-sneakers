<template>
  <div
    class="grid grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))] justify-items-center gap-5"
    v-auto-animate
  >
    <ProductCard
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :imageUrl="`.${item.imageUrl}`"
      :price="item.price"
      :isFavorite="item.isFavorite"
      :onFavoriteClick="() => emit('handleFavorites', item)"
      :isAdded="item.isAdded"
      :onAddClick="() => emit('handleCart', item)"
    />
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  items: Array
})

const emit = defineEmits(['handleFavorites', 'handleCart'])
</script>
