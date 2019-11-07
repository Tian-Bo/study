<template>
  <div class="app-content">
    <div class="header" style="background-image:none">
      <div class="nav" style="width:100%">
        <router-link to="/" class="logo11" />
        <ul class="menu">
          <div v-for="(item, index) in list" :key="index">
            <li v-if="index==0">
              <router-link :to="item.route" target="_self" style="position:relative">
                {{ item.text }}
                <img src="@/assets/img/01.png" class="sY_img">
              </router-link>
            </li>
            <li v-else-if="index==5" style="border:none; border-radius: 0px 5px 5px 0px;">
              <router-link :to="item.route" target="_self">{{ item.text }}</router-link>
            </li>
            <li v-else>
              <router-link :to="item.route" target="_self">{{ item.text }}</router-link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          text: '首页',
          route: ''
        },
        {
          text: '游戏吧',
          route: ''
        },
        {
          text: '微商城',
          route: ''
        },
        {
          text: '公众号',
          route: ''
        },
        {
          text: '关于我们',
          route: ''
        },
        {
          text: '吐泡泡',
          route: '/login'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 94px;
    background: rgba(0, 0, 0, 0.3);
    z-index: 100;
    background-image: url("../../assets/img/01.png");
}

.header .nav {
    width: 1240px;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
}

.header .logo {
    float: left;
    display: block;
    height: 100%;
    width: 415px;
    background-repeat: no-repeat;
    background-image: url("../../assets/img/01.png");
    background-position: left center;
}

.header ul {
    float: left;
    margin-left: 29px;
}

.header li {
    float: left;
    width: 100px;
    height: 95px;
    line-height: 95px;
    margin: 0 1px;
    text-align: center;
}

.header li a {
    color: #fff;
    font-size: 18px;
    display: block;
}

.header .active a {
    color: #ffc12d;
}

.header .link {
    float: right;
    margin-top: 33px;
    padding: 5px 10px;
    background-color: #ffc12d;
    border-radius: 4px;
    color: #fff;
}

.header.show {
    background-color: #fff;
    background-image: none;
}

.header.bd-bottom {
    border-bottom: 1px solid #ccc;
}

.menu li:hover {
    background: rgb(255, 173, 10);
    color: #fff;
}

.menu li:hover a {
    color: #fff;
}

.nav a {
    text-decoration: none;
}
.menu a {
    text-decoration: none;
}
.header .nav {
    overflow: inherit;
}
.header .logo11 {
    float: left;
    display: block;
    height: 120%;
    width: 415px;
    transform: scale(1.3);
    background-repeat: no-repeat;
    background-image: url("../../assets/img/logo.png");
    position: relative;
    top: -10px;
    left: 200px;
    background-position: left center;
}
.header .user-center {
    padding: 3.5px 10px;
}

.header ul {
    width: 816px;
    height: 45px;
    position: fixed;
    right: 107px;
    top: 10px;
    background: #ffffff;
    border-radius: 5px;
}
.header ul li {
    width: 136px !important;
    text-align: center;
    line-height: 45px !important;
    height: 45px !important;
    margin: 0px;
    border-right: 1px solid #d6d6d6;
}
.header ul li a {
    color: #646464;
}
.sY_img {
    position: absolute;
    top: -27px;
    right: -15px;
    max-width: 120%;
}
</style>
