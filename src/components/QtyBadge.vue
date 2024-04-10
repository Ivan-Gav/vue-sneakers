<template>
  <div
    :v-key="Math.random * 100"
    class="absolute -top-2 -right-2 w-4 h-4 rounded-full text-white text-[10px] font-bold overflow-hidden"
  >
    <div v-if="!qty" class="w-4 h-4 flex items-center justify-center bg-slate-400">0</div>
    <div
      v-else
      class="w-4 h-4 flex items-center justify-center"
      :class="`${colorVariants[color] || 'bg-orange-600'}`"
    >
      {{ qty }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  qty: Number,
  color: String
})

const colorVariants = {
  green: 'bg-green-500',
  red: 'bg-red-600',
  rose: 'bg-rose-400'
}
</script>
