<template>
    <el-form
        :model="userInfo"
        :rules="userInfoError"
        ref="ruleForm2"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm login-container"
    >
        <h3 class="title">login</h3>
        <el-form-item prop="tel">
            <el-input type="text" v-model="userInfo.tel" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input
                type="password"
                v-model="userInfo.password"
                placeholder="密码"
            ></el-input>
        </el-form-item>
        <div class="register">
            <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
            <div class="remember"></div>
            <router-link tag="span" to="/register">Go to register</router-link>
        </div>
        <el-form-item style="width:100%;">
            <el-button
                type="primary"
                style="width:100%;"
                @click="handleSubmit"
                @keyup.enter="handleSubmit"
                :loading="logining"
            >login</el-button>
        </el-form-item>
        <div class="bg-img-indexBg bg-100"></div>
    </el-form>
</template>

<script>
import { postLogin } from "@/api/common"
import { checkTel, checkPassword, setSessionStorage } from "@/common/util"
export default {
    data() {
        return {
            logining: false, // logining
            userInfo: {
                tel: "",
                password: ""
            }, // 账号密码
            userInfoError: {
                tel: [
                    { required: true, message: "请输入账号", trigger: "blur" }
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" }
                ]
            }, // 账号密码为输入提示
            checked: true // 己住密码
        };
    },
    methods: {
        // 登陆
        handleSubmit() {
            if (!checkTel(this.userInfo.tel)) {
                return this.$message({
                    message: "请输入正确的账号",
                    type: "warning"
                });
            }
            if (!checkPassword(this.userInfo.password)) {
                return this.$message({
                    message: "请输入正确的密码",
                    type: "warning"
                });
            }
            let params = {
                tel: this.userInfo.tel,
                password: this.userInfo.password
            }
            postLogin(params).then(res => {
                if(res.status === 0) {
                    window.sessionStorage.setItem('token', res.data.token)
                    return this.$router.push({ path: "/shop_list" })
                }
                this.$message.error(res.message)
            })
        }
    }
};
</script>

<style lang='scss' scoped>
.login-container {
    border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }
    .remember {
        margin: 0px 0px 35px 0px;
    }
    .register{
        display: flex;
        justify-content: space-between;
        color: #409eff;
        span{
            cursor: pointer;
        }
    }
}
</style>
