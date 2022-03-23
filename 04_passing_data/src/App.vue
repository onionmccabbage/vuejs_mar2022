<script setup>
import { ref, computed, onMounted, watchEffect, provide } from 'vue'
import MyComp from './components/MyComp.vue';
import UsingFlex from './components/UsingFlex.vue';
import NavComp from './components/NavComp.vue';
// we can declare properties for this component
defineProps({ // define props ALWAYS takes an object (to declare our props)
  // flag:true,
  info: String, default: 'hello',
  objOfAttr: Object, default: { // an object
    src: 'https://placekitten.com/128/64',
    title: 'an image',
    alt: 'an image'
  }
})
// some local data scoped to this component
const categories = ['posts', 'albums', 'todos', 'photos']
const currentCat = ref(categories[0])
// event handler functions
const handleResponse = (data) => {
  console.log(`received ${data}`)
  currentCat.value = data
}
// inject a provided message into the OtherComp (wherever it may be)
const message = ref('content injected from the main app')
const obj = {
  src: 'https://placekitten.com/128/64',
  title: 'an image',
  alt: 'an image'
}
provide('message', message) // or message.value
provide('stuff', obj)

</script>
<template>
  <UsingFlex />
  <header>
    <h2>Passing Data Around</h2>
  </header>
  <nav>
    <NavComp />
  </nav>
  <main >
    <article>
      <ol>
        <li>tag styles</li>
        <li>class styles</li>
        <li>id styles</li>
      </ol>
      <!-- listen for custom event -->
      <MyComp @response="handleResponse" :categories="categories" />
      <section id="comp">
        <!-- we can bind to props -->
        <h4>{{ info }} current category is {{ currentCat }}</h4>
      </section>
      <section>
        <p class="highlight">Here is another section of content</p>
      </section>
    </article>
  </main>
  <footer class="highlight">&copy;20222 read our legal notice</footer>
</template>

<style>
/* tag styles - automaticaly aplied to the relevant tags */
p {color: darkred;}
h1, h2, h3 {color:olive;}
/* class styles - must be manually applied (anywhere)*/
.highlight {background-color: gold;}
/* id style - must be manually applied ONCE */
#comp {color:blueviolet; background-color: blanchedalmond;}
/* we can combine these together */
/* every li that is a child of ol inside an article */
article ol>li {color: chocolate;}
</style>
