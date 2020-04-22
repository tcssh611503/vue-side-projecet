<template >
<div class="=page-test">  
    <h1>this page is for user</h1>
    <!-- 帶入參數 -->
    <h2>you are {{$route.params.name}}</h2>
    <h3>haha</h3>
    <h4 v-if="user" >You enter by id {{user}}</h4>


</div>




</template>

<script>
export default {
    data(){
        return{
            users:[
            {id:1 , name: "John"},
            {id:2 , name: "Tom"}
        ]

        }
        
    },
    computed:{
        user(){   // eslint-disable-line
            return this.users.find // eslint-disable-line
            (user=>user.id==this.$route.params.num) // eslint-disable-line
        }
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
