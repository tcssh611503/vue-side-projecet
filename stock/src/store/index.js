import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'


Vue.use(Vuex)
//這個狀態的todos會=value
// let store = new Vuex.Store({
// state:{
// todos:[]

// },
// mutations: {
// setTodos(state,value){

// state.todos=value
// }

// },
// actions: {
// loadTodos(context){
// axios.get("https://jsonplaceholder.typicode.com/todos").then
// (res=>{
// context.commit("setTodos",res.data)
// })

// }

// }

// })
// //加了這行才有使用
// export default store



export default new Vuex.Store({
    state: {
        todos: [1,2,3]
    },
    mutations: {
        setTodos(state, value) {

            state.todos = value
        }
    },
    actions: {

        loadTodos(context) {// eslint-disable-line
            axios.get("https://jsonplaceholder.typicode.com/comments").then
            {
                (res => {                    
                    context.commit("setTodos", res.data)
                })
            }
        }
       

    },
    modules: {// eslint-disable-line
    },// eslint-disable-line
})