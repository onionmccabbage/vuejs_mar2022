<template>
  <div class="home">
    <Swapi msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Swapi from '@/components/Swapi.vue'

export default {
  name: 'home',
  components: {
    Swapi
  }
}
</script>
