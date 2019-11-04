<template>
  <div class="app-content">
    <headerNotice />
    <main>
      <div class="main-left">
        <mainLeft />
      </div>
      <div class="main-right">
        <mainRight />
      </div>
    </main>
  </div>
</template>

<script>
import headerNotice from '@/components/notice/HeaderNotice.vue'
import mainLeft from './components/mainLeft.vue'
import mainRight from './components/mainRight.vue'
export default {
  components: {
    headerNotice,
    mainLeft,
    mainRight
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
main{
    display: flex;
    justify-content: space-between;
}
.main-left{
    margin-right: 20px;
    flex: 1;
}

</style>
