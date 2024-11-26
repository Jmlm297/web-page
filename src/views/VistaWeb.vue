<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <img alt="Vue logo" class="h-10 w-10 mr-3 " src="@/assets/logo.svg" />
          <h1 class="text-xl font-bold">Mi Sitio Web</h1>
          <!-- <div>
            <p>Alto: {{ windowHeight * 0.6 }}px</p>
            <p>Ancho: {{ windowWidth * 0.6 }}px</p>
          </div> -->


        </div>
      </div>
    </header>

    <!-- Navigation -->
    <nav class="bg-white text-white p-2">
      <div class="container mx-auto">
        <ul class="flex space-x-6">
          <li><a href="#" class="hover:text-gray-300">Inicio</a></li>
          <li><a href="#" class="hover:text-gray-300">Productos</a></li>
          <li><a href="#" class="hover:text-gray-300">Servicios</a></li>
          <li><a href="#" class="hover:text-gray-300">Contacto</a></li>
        </ul>
      </div>
    </nav>

    <!-- Main Content with Sidebar -->
    <div class="flex flex-1">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-100 p-4">
        <nav>
          <ul class="space-y-2">
            <li><a href="#" class="block hover:bg-gray-200 p-2 rounded">Categoría 1</a></li>
            <li><a href="#" class="block hover:bg-gray-200 p-2 rounded">Categoría 2</a></li>
            <li><a href="#" class="block hover:bg-gray-200 p-2 rounded">Categoría 3</a></li>
            <li><a href="#" class="block hover:bg-gray-200 p-2 rounded">Categoría 4</a></li>
          </ul>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-6">
        <div class="container mx-auto">
          <h2 class="text-2xl font-bold mb-4">Contenido Principal</h2>
          <p class="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </main>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4">
      <div class="container mx-auto text-center">
        <p>&copy; {{ new Date().getFullYear() }} Mi Sitio Web. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const windowHeight = ref(window.innerHeight)
const windowWidth = ref(window.innerWidth)

onMounted(() => {
  window.addEventListener('resize', () => {
    windowHeight.value = window.innerHeight
    windowWidth.value = window.innerWidth
  })
})
</script>

<style scoped></style>
