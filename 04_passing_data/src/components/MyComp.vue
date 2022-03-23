<script setup>
import {ref} from 'vue'
import OtherComp from './OtherComp.vue';
// declare props (including incoming props)
const props = defineProps({
    categories:Array,
    // required:true,
    default:['posts']
})
// declare an array of custom events we may choose to emit
const emit = defineEmits(['response']) // any name is ok

// we can emit the event anytime we like
const catChange = ()=>{
    emit('response', currentCat.value) // any data
}

const currentCat = ref(props.categories[0])
</script>
<template>
<h3>My Component</h3>
<p>Current categories are {{categories}}</p>
<aside v-for="cat in categories">
<input type="radio" @change="catChange"
    :id="cat"
    :value="cat"
    name="cat"
    v-model="currentCat" /> {{cat}}
</aside>
<OtherComp />
</template>
<style></style>