<template>
  <div class="flex justify-between items-center">
    <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>

    <div class="flex justify-center gap-4">
      <select @change="onSelectChange" class="py-2 rounded-md border outline-none">
        <option value="name">По названию</option>
        <option value="price">По цене (дешевые)</option>
        <option value="-price">По цене (дорогие)</option>
      </select>

      <div class="relative">
        <img class="absolute left-3 top-3" src="/search.svg" alt="" />
        <input
          @input="onSearchInputChange"
          class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400"
          type="text"
          placeholder="поиск..."
        />
      </div>
    </div>
  </div>

  <ProductList :items="items" @handle-favorites="handleFavorites" @handle-cart="handleCart" />
</template>

<script setup>
import { inject, reactive, watch, ref, onMounted } from 'vue'
import axios from 'axios'
import debounce from 'lodash.debounce'
import ProductList from '../components/ProductList.vue'

const items = ref([])

const filters = reactive({
  sortBy: 'title',
  searchQuery: ''
})

const { handleCart, cart } = inject('cart')
const { handleFavorites, favorites } = inject('favorites')

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
      isAdded: cart.value.some((cartItem) => cartItem.id === obj.id)
    }))
  } catch (err) {
    console.log(err)
  }
}

const onSelectChange = (e) => {
  filters.sortBy = e.target.value
}

const onSearchInputChange = debounce((e) => {
  filters.searchQuery = e.target.value
}, 500)

onMounted(async () => {
  const localCart = localStorage.getItem('cart')
  if (localCart) {
    cart.value = JSON.parse(localCart)
  }
  fetchItems()
})

watch(filters, fetchItems)
</script>

<style scoped></style>
