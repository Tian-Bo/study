<template>
  <div class="layout-cont">
    <Sidebar />
    <Topbar />
    <Page />
    <Rule />
    <Poster />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Page from './page/index'
import Rule from './rule/index'
import Poster from './poster/index'
export default {
  components: {
    Sidebar,
    Topbar,
    Page,
    Rule,
    Poster
  },
  data() {
    return {
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>

</style>
