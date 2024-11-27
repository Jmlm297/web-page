<template>
  <header class="bg-indigo-800 text-white font-bold p-4 rounded-md h-15 w-70 text-xl">

    <nav>
      <ul
        class="flex flex-row space-x-5 justify-center text-lg shadow-cyan-500/50 transition ease-in-out delay-150 hover:scale-110">

        <li>
          <button class="rounded-full bg-indigo-500 px-4 hover:opacity-75 transition-opacity">
            Inicio
          </button>
        </li>
        <li>
          <button class="rounded-full bg-indigo-500 px-4 hover:opacity-75 transition-opacity">
            Final
          </button>
        </li>
        <li>
          <button class="rounded-full bg-indigo-500 px-4 hover:opacity-75 transition-opacity">
            Procesos
          </button>
        </li>
        <li>
          <button class="rounded-full bg-indigo-500 px-4 hover:opacity-75 transition-opacity">
            Salir
          </button>
        </li>

      </ul>

    </nav>
  </header>

</template>

<style>
nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-active {
  color: #42b983;
}
</style>

<script setup lang="ts">

</script>
