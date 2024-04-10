<template>
  <slot></slot>
</template>

<script setup>
import { provide, onErrorCaptured } from 'vue'
import useCart from '@/composables/useCart'
import useFavorites from '@/composables/useFavorites'

const {
  openDrawer,
  closeDrawer,
  handleCart,
  handleCartQty,
  handleSize,
  drawerOpen,
  cart,
  total,
  deliveryPrice,
  cartQty,
  clearCart
} = useCart()

const { favorites, handleFavorites } = useFavorites()

onErrorCaptured(() => {
  // reset localstorage on error
  clearCart()
  favorites.value = []
  return true
})

provide('shop', {
  openDrawer,
  closeDrawer,
  handleCart,
  handleCartQty,
  handleSize,
  drawerOpen,
  cart,
  total,
  deliveryPrice,
  cartQty,
  clearCart,
  favorites,
  handleFavorites
})
</script>
