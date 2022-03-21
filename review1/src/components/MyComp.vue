<script setup>
import { ref, reactive, computed } from 'vue'
import MyFooter from './MyFooter.vue';
const user = reactive({ id: 0, username: 'Ada', city: 'London', country: 'uk', age: 42 })
const arrUsers = reactive([])
const countries = reactive([
    { id: 0, text: 'United Kingdom', value: 'uk' },
    { id: 1, text: 'France', value: 'fr' },
    { id: 2, text: 'Germany', value: 'de' },
    { id: 3, text: 'Ireland', value: 'ie' },
    { id: 4, text: 'Italy', value: 'it' },
    { id: 5, text: 'Australia', value: 'aus' }
])
const imgUrl = computed(() => { return `https://graph.facebook.com/${user.username}/picture?type=normal` })
const handleClick = () => {
    let num = arrUsers.length
    let newUser = { id: num, username: user.username, city: user.city, country: user.country, age: user.age } // this.user.slice()
    arrUsers.push(newUser)
}
const doRemove = (whichUser) => {
    arrUsers.splice(arrUsers.indexOf(whichUser), 1)
}
</script>
<template>
    <article>
        <h2>Review Exercise 1</h2>
        <h2>Please enter some data (works in Chrome)</h2>
        <section>
            <!-- .lazy will only bind after change, not on every input event -->
            <!-- <input v-model.lazy='user.username' placeholder='username'/><br>         -->
            <input v-model="user.username" placeholder="username" />
            <br />
            <input v-model="user.age" type="number" min="0" max="120" step="1" placeholder="age" />
            <br />
            <hr />
            <input v-model="user.city" placeholder="city" />
            <br />
            <select v-model="user.country">
                <option disabled value>Country</option>
                <option
                    v-for="option in countries"
                    :value="option.value"
                    :key="option.key">{{ option.text }}</option>
            </select>
            <br />
            <button
                :disabled="user.city === '' || user.country === ''"
                @click="handleClick">Go</button>
            <hr />
            <img :src="imgUrl" :title='user.username' :alt='user.username'/>
            <hr />
            <ul>
                <li v-for="user in arrUsers">
                    <button @click="doRemove(user)">x</button>
                    {{ user.city }} {{ user.country }}
                </li>
            </ul>
        </section>
    </article>
    <MyFooter />
</template>