<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
      ></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div>
            <h1 class="text-2xl font-semibold">Login</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div class="relative">
                <input
                  autocomplete="off"
                  id="email"
                  name="email"
                  type="text"
                  class="peer w-full rounded-md border-gray-200 placeholder-transparent focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Email address"
                />
                <label
                  for="email"
                  class="absolute text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >Email address</label
                >
              </div>
              <div class="relative">
                <input
                  autocomplete="off"
                  id="password"
                  name="password"
                  type="password"
                  class="peer w-full rounded-md border-gray-200 placeholder-transparent focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Password"
                />
                <label
                  for="password"
                  class="absolute text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >Password</label
                >
              </div>
              <div class="relative">
                <button
                  type="submit"
                  class="w-full bg-blue-500 text-white rounded-md px-4 py-2 font-semibold focus:outline-none focus:shadow-outline"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
})
</script>
