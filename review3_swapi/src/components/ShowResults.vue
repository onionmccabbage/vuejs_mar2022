<script setup>
import {ref, watchEffect, reactive, computed} from 'vue'
const props = defineProps({
    category:String,
    id:Number
})
const swapi = reactive({ data: {} })
const API_URL = `https://swapi.dev/api`
watchEffect(async () => { 
  const url = `${API_URL}/${props.category}/${props.id}`
  swapi.data = await (await fetch(url)).json() // this time we use .then().then() instead of async-await
})
// we don't need the button handler if we use watchEffect
// const sendParams = () => { // only fetch weatehr when the butto is clicked!
//   const url = `${API_URL}/${props.category}/${props.id}`
//   fetch(url)
//     .then((response) => { return response.json() })
//     .then((data) => {
//       console.log(data)
//       swapi.data = data
//     })
// }
</script>

<template>
  <h3>Results</h3>
  <!-- <pre>{{swapi.data}}</pre> -->
  <aside>
    <ul>
      <li v-for="member, key in swapi.data">{{key}} {{member}}</li>
    </ul>
  </aside>
  <!-- <button @click="sendParams">Get Data</button> -->
</template>

<style></style>