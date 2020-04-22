<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
     -->
    

     <router-link to="/test">to test</router-link>
     <br>
     <router-link to="/user/frank">user Frank</router-link>
     <br>
     <router-link to="/user/lisa">user Lisa</router-link>
     <br>
     <router-link to="/user/id/2">user 2</router-link>

      <!-- <router-view></router-view> -->
     <!-- 頁面先出再入 -->
     <transition name="page" mode="out-in">
  <router-view :key="$route.path"></router-view>
</transition>
  
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.page-enter-active , .page-leave-active{

  transition: 0.5s;

}

.page-enter, .page-leave-to{
  opacity: 0;
}



</style>
