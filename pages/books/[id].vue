<template>
  <div class="container mx-auto px-4 py-10">
    <div class="flex flex-col md:flex-row gap-8 items-start">
      <!-- Cover Buku -->
      <div class="w-full md:w-1/3">
        <img
          :src="book?.cover_img"
          :alt="book?.title"
          class="w-full h-auto rounded-xl shadow-lg object-cover"
        />
      </div>

      <!-- Informasi Buku -->
      <div class="flex-1">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ book?.title }}</h1>

        <ul class="space-y-2 text-gray-700">
          <li><strong>Penulis:</strong> {{ book?.author }}</li>
          <li><strong>Penerbit:</strong> {{ book?.publisher }}</li>
          <li>
            <strong>Kategori:</strong>
            <span
              class="ml-1 inline-block text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
            >
              {{ book.category }}
            </span>
          </li>
        </ul>

        <!-- Deskripsi -->
        <div class="mt-2">
          <strong class="text-md font-bold text-gray-800 mb-2">Deskripsi</strong>
          <p class="text-gray-700 leading-relaxed text-justify">
            {{ book?.description }}
          </p>
        </div>

        <!-- WhatsApp Button -->
        <div class="mt-3">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            class="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            <i class="fab fa-whatsapp mr-2"></i>
            Pesan
          </a>
        </div>

        <!-- Kembali ke Daftar Buku -->
        <NuxtLink
          to="/"
          class="inline-block mt-8 px-4 py-1 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          ← Kembali ke daftar buku
        </NuxtLink>
      </div>
    </div>

    <div v-if="!book" class="text-center text-red-500 mt-12">Buku tidak ditemukan.</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import booksData from "~/data/books.json"

const route = useRoute()
const book = booksData.find((b) => String(b.id) === route.params.id)
</script>

<style scoped>
/* Ensure the FontAwesome icons are loaded */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
</style>
