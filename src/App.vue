<template>
  <ShopProvider>
    <CartDrawer />

    <div
      class="bg-white md:w-4/5 m-auto md:rounded-xl shadow-xl md:my-10 flex flex-col min-h-dvh md:min-h-[calc(100dvh-80px)]"
    >
      <PageHeader />

      <main class="p-10 grow flex flex-col">
        <RouterView />
      </main>

      <PageFooter />
    </div>
  </ShopProvider>
</template>

<script setup>
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import CartDrawer from './components/CartDrawer.vue'
import ShopProvider from './providers/ShopProvider.vue'
</script>
