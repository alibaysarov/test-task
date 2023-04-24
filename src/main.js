import { createApp } from 'vue'
import './style.sass'
import Text from './components/Text.vue'
import App from './App.vue'
import store from './vuex/store.js'
import VueColumnsResizable from 'vue-columns-resizable'
import VueDraggableNext from 'vuedraggable'
const app =createApp(App)
app.use(VueColumnsResizable)
app.component("draggable", VueDraggableNext["VueDraggableNext"]);
app.use(store)
app.mount('#app')
