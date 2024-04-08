<template>
  <div class="grid grid-cols-4 gap-2 items-center border border-slate-200 rounded-xl p-4">
    <img class="w-16 h-16 self-start" :src="`.${item.imageUrl}`" alt="sneakers" />
    <h4 class="mt-3 grow col-span-3 self-start">{{ item.title }}</h4>

    <label :for="`size-select-${item.id}`">Размер:</label>
    <select
      :name="`size-select-${item.id}`"
      :id="`size-select-${item.id}`"
      class="w-12 border border-slate-200 rounded-md outline-none text-center"
      v-model="s"
      @change="emit('changeSize', s)"
    >
      <option v-for="size in item.sizes" :key="item.id - size" :value="size">{{ size }}</option>
    </select>

    <span class="text-right font-semibold">{{ item.price }} ₽</span>
    <input
      type="number"
      @input="emit('changeQty', q)"
      v-model="q"
      min="1"
      max="20"
      class="w-10 border border-slate-200 rounded-md outline-none justify-self-end text-center custom-number-input"
    />

    <div class="col-span-4 w-full border-t my-2"></div>

    <strong class="col-span-3 text-right">{{ item.price * item.qty }} ₽</strong>
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
  item: Object
})

const q = ref(props.item.qty)
const s = ref(props.item.selectedSize)

const emit = defineEmits(['removeClick', 'changeQty', 'changeSize'])
</script>

<style scoped>
.custom-number-input::-webkit-inner-spin-button {
  opacity: 1;
}
</style>
