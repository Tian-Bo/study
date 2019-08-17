<template>
  <div class="hello">
      <h1>HelloWorld</h1>
      <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

</style>
