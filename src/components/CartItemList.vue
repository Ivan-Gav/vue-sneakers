<template>
  <div class="flex flex-col gap-4 flex-1" v-auto-animate>
    <CartItem
      v-for="item in cart"
      :key="item.id"
      :title="item.title"
      :price="item.price"
      :image-url="`.${item.imageUrl}`"
      @remove-click="() => addToCart(item)"
    />
  </div>
</template>

<script setup>
import { inject } from 'vue'
import CartItem from './CartItem.vue'

const { cart, addToCart } = inject('cart')
</script>

<style></style>
