<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      | <router-link to="/composicion">Composicion</router-link>|

      <router-link to="/view-template">View Template</router-link>|
      <router-link to="/vista-web">Vista Web</router-link>
    </nav>
    <router-view> </router-view>
  </div>
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
