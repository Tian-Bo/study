<template>
  <div class="app-content">
    <div class="body-item">
      <div class="body-item-li">
        <div class="body-item-left">
          <img src="@/assets/img/indexBg.jpg" alt>
        </div>
        <div class="body-item-right">
          <h3>关注小鹅通公众号</h3>
          <p>掌握一手产品动态</p>
        </div>
      </div>
      <div class="body-item-li">
        <div class="body-item-left">
          <img src="@/assets/img/indexBg.jpg" alt>
        </div>
        <div class="body-item-right">
          <h3>关注小鹅通公众号</h3>
          <p>掌握一手产品动态</p>
        </div>
      </div>
    </div>

    <div class="body-item">
      <div class="body-item-li">
        <div class="body-item-left">
          <img src="@/assets/img/indexBg.jpg" alt>
        </div>
        <div class="body-item-right">
          <h3>关注小鹅通公众号</h3>
          <p>掌握一手产品动态</p>
        </div>
      </div>
      <div class="body-item-li">
        <div class="body-item-left">
          <img src="@/assets/img/indexBg.jpg" alt>
        </div>
        <div class="body-item-right">
          <h3>关注小鹅通公众号</h3>
          <p>掌握一手产品动态</p>
        </div>
      </div>
    </div>

    <div class="body-item">
      <div class="body-item-li">
        <div class="body-item-left">
          <img src="@/assets/img/indexBg.jpg" alt>
        </div>
        <div class="body-item-right">
          <h3>关注小鹅通公众号</h3>
          <p>掌握一手产品动态</p>
        </div>
      </div>
      <div class="body-item-li">
        <div class="body-item-left">
          <img src="@/assets/img/indexBg.jpg" alt>
        </div>
        <div class="body-item-right">
          <h3>关注小鹅通公众号</h3>
          <p>掌握一手产品动态</p>
        </div>
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
    width: 240px;
}
.body-item {
    background-color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    padding: 15px;
    margin-bottom: 20px;
    .body-item-li {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
        padding-bottom: 15px;
        margin-bottom: 15px;
        .body-item-left {
            width: 48px;
            height: 48px;
            overflow: hidden;
            margin-right: 10px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .body-item-right {
            h3 {
                margin-bottom: 10px;
            }
            p {
                font-size: 12px;
                color: #999999;
            }
        }
    }
    .body-item-li:last-of-type {
        border-bottom: none;
        padding-bottom: 0px;
        margin-bottom: 0px;
    }
}
</style>
