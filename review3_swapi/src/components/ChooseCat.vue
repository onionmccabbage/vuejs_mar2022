<script setup>
import { ref } from 'vue'
const props = defineProps({
  categories: Array,
  id: Number
})
const emit = defineEmits(['response'])
// we can emit the event anytime we like
const sendData = () => {
  emit('response', { cat: currentCat.value, id: currentID.value }) // any data
}
const currentCat = ref(props.categories[0])
const currentID = ref(props.id)
</script>
<template>
  <h2>Choose a Category ({{currentCat}}) and an ID ({{currentID}})</h2>
  <aside v-for="cat in categories">
    <input type="radio" :id="cat" :value="cat" name="cat" v-model="currentCat" />
    {{ cat }}
  </aside>
  <aside>
    ID
    <input type="number" min="1" max="6" v-model="currentID" />
  </aside>
  <button @click="sendData">Go</button>
</template>
<style scoped>
</style>
