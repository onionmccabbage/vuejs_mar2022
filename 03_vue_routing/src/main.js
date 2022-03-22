import { createApp } from 'vue'
import App from './App.vue'
// we also need the router
import router from './router'

// get a handle on our app
const app = createApp(App)

// tell the app to use the router
app.use(router)

// finally, mount the app
app.mount('#app')
