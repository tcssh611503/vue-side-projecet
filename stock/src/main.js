import Vue from 'vue'
import App from './App.vue'
import router from './router';
//import store 
import store from './store'


Vue.config.productionTip = false
//有成功
store.commit("setTodos",[1,2,3,4,5])
store.dispatch("loadTodos")

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  router,
  store,
 
  render: h => h(App)
}).$mount('#app')


