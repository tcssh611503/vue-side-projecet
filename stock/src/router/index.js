import Vue from 'vue'
import VueRouter from 'vue-router'
// 以上是官方元件

import HomeVue from '../components/HelloWorld.vue'
import Home from '../views/Home.vue'
//自訂分頁元件

//https://dotblogs.com.tw/H20/2019/07/03/172640

Vue.use(VueRouter)
//啟用

const routes = [
  {
    path: '/',   //對應虛擬路徑
    name: 'home', //元件呈現的名稱
    component: Home  //對應的元件，本文件上面自訂的分頁元件名稱
  },
  {
    path: '/homevue',
    name: 'homevue',
    component: HomeVue
  },
  {
    path: '/member',  
    name: 'member',  
    component: () => import(/* webpackChunkName: "member" */ '../views/member.vue')  
  },


 



 


 
]

// // 本文件需要匯出給Entry:main.js使用
// export default new VueRouter({
//     // 開始定義路徑，後面接物件陣列
//     routes: [{
//         name: '首頁', // 元件接下來會呈現的名稱
//         path: '/', // 對應的虛擬路徑
//         component: Home // 對應的元件，本文件上面自訂的分頁元件名稱
//     }, ],
// });




const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
  routes
})

export default router
