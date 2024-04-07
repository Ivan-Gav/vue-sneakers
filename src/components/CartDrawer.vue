<template>
  <div class="fixed inset-0 bg-black opacity-70 z-10" @click="closeDrawer"></div>
  <div class="flex flex-col fixed right-0 top-0 bg-white w-96 h-full z-20 p-8 overflow-y-auto">
    <div class="flex items-baseline gap-5 mb-8">
      <ArrowSVG
        @click="closeDrawer"
        class="opacity-30 cursor-pointer rotate-180 hover:opacity-100 hover:-translate-x-1 transition"
      />
      <h2 class="text-2xl font-bold">Корзина</h2>
    </div>

    <form @submit="createOrder" v-if="totalPrice" class="flex flex-col grow">
      <CartItemList />

      <div class="flex flex-col gap-4 my-6">
        <div class="flex gap-2">
          <span>Итого:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <strong>{{ totalPrice }} ₽</strong>
        </div>

        <div class="flex gap-2">
          <span>Доставка:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <strong>{{ deliveryPrice }} ₽</strong>
        </div>
      </div>

      <CartUserData />

      <button
        
        :disabled="isBtnDisabled"
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
</template>

<script setup>
import { computed, inject, ref } from 'vue'
import axios from 'axios'
import ArrowSVG from './svg/ArrowSVG.vue'
import CartItemList from './CartItemList.vue'
import CartUserData from './CartUserData.vue'
import InfoBlock from './InfoBlock.vue'

const props = defineProps({
  totalPrice: Number,
  deliveryPrice: Number
})

const isCreatingOrder = ref(false)
const orderId = ref(null)

const { closeDrawer, cart, total, clearCart } = inject('cart')

const isBtnDisabled = computed(() =>
  props.isCreatingOrder ? true : props.totalPrice ? false : true
)

const createOrder = async (e) => {
  e.preventDefault()
  isCreatingOrder.value = true
  try {
    const { data } = await axios.post(`https://6b389cda7832ddc2.mokky.dev/orders`, {
      items: cart.value.items,
      total: total.value,
      user: cart.value.user
    })
    clearCart()
    orderId.value = data.id
    return data
  } catch (err) {
    console.log(err)
  } finally {
    isCreatingOrder.value = false
  }
}
</script>

<style></style>
