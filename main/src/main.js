// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { a } from 'common'
import Wujie from 'wujie-vue3' 

const {preloadApp} = Wujie

preloadApp({name: 'vue3', url: 'http://localhost:5175/', exec: true})
preloadApp({name: 'react', url: 'http://localhost:5174/', exec: true})


createApp(App).mount('#app')

