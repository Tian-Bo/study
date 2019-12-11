<template>
  <div class="layout-cont">
    <!-- header -->
    <div class="header">
      <div
        v-for="(item, index) in headerList"
        :key="index"
        class="header-item"
        :class="{ 'active': tabIndex == index }"
        @click="handleTab(index, item)"
      >{{ item.text }}</div>
    </div>

    <!-- main -->
    <ul class="main">
      <li v-for="(item, index) in activeList" :key="index" class="main-item" @click="handleRoute(item)">
        <div class="main-item-cont">
          <img :src="item.model_img">
          <span class="ellipsis">{{ item.model_desc }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getActiveModel } from '@/api/active'
export default {
  data() {
    return {
      tabIndex: 0,
      // 顶部列表
      headerList: [
        { text: '手机H5', id: 1 },
        { text: 'APP', id: 2 },
        { text: '电脑网页端', id: 3 },
        { text: '电脑桌面端', id: 4 }
      ],
      // 活动列表
      activeList: []
    }
  },
  created() {
    this.getActiveModelIno()
  },
  methods: {
    // 切换tab
    handleTab(index, item) {
      this.tabIndex = index
    },
    // 条件编辑活动
    handleRoute(item) {
      this.$router.push({ path: '/create', query: { model_id: item.model_id }})
    },
    // 获取活动模型
    getActiveModelIno() {
      getActiveModel().then(res => {
        console.log(res)
        this.activeList = res.data
      })
    }
  }
}
</script>

<style lang='scss' scoped>
// header
.header {
    height: 50px;
    background-color: #eee;
    display: flex;
    align-items: center;
    .header-item {
        height: 100%;
        width: 100px;
        text-align: center;
        padding: 0 15px;
        margin: 0 5px;
        line-height: 50px;
        cursor: pointer;
    }
    .header-item:hover {
        color: #409eff;
        border-bottom: 2px solid #409eff;
    }
    .active {
        color: #409eff;
        border-bottom: 2px solid #409eff;
    }
}

// main
.main {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .main-item {
        width: 20%;
        height: 240px;
        padding: 15px;
        .main-item-cont {
            width: 100%;
            height: 100%;
            position: relative;
            border: 1px solid #eee;
            cursor: pointer;
            ::after {
                content: "立即创建";
                position: absolute;
                opacity: 0;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                background: rgba(0, 0, 0, 0.5);
                font-size: 18px;
                color: #fff;
            }
            img {
                width: 100%;
                height: 70%;
                display: block;
            }
            span {
                width: 100%;
                padding: 0 15px;
                height: 30%;
                display: block;
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            div {
                position: absolute;
                background-color: rgba(0, 0, 0, 0.1);
                width: 100%;
                height: 100%;
                top: 0px;
                left: 0px;
                text-align: center;
                display: flex;
                align-items: center;
            }
        }
        .main-item-cont:hover {
            ::after {
                opacity: 1;
            }
        }
    }
}
</style>
