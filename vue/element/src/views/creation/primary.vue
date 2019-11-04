<template>
  <div class="container main-box">
    <div class="header">
      <div v-for="item in headerList" :key="item" class="header-item">{{ item.text }}</div>
    </div>
    <ul class="main">
      <li v-for="item in mainList" :key="item" class="main-item">
        <div class="main-item-cont">
          <img :src="item.img">
          <span class="ellipsis">{{ item.text }}</span>
          <div v-if="item.status==0">
            <span>正在开发中...</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerList: [
        { text: '组队拼团', id: 1 },
        { text: '拓客红包', id: 2 },
        { text: '商家门店', id: 3 }
      ],
      mainList: [
        {
          img: '@/assets/img/indexBg.jpg',
          text: '组队拼团组队拼团组队拼团组队拼团组队拼团组队拼团组队拼团组队拼团组队拼团组队拼团组队拼团组队拼团组队拼团',
          status: 1,
          id: 1
        },
        {
          img: '@/assets/img/indexBg.jpg',
          text: '拓客红包',
          status: 0,
          id: 2
        },
        {
          img: '@/assets/img/indexBg.jpg',
          text: '商家门店',
          status: 1,
          id: 3
        },
        {
          img: '@/assets/img/indexBg.jpg',
          text: '组队拼团',
          status: 1,
          id: 1
        },
        {
          img: '@/assets/img/indexBg.jpg',
          text: '拓客红包',
          status: 0,
          id: 2
        },
        {
          img: '@/assets/img/indexBg.jpg',
          text: '商家门店',
          status: 1,
          id: 3
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.container {
    padding: 0;
}
.header {
    height: 60px;
    background-color: #eee;
    display: flex;
    align-items: center;
    .header-item {
        margin: 0 15px;
        cursor: pointer;
    }
    .header-item:hover {
        color: #409eff;
    }
}
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
    }
}
</style>
