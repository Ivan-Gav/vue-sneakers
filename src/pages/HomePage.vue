<template>
  <div class="flex flex-col lg:flex-row justify-between lg:items-center mb-8 gap-4">
    <h2 class="text-3xl font-bold">Все кроссовки</h2>

    <div class="flex flex-col lg:justify-center md:flex-row gap-4">
      <select @change="onSelectChange" class="p-2 rounded-md border outline-none" id="sort-select">
        <option value="name">По названию</option>
        <option value="price">По цене (дешевые)</option>
        <option value="-price">По цене (дорогие)</option>
      </select>

      <div class="relative">
        <SearchSVG class="absolute left-3 top-3 text-slate-400" />
        <input
          @input="onSearchInputChange"
          class="border rounded-md py-2 pl-9 pr-4 outline-none w-full focus:border-gray-400"
          type="text"
          placeholder="поиск..."
          id="search-input"
        />
      </div>
    </div>
  </div>

  <ProductList :items="items" @handle-favorites="handleFavorites" @handle-cart="handleCart" />
</template>

<script setup>
import { inject, reactive, onMounted } from 'vue'
import debounce from 'lodash.debounce'
import ProductList from '../components/ProductList.vue'
import SearchSVG from '@/components/svg/SearchSVG.vue'
import useItems from '@/composables/useItems'

const filters = reactive({
  sortBy: 'title',
  searchQuery: ''
})

const { handleCart, cart, cartQty, handleFavorites, favorites } = inject('shop')

const { items, fetchItems } = useItems(filters, cart, cartQty, favorites)

const onSelectChange = (e) => {
  filters.sortBy = e.target.value
}

const onSearchInputChange = debounce((e) => {
  filters.searchQuery = e.target.value
}, 500)

onMounted(async () => {
  fetchItems()
})
</script>
