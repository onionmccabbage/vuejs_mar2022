<script setup>import { stringifyQuery } from 'vue-router';
defineProps({
    // city:String,
    // country:String,
    // description:String,
    // temperature:String
    report:Object
})
</script>
<template>
    <h3>Weather Report Component</h3>
    <!-- 'report' is an Object so we can iterate over it with 'of' -->
    <!-- <pre>{{report}}</pre> -->
    <dl v-for="value, key in report">
        <!-- <pre>{{key}}</pre> -->
        <dt>{{key}}</dt>
        <dd>{{value}}</dd>
    </dl>
</template>

<style></style>