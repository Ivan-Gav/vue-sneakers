<template>
  <div class="flex items-start min-h-32 gap-4 border border-slate-200 rounded-xl p-4">
    <img class="w-16 h-16" :src="imageUrl" alt="sneakers">
    <div class="flex flex-col grow h-full">
      <h4 class="mt-3 grow" >{{ title }}</h4>
      <div class="flex gap-4 justify-end items-center mt-2">
        <strong>{{ price }} руб</strong>
        <img 
          @click="emit('removeClick')"
          class="opacity-40 hover:opacity-100 cursor-pointer transition" src="/close.svg" alt="remove">
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: String,
    imageUrl: String,
    price: Number
  })

  const emit = defineEmits(['removeClick'])

</script>

<style>

</style>