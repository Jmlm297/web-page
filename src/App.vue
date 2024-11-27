<template>
  <div>
    <nav class="flex flex-row justify-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      | <router-link to="/composicion">Composicion</router-link>|

      <router-link to="/view-template">View Template</router-link>|
      <router-link to="/vista-web">Vista Web</router-link>|
      <router-link to="/principal">Principal</router-link>|
      <router-link to="/contact">Contact</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/prueba-tailwind">Prueba Tailwind</router-link>
    </nav>
    <router-view> </router-view>
  </div>
</template>
<script setup lang="ts">

</script>

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
