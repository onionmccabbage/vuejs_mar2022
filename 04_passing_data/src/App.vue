<script setup>
import {ref, computed, onMounted, watchEffect} from 'vue'
import MyComp from './components/MyComp.vue';
// we can declare properties for this component
defineProps( { // define props ALWAYS takes an object (to declare our props)
  // flag:true,
  info:String, default:'hello',
  objOfAttr:Object, default:{ // an object
    src:'https://placekitten.com/128/64',
    title:'an image',
    alt:'an image'
  }
} )
// some local data scoped to this component
const categories = ['posts', 'albums', 'todos', 'photos']
const currentCat = ref(categories[0])
// event handler functions
const handleResponse = (data)=>{
  console.log(`received ${data}`)
  currentCat.value = data
}
</script>
<template>
  <header><h2>Passing Data Around</h2></header>
  <nav><a href='https://vuejs.org'>docs</a></nav>
  <main>
    <article>
      <!-- listen for custom event -->
      <MyComp @response="handleResponse" :categories="categories" />
      <section>
        <!-- we can bind to props -->
        <h4>{{info}} current category is {{currentCat}}</h4>
        <!-- use our objOfAttr to populate the attributes of an image -->
        <!-- <img v-bind="objOfAttr" :src='objOfAttr.src' /> -->
      </section>
      <section></section>
    </article>
  </main>
  <footer>&copy;20222 read our legal notice</footer>
</template>

<style>

</style>
