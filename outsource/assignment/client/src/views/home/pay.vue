
<template>
    <div id="app">
        <header>支付</header>
        <main class="body">
            <div class="body-item">
                <label for>姓名</label>
                <input type="text" placeholder="请输入姓名" v-model="name" />
            </div>
            <div class="body-item">
                <label for>卡号</label>
                <input type="text" placeholder="请输入卡号" v-model="card" />
            </div>
            <div class="btn" @click="submit">确认支付</div>
        </main>
    </div>
</template>

<script>
import { postLogin } from "@/api/common";
import { checkTel, checkPassword, setSessionStorage } from "@/common/util";
export default {
    data() {
        return {
            name: "", //账号
            card: "" //密码
        };
    },
    methods: {
        // submit
        submit() {
            if (this.name == "") {
                return alert("姓名不能为空");
            }
            if (this.card == "") {
                return alert("卡号不能为空");
            }
            alert("提交成功");
        }
    }
};
</script>

<style lang='scss' scoped>
#app {
    padding: 30px;
    width: 300px;
    border: 1px solid #ccc;
    margin: 100px auto;
}

header {
    font-size: 16px;
    text-align: center;
    margin: 15px;
    background-color: #eee;
    height: 30px;
    line-height: 30px;
    font-weight: bold;
}

.body-item {
    margin: 30px 0;
    height: 25px;
}

.body-item label {
    display: inline-block;
    width: 80px;
    height: 100%;
}

.body-item input {
    width: 180px;
    height: 100%;
}

.btn {
    width: 100px;
    display: block;
    height: 30px;
    font-size: 13px;
    color: #fff;
    margin: auto;
    background-color: #ff4400;
    border-radius: 3px;
    text-align: center;
    line-height: 30px;
    margin-top: 10px;
    cursor: pointer;
}
</style>
