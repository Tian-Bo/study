<template>
  <div class="app-content">
    <header>
      <i class="el-icon-message-solid" />暂无通知
    </header>
    <div class="body-data">
      <div class="body-data-item">1</div>
      <div class="body-data-item">2</div>
      <div class="body-data-item">3</div>
      <div class="body-data-item">4</div>
      <div class="body-data-item">5</div>
    </div>
    <div class="body-item">
      <p>dsadasdas</p>
      <p>dsadasdas</p>
      <p>dsadasdas</p>
      <p>dsadasdas</p>
      <p>dsadasdas</p>
      <p>dsadasdas</p>
      <p>dsadasdas</p>
      <p>dsadasdas</p>
      <p>dsadasdas</p>
      <p>dsadasdas</p>
      <p>dsadasdas</p>
      <p>dsadasdas</p>
      <p>dsadasdas</p>
      <p>dsadasdas</p>
      <p>dsadasdas</p>
    </div>
    <div class="body-preview">
      <div class="body-preview-left">
        <p>leftleftleftleftleftleft</p>
        <p>leftleftleftleftleftleft</p>
        <p>leftleftleftleftleftleft</p>
        <p>leftleftleftleftleftleft</p>
        <p>leftleftleftleftleftleft</p>
        <p>leftleftleftleftleftleft</p>
        <p>leftleftleftleftleftleft</p>
        <p>leftleftleftleftleftleft</p>
        <p>leftleftleftleftleftleft</p>
        <p>leftleftleftleftleftleft</p>
        <p>leftleftleftleftleftleft</p>
        <p>leftleftleftleftleftleft</p>
        <p>leftleftleftleftleftleft</p>
      </div>
      <div class="body-preview-right">
        <p>rightrightrightright</p>
        <p>rightrightrightright</p>
        <p>rightrightrightright</p>
        <p>rightrightrightright</p>
        <p>rightrightrightright</p>
        <p>rightrightrightright</p>
        <p>rightrightrightright</p>
        <p>rightrightrightright</p>
        <p>rightrightrightright</p>
        <p>rightrightrightright</p>
        <p>rightrightrightright</p>
        <p>rightrightrightright</p>
        <p>rightrightrightright</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.app-content {
}
header {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 15px;
    color: #333;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    i {
        margin-right: 5px;
        font-size: 18px;
        color: #bbb;
    }
}
.body-data {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .body-data-item {
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
        flex: 1;
        background-color: #fff;
        width: 160px;
        height: 120px;
        margin-right: 15px;
    }
    .body-data-item:last-of-type {
        margin-right: 0px;
    }
}
.body-item {
    background-color: #fff;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    padding: 15px;
}
.body-preview {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .body-preview-left {
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
        padding: 15px;
        background-color: #fff;
        flex: 1;
    }
    .body-preview-right {
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
        padding: 15px;
        background-color: #fff;
        width: 320px;
        margin-left: 20px;
    }
}

</style>
