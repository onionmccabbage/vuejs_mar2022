<script setup>
import {inject} from 'vue'

const message = inject('message')
const obj     = inject('stuff')
</script>
<template>
<h3>Other Component</h3>
<p>{{message}}</p>
<p>{{obj.title}}</p>
<!-- we can iterate over an object -->
<ol>
    <li v-for="member in obj">{{member}}</li>
</ol>
<!-- we can unpack the members of an object to provide attributes to an html tag -->
<img v-bind="obj" />
</template>
<style></style>