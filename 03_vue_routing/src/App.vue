<script setup>
// we need to import the bits needed for routing
import { RouterLink, RouterView } from 'vue-router'

// import our components here
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Products from '@/views/Products.vue'
</script>

<template>
  <h1>This App uses Rotuing</h1>
  <!-- we can use views as components if needed -->
  <!-- <Home />
  <About />
  <Products /> -->

  <nav>
    <!-- typically links go in a 'nav' block -->
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/products">Products</RouterLink>
  </nav>

<!-- all routed components will appear in the routerView (mutually exlusive) -->
  <RouterView />
</template>

<style>

</style>
