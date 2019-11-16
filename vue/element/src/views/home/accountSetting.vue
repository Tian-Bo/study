<template>
  <div class="app-content">
    <accountHeader title="账号设置" :state1="2" :state2="1" />
    <main>
      <div class="body-title">账号设置</div>
      <div class="body-item">
        <label for>手机号:</label>
        <div class="body-item-right-l">18580557309</div>
        <router-link class="body-item-right-r" tag="div" to="/account-password">修改密码</router-link>
      </div>
      <div class="body-item">
        <label for>绑定微信:</label>
        <div class="body-item-right-l">未绑定</div>
        <div class="body-item-right-r">立即绑定</div>
      </div>
      <div class="body-item">
        <label for>头像:</label>
        <div class="body-item-right-l">
          <div class="body-item-headimg">
            <img src="@/assets/img/logo.png" alt>
          </div>
        </div>
        <div class="body-item-right-r">上传</div>
      </div>
      <el-button class="back-btn" @click="$router.go(-1)">返回</el-button>
    </main>

  </div>
</template>

<script>
import accountHeader from '@/components/Header/accountHeader'
export default {
  components: {
    accountHeader
  }
}
</script>

<style lang="scss" scoped>
main {
    width: 1000px;
    min-height: 700px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 50px;
    background-color: #fff;
    color: #333;
    .body-title {
        text-align: center;
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 60px;
    }
    .body-item {
        margin-left: 300px;
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        label {
            width: 100px;
        }
        .body-item-right-l {
            width: 120px;
            .body-item-headimg {
                width: 60px;
                height: 60px;
                background-color: #eee;
                border-radius: 50%;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .body-item-right-r {
            width: 120px;
            font-size: 12px;
            color: #2a75ed;
            cursor: pointer;
        }
    }
}
.back-btn {
    display: block;
    margin: 0 auto;
}
</style>
