<template>
  <footer class="bg-gray-800 text-white">
    <div class="container mx-auto px-4 py-8">
      <!-- Top section with logo and links -->
      <div class="flex flex-wrap justify-between mb-4">
        <!-- Logo and company info -->
        <div class="w-full jb-6 md:mb-0">
          <div class="font-bold text-xl mb-2">Bookstore</div>
          <p class="text-gray-400">Books that stay with you</p>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-700 my-4"></div>

      <!-- Bottom section with copyright and terms -->
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p class="text-gray-400">
            © {{ new Date().getFullYear() }} Bookstore. All rights reserved.
          </p>
        </div>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" class="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="#" class="text-gray-400 hover:text-white">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>
