import { createApp, h } from 'vue'
import App from './App.vue'
import store from './store/index'

import "tailwindcss/tailwind.css"

const app  = createApp({
    render: ()=>h(App)
});

app.mount('#app')
app.use(store)