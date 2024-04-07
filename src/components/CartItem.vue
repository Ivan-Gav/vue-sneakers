<template>
  <div class="grid grid-cols-4 gap-2 items-center border border-slate-200 rounded-xl p-4">
    <img class="w-16 h-16 self-start" :src="imageUrl" alt="sneakers" />
    <h4 class="mt-3 grow col-span-3 self-start">{{ title }}</h4>

    <span class="col-span-3 text-right font-semibold">{{ price }} ₽</span>
    <input
      type="number"
      @input="emit('changeQty', q)"
      v-model="q"
      min="1"
      max="20"
      class="w-10 border border-slate-200 rounded-md outline-none justify-self-end text-center custom-number-input"
      
    />

    <div class="col-span-4 w-full border-t my-2"></div>

    <strong class="col-span-3 text-right">{{ price * qty }} ₽</strong>
    <button type="button" @click="emit('removeClick')" class="justify-self-end">
      <img
        width="26"
        height="26"
        class="opacity-40 hover:opacity-100 cursor-pointer transition"
        src="/close.svg"
        alt="remove"
      />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  title: String,
  imageUrl: String,
  price: Number,
  qty: Number
})

const q = ref(props.qty)

const emit = defineEmits(['removeClick', 'changeQty'])
</script>

<style scoped>
  .custom-number-input::-webkit-inner-spin-button {
    opacity: 1
  }
</style>
