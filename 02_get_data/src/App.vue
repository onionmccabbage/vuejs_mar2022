<script setup>
// we almost always import stuff from vue
import {ref, computed, onMounted, watchEffect} from 'vue'

// we need some local-scoped data models
const API_URL = 'https://jsonplaceholder.typicode.com' // free, public API
const categories = ['posts', 'albums', 'todos', 'photos']
// we use ref to access members of the data models
const currentCat = ref(categories[0]) // default to 'posts' NB remember all 'ref' have a 'value'
const results = ref(null) // empty to begin with
// computed
const hideCompleted = ref(false) // toggle between true and false
const filteredTodos = computed( ()=>{
  // we use the ES ternary operator to handle 'if' conditions
  return hideCompleted.value ? results.value.filter((t)=>{return !t.completed}) : results.value
} )
// methods
onMounted( ()=>{ // life cycle event - when the component is loaded, run this method
  console.log(`current category is ${currentCat.value}`)
} )
// watch for changes to local-scoped data models
// NB watch is lazy, so use watchEffect to eagerly watch for changes
watchEffect( async ()=>{
  //this effect will run whenever the values change
  const url = `${API_URL}/${currentCat.value}` //runs immediately (because currentCat gets initialised)
  results.value = await (await fetch(url)).json() // .json will return the json bit of the response
} )
</script>
<template>
  <h2>Accessing external API end-point</h2>
  <!-- provide some options for the category -->
  <template v-for="cat in categories">
    <input type="radio" name="cat" v-model="currentCat" :id="cat" :value="cat" /> <span>{{cat}}</span>&nbsp;
  </template>
  <!-- we can show or hide the completed todo items -->
  <button @click="hideCompleted = !hideCompleted">{{ hideCompleted ? 'Show All' : 'Hide Completed' }}</button>
  <!-- show the returned data in a nice way -->
  <ul v-if="currentCat != 'todos'">
    <!-- for everything EXCEPT todo... -->
    <li v-for="{id, title} in results">{{id}}  {{title}}</li>
  </ul>
  <!-- now show the todo items... -->
  <ul v-else>
    <li v-for="{id, title, completed} in filteredTodos">{{id}}  {{title}} {{completed}}</li>
  </ul>
  
  <!-- debug helper - pre will show any loaded results nicely on the page (remove for production)-->
  <!-- <pre>{{results}}</pre> -->
</template>

<style>

</style>
