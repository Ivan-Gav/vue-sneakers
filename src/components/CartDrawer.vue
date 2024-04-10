<template>
  <div v-if="drawerOpen">
    <div class="fixed inset-0 bg-black opacity-70 z-10" @click="closeDrawer"></div>
    <div class="flex flex-col fixed right-0 top-0 bg-white w-96 h-full z-20 p-8 overflow-y-auto">
      <div class="flex items-baseline gap-5 mb-8">
        <ArrowSVG
          @click="closeDrawer"
          class="opacity-30 cursor-pointer rotate-180 hover:opacity-100 hover:-translate-x-1 transition"
        />
        <h2 class="text-2xl font-bold">Корзина</h2>
      </div>

      <form @submit.prevent="onSubmit" v-if="total" class="flex flex-col grow">
        <CartItemList />

        <div class="flex flex-col gap-4 my-6">
          <div class="flex gap-2">
            <span>Итого:</span>
            <div class="flex-1 border-b border-dashed"></div>
            <strong>{{ total }} ₽</strong>
          </div>

          <div class="flex gap-2">
            <span>Доставка:</span>
            <div class="flex-1 border-b border-dashed"></div>
            <strong>{{ deliveryPrice }} ₽</strong>
          </div>
        </div>

        <CartUserData />

        <button
          :disabled="isCreatingOrder"
          class="bg-lime-500 w-full rounded-xl py-3 text-white hover:bg-lime-600 active:bg-lime-700 transition disabled:bg-slate-400"
        >
          Оформить заказ
        </button>
      </form>

      <div v-else-if="orderId" class="flex flex-col h-full justify-center">
        <InfoBlock
          title="Заказ оформлен"
          :description="`Ваш заказ №${orderId} принят и будет обработан в ближайшее время.`"
          image-url="/order-success-icon.png"
        />
      </div>

      <div v-else class="flex flex-col h-full justify-center">
        <InfoBlock
          title="Корзина пуста"
          description="Добавьте товар из каталога чтобы сделать заказ"
          image-url="/package-icon.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import ArrowSVG from './svg/ArrowSVG.vue'
import CartItemList from './CartItemList.vue'
import CartUserData from './CartUserData.vue'
import InfoBlock from './InfoBlock.vue'
import useOrder from '@/composables/useOrder'

const { closeDrawer, cart, total, drawerOpen, deliveryPrice, clearCart } = inject('shop')
const { createOrder, isCreatingOrder, orderId } = useOrder(drawerOpen)
const onSubmit = () => createOrder(cart, total, clearCart)
</script>
