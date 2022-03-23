// by convention the routing declaration is called index.js
// we need to import the stuff for routing
import {createRouter, createWebHistory} from 'vue-router'

// we need to import any views used in the router
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
// don't import any views that will be lazy-loaded
// import Products from '@/views/Products.vue'

// router takes a configuration object declaring an array of routes (and a history manager)
const router = createRouter( {
    // history lets the browser history API do it's stuff
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        // declare all routes that match routerLink 'to' values
        // NB these routes are ALL loaded into the browser and will use resouces (even if not visible)
        {path:'/', name:'home', component:Home},
        {path:'/about', name:'about', component:About},
        // we can 'lazy-load' routes (use for resource-hungry 'heavy' components) - load on demand
        {path:'/products', name:'products',props:true, component:()=>{return import('../views/Products.vue')}},
        {path:'/products/:content', name:'products',props:true , component:()=>{return import('../views/Products.vue')}}
    ]
} )
// expose the router so other modules can import it
export default router