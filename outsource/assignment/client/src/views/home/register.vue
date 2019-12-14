<template>
    <el-form
        :model="userInfo"
        :rules="userInfoError"
        ref="ruleForm2"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm login-container"
    >
        <h3 class="title">register</h3>
        <el-form-item prop="tel">
            <el-input type="text" v-model="userInfo.tel" auto-complete="off" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input
                type="password"
                v-model="userInfo.password"
                auto-complete="off"
                placeholder="密码"
            ></el-input>
        </el-form-item>
        <el-form-item prop="confirm">
            <el-input
                type="password"
                v-model="userInfo.confirm"
                auto-complete="off"
                placeholder="确认密码"
            ></el-input>
        </el-form-item>
        <div class="login">
            <!-- <el-checkbox v-model="checked" checked class="remember">同意阅读</el-checkbox> -->
            <datagrid class="remember"></datagrid>
            <router-link tag="span" to="/">Go to login</router-link>
        </div>
        <el-form-item style="width:100%; margin-top: 30px;">
            <el-button
                type="primary"
                style="width:100%;"
                @click="handleSubmit"
                :loading="logining"
            >register</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { checkTel, checkPassword } from "@/common/util";
import { postRegister } from "@/api/common";

export default {
    data() {
        return {
            logining: false, // logining
            userInfo: {
                tel: '',
                password: '',
                confirm: '',
            }, // 账号密码
            userInfoError: {
                tel: [
                    { required: true, message: "请输入账号", trigger: "blur" }
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" }
                ],
                confirm: [
                    { required: true, message: "两次输入密码不一致", trigger: "blur" }
                ]
            }, // 账号密码为输入提示
            checked: true // 己住密码
        };
    },
    methods: {
        // TODO 注册
        handleSubmit() {
            // TO 验证手机
            if (!checkTel(this.userInfo.tel)) {
                return this.$message({
                    message: "请输入正确的账号",
                    type: "warning"
                });
            }
            // TO 验证密码
            if (!checkPassword(this.userInfo.password)) {
                return this.$message({
                    message: "请输入包含字母和数字为6-16位的密码",
                    type: "warning"
                });
            }
            if (this.userInfo.password != this.userInfo.confirm) {
                return this.$message({
                    message: "两次输入密码不一致",
                    type: "warning"
                });
            }
            let params = {
                tel: this.userInfo.tel,
                password: this.userInfo.password
            };
            postRegister(params).then(res => {
                if (res.status === 0) {
                    return this.$message({
                        message: res.message,
                        type: "success"
                    });
                }
                this.$message({ message: res.message, type: "warning" });
            });
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
    .login {
        display: flex;
        justify-content: space-between;
        color: #409eff;
        span {
            cursor: pointer;
        }
    }
}
</style>
