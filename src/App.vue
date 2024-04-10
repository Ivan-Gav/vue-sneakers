<template>
  <CartDrawer v-if="drawerOpen" :total-price="total" :delivery-price="deliveryPrice" />

  <div
    class="bg-white md:w-4/5 m-auto md:rounded-xl shadow-xl md:my-10 flex flex-col min-h-dvh md:min-h-[calc(100dvh-80px)]"
  >
    <PageHeader @open-drawer="openDrawer" />

    <main class="p-10 grow flex flex-col">
      <RouterView />
    </main>

    <PageFooter />
  </div>
</template>

<script setup>
import { computed, provide, ref, watch, onErrorCaptured } from 'vue'
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import CartDrawer from './components/CartDrawer.vue'

const emptyCart = Object.freeze({
  user: {
    name: '',
    phone: '',
    email: '',
    deliveryAddress: ''
  },
  items: []
})

const cart = ref({ ...emptyCart })
const favorites = ref([])

const total = computed(() => cart.value.items.reduce((total, item) => total + item.price * item.qty, 0))
const cartQty = computed(() => cart.value.items.reduce((qty, item) => qty + item.qty, 0))

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
    cart.value.items.push({
      ...item,
      qty: 1,
      selectedSize: item.sizes[0] || null
    })
  } else {
    cart.value.items.splice(cart.value.items.findIndex((cartItem) => item.id === cartItem.id), 1)
  }
  if (!cart.value.items.length) {
    clearCart()
  }
}

const handleCartQty = (item, qty) => {
  const cItem = cart.value.items.find((cartItem) => cartItem.id === item.id)
  cItem.qty = qty
}

const handleSize = (item, size) => {
  if (item.sizes.includes(size)) {
      const cItem = cart.value.items.find((cartItem) => cartItem.id === item.id)
      cItem.selectedSize = size
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

const clearCart = () => {
  cart.value = {
    user: {
      name: '',
      phone: '',
      email: '',
      deliveryAddress: ''
    },
    items: []
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

watch(
  favorites,
  () => {
    localStorage.setItem('favorites', JSON.stringify(favorites.value))
  },
  { deep: true }
)

onErrorCaptured(() => {
  // reset localstorage on error
  clearCart()
  favorites.value = []
return true;
});

provide('cart', {
  openDrawer,
  closeDrawer,
  handleCart,
  handleCartQty,
  handleSize,
  cart,
  total,
  cartQty,
  clearCart
})
provide('favorites', {
  favorites,
  handleFavorites
})
</script>

<style></style>
