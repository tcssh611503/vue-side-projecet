<template>
  <div id="app" class="bg-blue-500">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
     -->
     <br>
     <h2>{{$store.state.todos}}</h2> <!-- eslint-disable-line   -->
    <br>
    <ul>  
      <li v-for=" post in $store.state.todos">{{post}}</li> <!-- eslint-disable-line   -->
    </ul>
    <!-- 用Vuex載入各種資料，同一個資料可以用在許多個地方，用mounted()載入 -->
    <button @click="setTodos(['amy','tom','peter'])"  >Update data</button>
    <br>
    <!-- <button @click="loadTodos"  >Load  data</button> -->
    <br>
      <!-- <h2>{{post.title}}</h2> eslint-disable-line   -->

     <router-link to="/test">to test</router-link>
     <br>
     <router-link to="/user/frank">user Frank</router-link>
     <br>
     <router-link to="/user/lisa">user Lisa</router-link>
     <br>
     <router-link to="/user/id/2">user 2</router-link>
<h2>wwww{{$store.state.todos}}</h2>
      <!-- <router-view></router-view> -->
     <!-- 頁面先出再入 -->
     <transition name="page" mode="out-in">
  <router-view :key="$route.path"></router-view>
</transition>
  
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { mapState , mapMutations, mapActions } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['todos'])
  },
  mounted(){
    //12345改為abc
    this.setTodos(['a','b','c'])
  },
  methods: {
    ...mapMutations(['setTodos']),
    ...mapActions(['loadTodos'])
  }
  // components: {
  //   HelloWorld
  // }
}
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
