<template>
  <div class="flex flex-col gap-4" v-auto-animate>
    <CartItem
      v-for="item in cart.items"
      :key="item.id"
      :title="item.title"
      :price="item.price"
      :image-url="`.${item.imageUrl}`"
      :qty=item.qty
      @remove-click="() => handleCart(item)"
      @change-qty="(qty) => handleCartQty(item, qty)"
    />
  </div>
</template>

<script setup>
import { inject } from 'vue'
import CartItem from './CartItem.vue'

const { cart, handleCart, handleCartQty } = inject('cart')
</script>

<style></style>
