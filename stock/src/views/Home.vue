<template>
  <div class="home">
    <h3>發會員信{{$store.state.todos}}</h3>
    <h3 :class="chk">您的登入狀態為:{{$store.state.auth}}</h3>
    <h3>您的狀態為:{{$store.state.authStyle}}</h3>
    <button class="btn-confirm" @click="forget">登 入</button>
  </div>
  
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'home',
    components: {
      // HelloWorld
    },
    mounted() {
      this.setTodos(['a9', 'b', 'c'])

    },
    computed: {

      chk: {
        get: function () {

          if (this.$store.state.authStyle == true) {
            return 'search-title';
          } else {

            return 'search-title2';
          }
        }

      },

      ...mapState(['todos'])

    },
    methods: {
      ...mapMutations(['setTodos']),
      forget() {

        if (this.$store.state.authStyle == false) {
          let payload = { 'authStyle': true };
          this.$store.dispatch("setStyle", payload);

        } else {

          let payload = { 'authStyle': false };
          this.$store.dispatch("setStyle", payload);


        }

      }
    }

  }
</script>

<style scoped>
  .search-title {
    font-size: 200px;
  }

  .search-title2 {
    font-size: 15px;
  }
</style>