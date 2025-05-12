<template>
  <header class="bg-white shadow">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo + Home -->
      <div class="flex items-center space-x-4">
        <h1 class="text-2xl font-bold text-indigo-700 tracking-tight">Bookstore</h1>
      </div>

      <!-- Desktop menu -->
      <div class="hidden md:flex items-center space-x-4">
        <template v-if="user">
          <div class="relative">
            <button
              @click="showDropdown = !showDropdown"
              class="flex items-center space-x-2 focus:outline-none hover:ring-2 hover:ring-indigo-300 rounded-full"
            >
              <img
                :src="`https://ui-avatars.com/api/?name=${user.email}&background=4f46e5&color=fff`"
                alt="User Avatar"
                class="w-9 h-9 rounded-full shadow"
              />
              <span class="text-gray-800 font-semibold hidden md:inline">{{ user.email }}</span>
              <svg
                class="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- Dropdown -->
            <transition name="fade">
              <div
                v-if="showDropdown"
                class="absolute right-0 mt-3 w-44 bg-white border rounded-xl shadow-lg z-50 overflow-hidden"
              >
                <button
                  @click="logout"
                  class="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                >
                  Keluar
                </button>
              </div>
            </transition>
          </div>
        </template>

        <template v-else>
          <NuxtLink
            to="/login"
            class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Masuk
          </NuxtLink>
          <NuxtLink
            to="/register"
            class="px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition"
          >
            Daftar
          </NuxtLink>
        </template>
      </div>

      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

    <!-- Mobile menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-gray-50 py-3">
      <div class="px-4 space-y-2">
        <template v-if="user">
          <div class="text-gray-700 font-semibold">Hi, {{ user.email }}</div>
          <button
            @click="logout"
            class="w-full text-left py-2 text-red-600 hover:bg-red-50 rounded"
          >
            Keluar
          </button>
        </template>
        <template v-else>
          <NuxtLink
            to="/login"
            class="block w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-center"
          >
            Masuk
          </NuxtLink>
          <NuxtLink
            to="/register"
            class="block w-full py-2 px-4 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 text-center"
          >
            Daftar
          </NuxtLink>
        </template>
      </div>
    </div>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>

<script setup>
import { useSupabaseUser, useSupabaseClient } from "#imports"
import { ref } from "vue"

const user = useSupabaseUser()
const client = useSupabaseClient()
const isMobileMenuOpen = ref(false)
const showDropdown = ref(false)

const logout = async () => {
  await client.auth.signOut()
  showDropdown.value = false
}
</script>
