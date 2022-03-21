<script setup>
import {ref, reactive} from 'vue'
import Aero from './Aero.vue'; // ref lets us create references to values scoped to this component
defineProps({ // props are immutable
  msg: { // these are ES objects {name:value}
    type: String,
    required: true,
    default:'default message'
  },
  other: {
    type:String,
    default:'this is the default title property'
  },
  imglocation:{
    type:String,
    default:"https://placekitten.com/128/64"
  }
})
// we may also have values scoped to inside this component (not available outside this component)
const now = ref(new Date())
const products = ref( // ref can take ANY data type
  [
    {id:0, n:'aileron', qty:2}, // always provide an ID for v-for keys
    {id:1, n:'flap', qty:4},
    {id:2, n:'empennage', qty:1}
  ]
)
const show = ref(true) // a reference to a boolean value
// some reactive values nb reactive MUST be a collection (e.g. an object, an array or a class)
const state    = reactive({count:0})
const obj      = reactive({
  nested:{count:0},
  arr   :['alpha', 'beta']
})
// ref can be ANY data type
const refCount = ref(0) // NB all refs will expose a .value for us to use
// here are some methods for this component
function increment(){
  state.count++
  refCount.value++ // NB ref ALWAYS refers to a 'value' in script
}
function mutateDeeply(){
  // mutate deep members of the reactive object called 'obj'
  obj.nested.count++
  obj.arr.push('gamma')
}
</script>
<template>
  <article>
    <aside>
      <h2>{{msg}}</h2>
      <h3>{{other}}</h3>
      <h4>Today is {{now}}</h4>
    </aside>
    <section>
      <!-- : is short syntax for v-bind: -->
      <img v-if="show" :src='imglocation' title="a kitten" />
      <br/>
      <!-- toggle show between true and false using a click event handler -->
      <!-- @ is shorthand for v-on: NB in html we DO NOT say .value for refs-->
      <button @click="show=!show"  >Toggle</button>
    </section>
    <section>
      <!-- here we will iterate over the collection of product items -->
      <ul>
        <!-- v-for of is for arrays and in is for objects -->
        <!-- <li v-for="product of products">
          Item: {{product.n}} quantity: {{product.qty}}
        </li> -->
        <!-- we can use our Aero component to iterate over -->
        <!-- NB for does NOT unpack the members of the iterable -->
        <Aero v-for="item in products" :product='item' :key='item.id'/>
      </ul>
    </section>
    <section>
      <!-- // buttons using ref and reactive model values -->
      <button @click="increment" ref="btn">{{state.count}} and {{refCount}}</button>
      <!-- the .once makes the button respond only once -->
      <button @click.once="mutateDeeply">{{obj.nested.count}}</button>
      <br/>
      <ol>
        <li v-for="item in obj.arr" >{{item}}</li>
      </ol>
    </section>
  </article>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
