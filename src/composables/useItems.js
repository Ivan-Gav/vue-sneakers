import { watch, ref } from 'vue'
import axios from 'axios'

export default function useItems(filters, cart, cartQty, favorites) {
  const items = ref([])

  const fetchItems = async () => {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    try {
      const { data } = await axios.get(`https://6b389cda7832ddc2.mokky.dev/items`, {
        params
      })
      items.value = data.map((obj) => ({
        ...obj,
        isFavorite: favorites.value.some((favorite) => favorite.id === obj.id),
        isAdded: cart.value.items.some((cartItem) => cartItem.id === obj.id)
      }))
    } catch (err) {
      console.log(err)
    }
  }

  watch(
    cart,
    () => {
      if (!cartQty.value) {
        items.value.forEach((item) => (item.isAdded = false))
      } else {
        items.value.forEach((item) => {
          item.isAdded = cart.value.items.some((cartItem) => cartItem.id === item.id)
        })
      }
    },
    { deep: true }
  )

  watch(filters, fetchItems)

  return { items, fetchItems }
}
