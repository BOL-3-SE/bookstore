<template>
  <div class="container mx-auto">
    <h1>Components</h1>
    <ul>
      <li>
        <NuxtLink to="/components/form" class="text-gray-600 hover:text-indigo-600">Form</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
})
</script>
