<template>
  <div class="app-content">
    <accountHeader title="修改密码" :state1="2" :state2="1" />
    <main class="account-password-label">
      <div class="title">重置密码</div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="手机号">
          <span>18580557309</span>
        </el-form-item>
        <el-form-item label="验证码">
          <div class="el-form-code">
            <el-input v-model="form.name" placeholder="请输入验证码" />
            <el-button type="primary">获取验证码</el-button>
          </div>
        </el-form-item>
        <el-form-item label="设置密码">
          <el-input v-model="form.name" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="form.name" placeholder="请在次输入密码" />
        </el-form-item>
        <el-button class="el-button-sub" type="primary" @click="onSubmit">保存</el-button>
        <el-button class="el-button-can" type="primary" @click="$router.go(-1)">取消</el-button>
      </el-form>
    </main>
  </div>
</template>

<script>
import accountHeader from '@/layouts/accountHeader'
export default {
  components: {
    accountHeader
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss" scoped>
main {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 420px;
    padding: 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    .title {
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 30px;
    }
    .el-form-code {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .el-button {
            margin-left: 10px;
        }
    }
    .el-button-btn {
        width: 100%;
        margin: 5px 0;
    }
    .el-button-sub {
        width: 100%;
        margin: 5px 0;
        opacity: 0.8;
    }
    .el-button-can {
        width: 100%;
        margin: 5px 0;
        background-color: #f5f7fa;
        border: 1px solid #e5e7ea;
        color: #333;
    }
}
</style>
