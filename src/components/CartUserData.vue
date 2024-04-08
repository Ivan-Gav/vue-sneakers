<template>
  <div class="grow">
    <div class="w-full border-t-2 border-solid my-4"></div>
    <h4 class="self-center text-center font-bold text-xl mb-4 text-slate-400">Контактная информация</h4>

    <div class="grid grid-cols-[2fr_5fr] gap-y-4 mb-4">
      <label for="order-name">Имя<sup class="text-red-600">*</sup></label>
      <input
        id="order-name"
        class="ml-1 border border-slate-200 rounded-sm focus:outline"
        type="tel"
        v-model="cart.user.name"
        required
      />

      <label for="order-phone">Телефон<sup class="text-red-600">*</sup></label>
      <input
        id="order-phone"
        class="ml-1 border border-slate-200 rounded-sm focus:outline"
        v-model="cart.user.phone"
        required
      />

      <label for="order-email">Email</label>
      <input
        id="order-email"
        class="ml-1 border border-slate-200 rounded-sm focus:outline"
        type="email"
        v-model="cart.user.email"
      />

      <label for="order-address">Адрес</label>
      <textarea
        id="order-address"
        class="ml-1 border border-slate-200 rounded-sm focus:outline"
        v-model="cart.user.deliveryAddress"
      ></textarea>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const { cart } = inject('cart')

</script>

<style scoped></style>
