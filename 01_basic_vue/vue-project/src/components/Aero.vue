<!-- NB all composed components MUST use 'setup' -->
<script setup>
import {ref, computed} from 'vue' 
// immutable props are ALWAYS an object
const props = defineProps({
    product:Object
})
// inernal data models (refs and reactives)
const thingy = ref('this is whatever I choose')
// methods
// function doStuff(){
//     thingy.value = 'changed'
// }
// computed properties (anything we can derive we don't need to persist)
const output = computed(()=>{ // this is the same as function output(){}
    return `the field contains: ${thingy.value}`
})
</script>

<template>
    <li>{{product.id}} {{ product.n }}  {{ product.qty }}</li>
    <!-- explore form fields -->
    <!-- <input :value="thingy" @change="doStuff" /><p>field contains {{thingy}}</p> -->
    <!-- v-model is TWO WAY BINDING - values go in, events come out -->
    <input v-model="thingy" /><p>{{output}}</p>
</template>

<style>
</style>