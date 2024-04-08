<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <RouterLink to="/" class="flex items-center gap-3">
      <img src="/logo-new.png" alt="logo" class="w-20" />
      <div class="hidden md:inline-block">
        <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
        <p class="text-slate-500">Магазин кроссовок</p>
      </div>
    </RouterLink>

    <nav class="flex items-center gap-10">
      <div
        @click="() => emit('openDrawer')"
        class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black"
      >
        <div class="relative">
          <QtyBadge :qty="cartQty" color="green" />
          <img src="/cart.svg" alt="cart" />
        </div>
        <strong class="hidden lg:inline-block">{{ total }} ₽</strong>
      </div>

      <RouterLink
        to="favorites"
        class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black custom"
      >
        <div class="relative">
          <QtyBadge :qty="favorites.length" color="rose"/>
          <img src="/heart.svg" alt="favorite" />
        </div>
        <span class="hidden lg:inline-block">Закладки</span>
      </RouterLink>

      <RouterLink
        to="about"
        class="flex items-center cursor-pointer gap-2 text-gray-500 hover:text-black custom"
      >
        <img src="/info.svg" alt="profile" />
        <span class="hidden lg:inline-block">О проекте</span>
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { inject } from 'vue';
import QtyBadge from './QtyBadge.vue'
const emit = defineEmits(['openDrawer'])

const { total, cartQty } = inject('cart')
const { favorites } = inject('favorites')

</script>

<style scoped>
  .custom.router-link-active {
    color: black;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  }
</style>
