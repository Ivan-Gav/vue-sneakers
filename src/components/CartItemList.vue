<template>
  <div class="flex flex-col gap-4" v-auto-animate>
    <CartItem
      v-for="item in cart.items"
      :key="item.id"
      :item="item"
      @remove-click="() => handleCart(item)"
      @change-qty="(qty) => handleCartQty(item, qty)"
      @change-size="(size) => handleSize(item, size)"
    />
  </div>
</template>

<script setup>
import { inject } from 'vue'
import CartItem from './CartItem.vue'

const { cart, handleCart, handleCartQty, handleSize } = inject('shop')
</script>
