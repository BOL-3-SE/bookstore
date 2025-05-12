<template>
  <div class="container mt-5">
    <h2 class="mb-4">Daftar Buku</h2>
    <b-row>
      <b-col v-for="book in books" :key="book.id" cols="12" md="4" class="mb-4">
        <b-card :title="book.title" :sub-title="book.author">
          <p>{{ book.description }}</p>
          <b-button variant="primary">Lihat Detail</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script setup>
// Data dummy langsung di halaman (tanpa API)
const books = [
  {
    id: 1,
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    description: "Kisah anak-anak Belitung yang penuh semangat belajar.",
  },
  {
    id: 2,
    title: "Negeri 5 Menara",
    author: "Ahmad Fuadi",
    description: "Kisah inspiratif para santri yang bermimpi besar.",
  },
  {
    id: 3,
    title: "Bumi",
    author: "Tere Liye",
    description: "Petualangan dunia paralel yang seru dan penuh misteri.",
  },
]
</script>
