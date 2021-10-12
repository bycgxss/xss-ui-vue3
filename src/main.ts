import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Xss from './components/Xss.vue'
import Xss2 from './components/Xss2.vue'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Xss },
    { path: '/xxx', component: Xss2 },
  ]
})


const app = createApp(App)
app.use(router)
app.mount('#app')
