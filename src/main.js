import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueResource)

Vue.use(ElementUI)

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
