<script setup></script>
<template>
<h2>This component illustrates Flexbox (CSS)</h2>

<article class="parent">
    <h2>This is a parent (article)</h2>
    <section class="child">
        <h3>This is a child (section)</h3>
    </section>
    <hr/>
</article>
<!-- use flex to lay things out nicely -->
<ul class="flex-container">
    <li class="flex-item">1</li>
    <li class="flex-item">2</li>
    <li class="flex-item">3</li>
    <li class="flex-item">4</li>
    <li class="flex-item">5</li>
    <li class="flex-item">6</li>
</ul>
</template>
<style>
article {background-color: bisque;}
section {background-color: cornflowerblue;}
/* we often need things central */
.parent {display:flex; width: 640px; height:240px;}
.child  {width: 200px; height: 64px; margin: auto;}
/* lay things out nicely */
.flex-container {display: flex; flex-flow: row wrap; justify-content: space-around; list-style: none; width: 280px;}
.flex-item      {
    background-color: tomato; color: antiquewhite; text-align: center;
    padding:5px; width: 64px; height: 32px; margin-top: 8px;
    }
</style>