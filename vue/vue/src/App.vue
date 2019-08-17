<template>
  <div id="app">
    <h1 v-for="item in blog" :key="item.id">{{ item.id }}</h1>
    <b>{{ msg }}</b>
  </div>
</template>

<script>
  import axios from './http'
  export default {
    data() {
      return {
        blog: '',
        msg: ''
      }
    },
    components: {

    },
    created() {
      axios.get('/users').then(res => {
       this.blog = res.data
       this.msg = res.status

      })
    }
    
  }
</script>

<style lang="scss">

</style>
