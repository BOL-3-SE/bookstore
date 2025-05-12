<template>
  <header class="bg-white shadow">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center">
        <h1 class="text-2xl font-bold text-gray-800 tracking-tight">Bookstore</h1>
        <NuxtLink to="/" class="font-bold text-xl text-gray-800 hover:text-indigo-600"> </NuxtLink>
      </div>

      <div class="hidden md:block">
        <NuxtLink
          :to="{ path: '/login' }"
          class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Masuk
        </NuxtLink>
        <NuxtLink
          to="/register"
          class="ml-3 px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Daftar
        </NuxtLink>
      </div>

      <div class="md:hidden">
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="isMobileMenuOpen" class="md:hidden bg-gray-100 py-2">
      <div class="px-4 space-y-2">
        <NuxtLink
          to="/login"
          class="block py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >Masuk</NuxtLink
        >
        <NuxtLink
          to="/register"
          class="block py-2 px-4 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-2"
          >Daftar</NuxtLink
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue"

const isMobileMenuOpen = ref(false)
</script>
