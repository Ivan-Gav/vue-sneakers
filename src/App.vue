<template>
  <CartDrawer
    v-if="drawerOpen"
    :total-price="total"
    :delivery-price="deliveryPrice"
  />

  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-10">
    <PageHeader @open-drawer="openDrawer" />

    <main class="p-10">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { computed, provide, ref, watch } from 'vue'
import PageHeader from './components/PageHeader.vue'
import CartDrawer from './components/CartDrawer.vue'

const cart = ref([])
const favorites = ref([])

const total = computed(() => cart.value.reduce((total, item) => total + item.price, 0))
const deliveryPrice = computed(() => {
  if (!total.value || total.value === 0 || total.value >= 15000) {
    return 0
  } else {
    return 500
  }
})

const drawerOpen = ref(false)

const handleCart = (item) => {
  item.isAdded = !item.isAdded
  if (item.isAdded) {
    cart.value.push(item)
  } else {
    cart.value.splice(cart.value.indexOf(item), 1)
  }
}

const handleFavorites = (item) => {
  item.isFavorite = !item.isFavorite
  if (item.isFavorite) {
    favorites.value.push(item)
  } else {
    favorites.value.splice(favorites.value.indexOf(item), 1)
  }
}

const openDrawer = () => {
  drawerOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeDrawer = () => {
  drawerOpen.value = false
  document.body.style.overflow = 'auto'
}

watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  { deep: true }
)

provide('cart', {
  openDrawer,
  closeDrawer,
  handleCart,
  cart,
  total
})
provide('favorites', {
  favorites,
  handleFavorites
})
</script>

<style></style>
