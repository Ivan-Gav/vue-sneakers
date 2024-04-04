<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <RouterLink to="/" class="flex items-center gap-4">
      <img src="/logo.png" alt="logo" class="w-10" />
      <div>
        <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
        <p class="text-slate-500">Магазин лучших кроссовок</p>
      </div>
    </RouterLink>

    <nav class="flex items-center gap-10">
      <li
        @click="() => emit('openDrawer')"
        class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black"
      >
        <img src="/cart.svg" alt="cart" />
        <strong>{{ totalPrice }} руб.</strong>
      </li>

      <RouterLink to="favorites" class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
        <img src="/heart.svg" alt="favorite" />
        <span>Закладки</span>
      </RouterLink>

      <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
        <img src="/profile.svg" alt="profile" />
        <span>Профиль</span>
      </li>
    </nav>
  </header>
</template>

<script setup>
const emit = defineEmits(['openDrawer'])
defineProps({
  totalPrice: Number
})
</script>
