<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="toHome">홈으로!</button>
    <router-link :to="{ name:'home' }">홈으로</router-link>
    <input 
    type="text"
    v-model="HelloName"
    @keydown.enter="toHelloView">
  </div>
</template>

<script>
  export default{
    name: 'AboutView',
    methods: {
      toHome() {
        this.$router.push({ name:'home' })
      },
      toHelloView() {
        this.$router.push({ name: 'hello', params: {userName: this.HelloName } })
        this.HelloName = null
        this.$router.go(1)
      }
    },
    data (){
      return {
        HelloName: null,
      }
    }
  }
</script>