<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <RouterLink to="/" class="flex items-center gap-3 hover:text-rose-600 transition custom-logo">
      <img src="/logo-new.png" alt="logo" class="w-20" />
      <div class="hidden md:inline-block">
        <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
        <p class="text-slate-500">Магазин кроссовок</p>
      </div>
    </RouterLink>

    <nav class="flex items-center gap-10">
      <div
        @click="openDrawer"
        class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black transition"
      >
        <div class="relative">
          <QtyBadge :qty="cartQty" color="green" />
          <CartSVG />
        </div>
        <strong class="hidden lg:inline-block">{{ total }} ₽</strong>
      </div>

      <RouterLink
        to="favorites"
        class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black transition custom"
      >
        <div class="relative">
          <QtyBadge :qty="favorites.length" color="rose" />
          <HeartSVG />
        </div>
        <span class="hidden lg:inline-block">Закладки</span>
      </RouterLink>

      <RouterLink
        to="about"
        class="flex items-center cursor-pointer gap-2 text-gray-500 hover:text-black transition custom"
      >
        <InfoSVG />
        <span class="hidden lg:inline-block">О проекте</span>
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { inject } from 'vue'
import QtyBadge from './QtyBadge.vue'
import CartSVG from './svg/CartSVG.vue'
import HeartSVG from './svg/HeartSVG.vue'
import InfoSVG from './svg/InfoSVG.vue'

const { total, cartQty, openDrawer, favorites } = inject('shop')
</script>

<style scoped>
.custom.router-link-active {
  color: black;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

.custom-logo:hover img {
  filter: drop-shadow(1px 1px #f43f5e) drop-shadow(-1px 1px #f43f5e) drop-shadow(1px -1px #f43f5e)
    drop-shadow(-1px -1px #f43f5e);
}
</style>
