<template>
  <div class="app-content">
    <div>店铺试用已到期，到期后店铺仍可访问，但店铺功能不可使用，建议尽快购买正式版本</div>
    <el-button class="tuitionOpening" size="mini">续费开通</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.app-content{
    padding-left: 15px;
    height: 42px;
    background-color: #EE4141;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    color: #fff;
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.tuitionOpening{
    margin-left: 15px;
    color: #EE4141;
}
</style>
