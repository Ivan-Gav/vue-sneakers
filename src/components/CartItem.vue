<template>
  <div class="grid grid-cols-5 gap-2 items-center border border-slate-200 rounded-xl p-4">
    <img class="col-span-2 self-start" :src="`.${item.imageUrl}`" alt="sneakers" />
    <h4 class="grow col-span-3 self-start">{{ item.title }}</h4>

    <div class="col-span-4 flex items-center gap-2 justify-start">
      <label :for="`size-select-${item.id}`">Размер:</label>
      <select
        :name="`size-select-${item.id}`"
        :id="`size-select-${item.id}`"
        class="w-12 border border-slate-200 rounded-md outline-none text-center font-normal"
        v-model="s"
        @change="emit('changeSize', s)"
      >
        <option v-for="size in item.sizes" :key="item.id - size" :value="size">{{ size }}</option>
      </select>
      <span class="text-right justify-self-end font-medium flex-1">{{ item.price }} ₽</span>
    </div>

    <div class="flex items-center gap-2 justify-end">
      <input
        type="number"
        @input="emit('changeQty', q)"
        v-model="q"
        min="1"
        max="20"
        class="w-10 border border-slate-200 rounded-md outline-none justify-self-end text-center custom-number-input"
      />
    </div>

    <div class="col-span-5 w-full border-t my-2"></div>

    <strong class="col-span-4 text-right font-bold">{{ item.price * item.qty }} ₽</strong>
    <button type="button" @click="emit('removeClick')" class="justify-self-end">
      <CloseSVG
        class="h-[26px] text-slate-400 opacity-40 hover:opacity-100 cursor-pointer transition"
      />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CloseSVG from './svg/CloseSVG.vue'

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
