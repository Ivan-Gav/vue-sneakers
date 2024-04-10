import { computed, ref, watch, onMounted } from 'vue'

const emptyCart = Object.freeze({
  user: {
    name: '',
    phone: '',
    email: '',
    deliveryAddress: ''
  },
  items: []
})

export default function useCart() {
  const cart = ref({ ...emptyCart })

  const total = computed(() =>
    cart.value.items.reduce((total, item) => total + item.price * item.qty, 0)
  )
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
      cart.value.items.splice(
        cart.value.items.findIndex((cartItem) => item.id === cartItem.id),
        1
      )
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

  onMounted(async () => {
    const localCart = localStorage.getItem('cart')
    if (localCart) {
      cart.value = JSON.parse(localCart)
    }
  })

  return {
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
  }
}
