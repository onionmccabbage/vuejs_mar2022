<script setup>
// we almost always import stuff from vue
import {ref, computed, onMounted} from 'vue'

// we need some local-scoped data models
const API_URL = 'https://jsonplaceholder.typicode.com' // free, public API
const categories = ['posts', 'albums', 'todos', 'photos']
// we use ref to access members of the data models
const currentCat = ref(categories[0]) // default to 'posts'
const results = ref(null) // empty to begin with
// methods
const getData = async ()=>{
  //                                this reeally should be computed!!!!
  results.value = await (await fetch(`${API_URL}/${currentCat.value}`).json)
}
onMounted( ()=>{ // life cycle event - when the component is loaded, run this method
  getData()
} )

</script>

<template>
  <h2>Accessing external API end-point</h2>
  <!-- debug help - pre will show any loaded results nicely on the page -->
  <pre>{{results}}</pre>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
