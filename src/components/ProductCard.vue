<template>
  <div
    class="flex flex-col relative h-full bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-1 hover:shadow-xl transition"
  >
    <img
      :src="isFavorite ? './like-2.svg' : './like-1.svg'"
      alt="like"
      class="absolute top-8 left-8"
      @click="onFavoriteClick"
    />
    <div class="min-h-8">
      <img :src="imageUrl" alt="" />
    </div>
    <h4 class="grow mt-2">{{ title }}</h4>
    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Цена:</span>
        <strong>{{ price }} руб.</strong>
      </div>

      <img :src="isAdded ? './checked.svg' : './plus.svg'" alt="plus" @click="onAddClick" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  id: Number,
  imageUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onFavoriteClick: Function,
  onAddClick: Function
})
</script>

<style></style>
