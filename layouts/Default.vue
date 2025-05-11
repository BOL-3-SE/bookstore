<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <main class="container mx-auto px-4 py-4 flex-grow">
      <slot />
    </main>

    <Footer />
  </div>
</template>
