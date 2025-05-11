<template>
  <header class="bg-white shadow">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center">
        <img
          src="/image/logo2.png"
          alt="Logo Aplikasi"
          class="h-8 w-auto mr-2"
        />
        <!-- <img -->
        <!--   src="@/assets/image/logo2.png" -->
        <!--   alt="Logo Aplikasi" -->
        <!--   class="h-8 w-auto mr-2" -->
        <!-- /> -->
        <NuxtLink
          to="/"
          class="font-bold text-xl text-gray-800 hover:text-indigo-600"
        >
        </NuxtLink>
      </div>

      <nav class="hidden md:block">
        <ul class="flex space-x-6">
          <li>
            <NuxtLink to="/" class="text-gray-600 hover:text-indigo-600"
              >Beranda</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/tentang" class="text-gray-600 hover:text-indigo-600"
              >Tentang</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/layanan" class="text-gray-600 hover:text-indigo-600"
              >Layanan</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/kontak" class="text-gray-600 hover:text-indigo-600"
              >Kontak</NuxtLink
            >
          </li>
        </ul>
      </nav>

      <div class="hidden md:block">
        <NuxtLink
          :to="{ path: '/login' }"
          class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Masuk
        </NuxtLink>
        <NuxtLink
          to="/daftar"
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
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
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
        <NuxtLink to="/" class="block py-2 text-gray-600 hover:text-indigo-600"
          >Beranda</NuxtLink
        >
        <NuxtLink
          to="/tentang"
          class="block py-2 text-gray-600 hover:text-indigo-600"
          >Tentang</NuxtLink
        >
        <NuxtLink
          to="/layanan"
          class="block py-2 text-gray-600 hover:text-indigo-600"
          >Layanan</NuxtLink
        >
        <NuxtLink
          to="/kontak"
          class="block py-2 text-gray-600 hover:text-indigo-600"
          >Kontak</NuxtLink
        >
        <NuxtLink
          to="/masuk"
          class="block py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >Masuk</NuxtLink
        >
        <NuxtLink
          to="/daftar"
          class="block py-2 px-4 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-2"
          >Daftar</NuxtLink
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);
</script>
