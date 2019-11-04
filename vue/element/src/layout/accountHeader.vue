<template>
  <div class="app-content box-shadow-5">
    <div class="body">
      <div class="body-item">
        <div class="body-item-logo">
          <img src="../assets/img/logo.png" alt>
        </div>
        <span class="body-item-title">{{ title }}</span>
      </div>
      <div class="body-item">
        <span class="body-item-tel">+86 18580557309</span>

        <router-link v-if="state1==1" class="body-item-link" tag="a" to="" @click.native="closeLogin">退出</router-link>
        <router-link v-if="state1==2" class="body-item-link" tag="a" to="/account_home">账号主页</router-link>
        <router-link v-if="state1==3" class="body-item-link" tag="a" to>返回</router-link>
        <router-link v-if="state1==4" class="body-item-link" tag="a" to>备份</router-link>
        <router-link v-if="state1==5" class="body-item-link" tag="a" to>备份</router-link>

        <router-link v-if="state2==1" class="body-item-link" tag="a" to>退出</router-link>
        <router-link v-if="state2==2" class="body-item-link" tag="a" to>账户主页</router-link>
        <router-link v-if="state2==3" class="body-item-link" tag="a" to>返回</router-link>
        <router-link v-if="state2==4" class="body-item-link" tag="a" to>备份</router-link>
        <router-link v-if="state2==5" class="body-item-link" tag="a" to>备份</router-link>

        <router-link v-if="state3==1" class="body-item-link" tag="a" to>退出</router-link>
        <router-link v-if="state3==2" class="body-item-link" tag="a" to>账户主页</router-link>
        <router-link v-if="state3==3" class="body-item-link" tag="a" to>返回</router-link>
        <router-link v-if="state3==4" class="body-item-link" tag="a" to>备份</router-link>
        <router-link v-if="state3==5" class="body-item-link" tag="a" to>备份</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 标题
    title: {
      type: String,
      default: '标题'
    },
    // 显示字段
    state1: {
      type: Number,
      default: 1
    },
    // 显示字段
    state2: {
      type: Number,
      default: 0
    },
    state3: {
      type: Number,
      default: 0
    }
  },
  methods: {
    // 退出登陆
    closeLogin() {
      window.sessionStorage.removeItem('token')
      this.$router.push({ path: '/login' })
    }
    // 账户主页
  }
}
</script>

<style lang="scss" scoped>
.app-content {
    height: 60px;
    background-color: #fff;
    .body {
        width: 1000px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .body-item {
            display: flex;
            align-items: center;
            .body-item-logo {
                width: 90px;
                height: 27px;
                margin-right: 10px;
                padding-right: 10px;
                border-right: 1px solid #eee;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .body-item-title {
            }
        }
        .body-item-tel {
            margin-right: 15px;
        }
        .body-item-link {
            margin: 0 10px;
        }
    }
}
</style>
