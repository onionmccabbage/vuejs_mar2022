<script setup>
import { ref, reactive, computed, onMounted, watchEffect, provide } from 'vue'
import ChooseCat from './components/ChooseCat.vue';
import ShowResults from './components/ShowResults.vue';
const categories = ['people', 'planets', 'vehicles', 'species', 'starships']
const currentID  = ref(1)
const choices = reactive({cat:'people', id:1})
// event handler functions
const handleResponse = (data) => {
  console.log(`received ${data.cat} ${data.id}`)
  choices.cat = data.cat
  choices.id  = data.id
}
</script>
<template>
  <article>
  <header><h1>Star Wars API (Review 3)</h1></header>
  <main>
    <hr/>
    <section>
      <ChooseCat
        @response="handleResponse"
        :categories="categories" :id="currentID" />
    </section>
    <hr/>
    <section>
      <ShowResults :category="choices.cat" :id="choices.id"/>
    </section>
  </main>
  </article>  
</template>
<style>
</style>
