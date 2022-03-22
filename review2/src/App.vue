<script setup>
import { ref, reactive, watchEffect, computed } from 'vue'
import Report from './components/Report.vue'
const user = reactive({ city: 'Brighton', country: 'uk' })
const countries = reactive([
  { id: 0, text: 'United Kingdom', value: 'uk' },
  { id: 1, text: 'France', value: 'fr' },
  { id: 2, text: 'Germany', value: 'de' },
  { id: 3, text: 'Ireland', value: 'ie' },
  { id: 4, text: 'Italy', value: 'it' },
  { id: 5, text: 'Australia', value: 'aus' }
])
const weather = reactive({ data: {} })
const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=`
const APIID   = `&APPID=48f2d5e18b0d2bc50519b58cce6409f1`
const celcius = computed(()=>{
  return Math.round(weather.data.main.temp - 273)
})
watchEffect(async () => {
  const url = `${API_URL}${user.city},${user.country}${APIID}`
  weather.data = await (await fetch(url)).json() // this time we use .then().then() instead of async-await
})
// we don't need the button handler if we use watchEffect
const sendParams = () => { // only fetch weatehr when the butto is clicked!
  const url = `${API_URL}${user.city},${user.country}${APIID}`
  console.log(url)
  fetch(url) // this time we use .then().then() instead of async-await
    .then((response) => { return response.json() })
    .then((data) => {
      console.log(data)
      weather.data = data
    })
}
</script>
<template>
  <article>
    <h2>Weather Service</h2>
    <!-- <pre>{{weather}}</pre> -->
    <!-- <Report :report="weather.data" /> -->
    <hr />
    <section>
      <input v-model.lazy="user.city" placeholder="city" />
      <br />
      <select v-model="user.country">
        <option disabled value>Country</option>
        <option v-for="option in countries" v-bind:value="option.value">{{ option.text }}</option>
      </select>
      <br />
      <button v-bind:disabled="user.city === '' || user.country === ''" v-on:click="sendParams">Go</button>
    </section>
    <hr />
    <aside v-if="weather.data.name">
      The weather in {{ weather.data.name }} is {{ weather.data.weather[0].description }} and {{weather.data.main.temp}}K ({{celcius}}&deg;)
    </aside>
    <hr />
    <!-- this nect bit would be ideal as a separate component -->
    <aside>
      <h2>Detailed Weather Report for {{ user.city }}, {{ user.country }}</h2>
      <h3>Description: {{ weather.data.weather[0].description }}</h3>
      <h3>Temperature: {{ Math.round(weather.data.main.temp - 273) }}&deg;</h3>
      <h4>(min {{ weather.data.main.temp_min }}K max {{ weather.data.main.temp_max }}K)</h4>
      <h3>Pressure: {{ weather.data.main.pressure }}</h3>
      <h3>Humidity: {{ weather.data.main.humidity }}</h3>
      <h3>Wind Speed: {{ weather.data.wind.speed }}</h3>
      <h3>Wind Direction: {{ weather.data.wind.deg }}&deg;</h3>
    </aside>
  </article>
</template>
<style>
</style>
