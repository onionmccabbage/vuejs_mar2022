import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:'Swapi - the Star Wars API',
    links:[],
    results:[]
  },
  getters:{
    countResults: state=>{return state.results.length}
  },
  mutations: {
    ADD_LINK:(state, link)=>{
      state.links.push(link)
    },
    // ADD_RESULT:(state, result)=>{
    // },
    REMOVE_LINK:(state, link_id)=>{
      state.links.splice(link_id,1)
    },
    ADD_TO_RESULTS:(state, result)=>{
      state.results.push(result)
    },
    REMOVE_ALL:(state)=>{
      state.links=[]
    }
  },
  actions: {
    showResultdetails:()=>{
      console.log('show results details action called')
    },
    pushResultToStore:(context, result)=>{
      context.commit('ADD_RESULT', result)
    },
    handleFormSubmit: (context, chosen)=>{
      axios.get(`https://swapi.dev/api/${chosen.category}/${chosen.catNum}`)
        .then((response)=>{
          console.log(response.data)
          context.commit('ADD_TO_RESULTS', response.data)
        })
    },
    removeLink: (context, chosen)=>{
      context.commit('REMOVE_LINK', chosen)
    },
    removeAll ({commit}){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          commit('REMOVE_ALL')
          resolve()
        }, 1500)
      })
    }
  }
})
