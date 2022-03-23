<template>
  <div class="hello">
    <div>
      <h2>{{title}}</h2>
      <!-- <form @submit.prevent='makeSwapiCall'> -->
        <form @submit.prevent='handleFormSubmit(chosen)'>
        <select v-model="chosen.category">
          <option disabled value="0">Category</option>
          <option v-for="(option, index) in categories" v-bind:key='index' v-bind:value="option.value">
              {{ option.text }}
          </option>
        </select><br>
        <input placeholder='which number' 
          type='number' min='0' max='5' v-model='chosen.catNum' />
        <button 
            v-bind:disabled="chosen.catNum===0 || chosen.category===''"
        >Go</button>
        
      </form>
      <ul>
        <li 
          v-for='(result, index) in results' 
          v-bind:key='index' ><a @click.prevent='showDetails(result)' href='#'>{{result.name}}</a>
          <!-- <button v-on:click='removeThisLink(index)'>X</button> -->
        </li>
      </ul>
      <aside v-show='detailsVisible'>
        <p>Name: {{which.name}}</p>
        <ul>
          <li v-if='which.eye_color'>Eyes: {{which.eye_color}}</li>
          <li v-if='which.population'>Population: {{which.population}}</li>
          <li v-if='which.manufacturer'>Manufacturer: {{which.manufacturer}}</li>
          <li v-if='which.average_height'>Av. Height: {{which.average_height}}</li>
          <li v-if='which.designation'>Designation: {{which.designation}}</li>
        </ul>
      </aside>
      <stats></stats>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {mapState, mapMutations, mapActions} from 'vuex'
import Stats from './Stats'

export default {
  name: 'HelloWorld',
  data(){
    return {
            which:{},
            result:{},
            detailsVisible:false,
            chosen:{catNum:1, category:'people'},
            categories:[
            { text: 'People', value: 'people' },
            { text: 'Planets', value: 'planets' },
            { text: 'Vehicles', value: 'vehicles' },
            { text: 'Species', value: 'species' },
            { text: 'Starships', value: 'starships' }
          ]
            }
            },
  components:{Stats},
  computed : {...mapState([
    'title', 'links', 'results'
    ])},
  methods:{
    showDetails(result){
      console.log('toggling details')
      this.which = result
      this.detailsVisible = !this.detailsVisible
    },
    ...mapMutations(
      ['ADD_LINK'],
      ['ADD_RESULT'],
    ),
    ...mapActions(
      ['handleFormSubmit'],
      ['makeSwapiRequest'],
      ['removeLink'],
      ['showResultdetails']
    ),
    removeThisLink(link){
      this.removeLink(link)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
