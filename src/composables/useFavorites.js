import { ref, watch, onMounted } from 'vue'

export default function useFavorites() {
  const favorites = ref([])

  const handleFavorites = (item) => {
    item.isFavorite = !item.isFavorite
    if (item.isFavorite) {
      favorites.value.push(item)
    } else {
      favorites.value.splice(favorites.value.indexOf(item), 1)
    }
  }

  watch(
    favorites,
    () => {
      localStorage.setItem('favorites', JSON.stringify(favorites.value))
    },
    { deep: true }
  )

  onMounted(async () => {
    const localFavs = localStorage.getItem('favorites')
    if (localFavs) {
      favorites.value = JSON.parse(localFavs)
    }
  })

  return { favorites, handleFavorites }
}
