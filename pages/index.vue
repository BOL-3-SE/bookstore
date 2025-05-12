<template>
  <div class="pt-2 pb-4">
    <h1 class="text-2xl font-bold mb-6">Daftar Buku</h1>

    <div class="mb-4">
      <label for="filter" class="mr-2 font-semibold">Filter Kategori:</label>
      <select id="filter" v-model="filter" class="border rounded px-3 py-2">
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="book in filteredBooks"
        :key="book.id"
        class="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
      >
        <div class="w-full aspect-[3/4] mb-4">
          <img
            :src="book.cover_img"
            :alt="book.title"
            class="w-full h-full object-cover rounded-xl"
          />
        </div>

        <h2 class="text-lg font-bold text-gray-800 mb-1 truncate">{{ book.title }}</h2>
        <p class="text-sm text-gray-600 mb-1">{{ book.author }}</p>

        <div class="mt-auto mb-1">
          <span
            class="inline-block text-xs font-medium bg-red-100 text-red-700 px-3 py-1 rounded-full"
          >
            {{ book.price }}
          </span>
        </div>

        <div class="mt-auto">
          <span
            class="inline-block text-xs font-medium bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full mr-1"
          >
            {{ book.cover_type }}
          </span>

          <span
            class="inline-block text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
          >
            {{ book.category }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import booksData from "~/data/books.json"
import { ref, computed } from "vue"

const filter = ref("All")

const books = ref(booksData)

const categories = computed(() => {
  const unique = new Set(books.value.map((book) => book.category))
  return ["All", ...Array.from(unique)]
})

const filteredBooks = computed(() => {
  return filter.value === "All"
    ? books.value
    : books.value.filter((book) => book.category === filter.value)
})
</script>
