<script setup>
import {ref} from 'vue' // ref lets us create references to values scoped to this component
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
    {id:0, n:'aileron', qty:2},
    {id:1, n:'flap', qty:4},
    {id:2, n:'empennage', qty:1}
  ]
)
const show = ref(true) // a reference to a boolean value
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
      <button @click="show=!show"  >Toggle</button>
    </section>
    <section>
      <!-- here we will iterate over the collection of product items -->
      <ul>
        <li v-for="product of products">
          Item: {{product.n}} quantity: {{product.qty}}
        </li>
      </ul>
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
