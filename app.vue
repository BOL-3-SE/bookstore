<template>
  <div>
    <!-- Navbar -->
    <nav class="bg-blue-600 text-white px-6 py-4 flex justify-between">
      <h1 class="text-xl font-bold">Toko Buku Online</h1>
      <ul class="flex space-x-4">
        <li><NuxtLink to="/">Beranda</NuxtLink></li>
        <li><NuxtLink to="/books">Buku</NuxtLink></li>
        <li><NuxtLink to="/login">Login</NuxtLink></li>
        <li><NuxtLink to="/register">Daftar</NuxtLink></li>
      </ul>
    </nav>

    <!-- Halaman Konten -->
    <main class="p-6">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 text-center text-sm py-4 mt-12">
      &copy; 2025 Toko Buku Online. Semua Hak Dilindungi.
    </footer>
  </div>
</template>

<script setup>
// Tidak perlu script untuk layout dasar ini
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: underline;
}
</style>
