<template>
  <div>
    <h3>My Item</h3>
    <h2>{{ staticProps }}</h2>
    <p> {{ dynamicProps }} </p>
    <button @click="childToParent">클릭!!</button>
    <input 
    type="text" 
    v-model="childInputData"
    @keyup.enter="childInput">
  </div>
</template>

<script>


export default {
  name:'MyComponentItem',
  props:{
    staticProps: String,
    dynamicProps: String,
  },
  data: function() {
    return {
      childInputData: null,
    }
  },
  methods:{
    childToParent: function() {
      this.$emit('give-me-ma-money', '나는 자식이 보낸 암살자다')
    },
    childInput: function() {
      this.$emit('child-input', this.childInputData)
      this.childInputData = null
    }
  }
}
</script>

<style>

</style>