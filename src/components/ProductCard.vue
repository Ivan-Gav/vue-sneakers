<template>
  <div
    class="flex flex-col relative h-full max-w-64 bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-1 hover:shadow-xl transition"
  >
    <button @click="onFavoriteClick" class="absolute top-8 left-8">
      <HeartBtnActiveSVG v-if="isFavorite" class="opacity-80 hover:opacity-100 transition" />
      <HeartBtnSVG v-else class="text-slate-400 opacity-60 hover:opacity-100 transition" />
    </button>
    <div class="min-h-8 aspect-square">
      <img :src="imageUrl" alt="" />
    </div>
    <h4 class="grow mt-2">{{ title }}</h4>
    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Цена:</span>
        <strong>{{ price }} ₽</strong>
      </div>
      <button @click="onAddClick" >
        <CheckedSVG v-if="isAdded" class="opacity-80 hover:opacity-100 transition"/>
        <PlusBtnSVG v-else class="text-slate-400 opacity-60 hover:opacity-100 transition"/>
      </button>
    </div>
  </div>
</template>

<script setup>
import PlusBtnSVG from './svg/PlusBtnSVG.vue';
import CheckedSVG from './svg/CheckedSVG.vue';
import HeartBtnSVG from './svg/HeartBtnSVG.vue';
import HeartBtnActiveSVG from './svg/HeartBtnActiveSVG.vue';

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
