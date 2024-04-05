<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <RouterLink to="/" class="flex items-center gap-4">
      <img src="/logo.png" alt="logo" class="w-10" />
      <div class="hidden md:inline-block">
        <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
        <p class="text-slate-500">Магазин лучших кроссовок</p>
      </div>
    </RouterLink>

    <nav class="flex items-center gap-10">
      <div
        @click="() => emit('openDrawer')"
        class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black"
      >
        <div class="relative">
          <QtyBadge :qty="cart.length" color="green" />
          <img src="/cart.svg" alt="cart" />
        </div>
        <strong class="hidden lg:inline-block">{{ total }} руб.</strong>
      </div>

      <RouterLink
        to="favorites"
        class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black"
      >
        <div class="relative">
          <QtyBadge :qty="favorites.length" color="rose"/>
          <img src="/heart.svg" alt="favorite" />
        </div>
        <span class="hidden lg:inline-block">Закладки</span>
      </RouterLink>

      <div class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
        <img src="/profile.svg" alt="profile" />
        <span class="hidden lg:inline-block">Профиль</span>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { inject } from 'vue';
import QtyBadge from './QtyBadge.vue'
const emit = defineEmits(['openDrawer'])

const { total, cart } = inject('cart')
const { favorites } = inject('favorites')

</script>
