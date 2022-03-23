<template>
    <div>
        <h3>Monitor</h3>
        <p>There are {{countResults}} results </p>
        <!-- NB note @click -->
        <!-- <button 
        @click='removeAllLinks'>Remove All</button>
        <p>{{msg}}</p> -->
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default{
    name:'Stats',
    data(){
        return {msg:''}
    },
    methods:{
        ...mapMutations(['REMOVE_ALL']),
        ...mapActions(['removeAll']),
        removeAllLinks(){
            this.removeAll().then( ()=>{
                this.msg = 'All link removed'
            } )
        }
    },
    computed:{
        ...mapGetters(['countResults'])
    }
}
</script>


<style scoped>

</style>