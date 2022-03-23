<script setup></script>
<template>
    <ul class="navigation">
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a href='#'>Products</a></li>
    </ul>
</template>
<style>
/* make 'tabs' using CSS flexbox */
.navigation {
    display:flex; 
    flex-flow:row wrap;
    justify-content: flex-start; 
    list-style: none;
    margin: 0;
    background-color: deepskyblue;
}
.navigation a {
    text-decoration: none;
    display: block;
    padding: 1em;
    color: aliceblue;
}
.navigation a:hover {
    background-color: blue;
}
</style>