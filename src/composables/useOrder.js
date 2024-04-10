import { ref, watch } from 'vue'
import axios from 'axios'

export default function useOrder(drawerOpen) {
  const isCreatingOrder = ref(false)
  const orderId = ref(null)

  const createOrder = async (cart, total, clearCart) => {
    isCreatingOrder.value = true
    try {
      const { data } = await axios.post(`https://6b389cda7832ddc2.mokky.dev/orders`, {
        items: cart.value.items,
        total: total.value,
        user: cart.value.user
      })
      clearCart()
      orderId.value = data.id
      return data
    } catch (err) {
      console.log(err)
    } finally {
      isCreatingOrder.value = false
    }
  }

  watch(drawerOpen, () => {
    if (!drawerOpen.value) {
      orderId.value = null
    }
  })

  return { createOrder, isCreatingOrder, orderId }
}
