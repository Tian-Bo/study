



<template>
    <div id="app">
        <header>我的购物车</header>
        <ul>
            <li v-for="(item, index) in list" :key="index">
                <div class="image">
                    <img :src="item.img" alt />
                </div>
                <div class="msg">
                    <h4>{{ item.title }}</h4>
                    <div>
                        <span>轮胎规格:</span>
                        {{ item.speci }}
                    </div>
                    <div>
                        <span>轮胎花纹:</span>
                        {{ item.decor }}
                    </div>
                    <div>
                        <span>商品品牌:</span>
                        {{ item.brand }}
                    </div>
                </div>
                <div class="power">
                    <div class="number">
                        <span @click="addShop()">-</span>
                        {{ item.number }}
                        <span @click="reduceShop()">+</span>
                    </div>
                    <div class="price">¥{{ item.price }}元</div>
                    <span class="btn" @click="removeShop(item)">移除购物车</span>
                </div>
            </li>
        </ul>
        <footer>
            <span class="footer-item">
                共:
                <span>¥{{ num }}元</span>
            </span>
            <span class="footer-item">
                数量:
                <span>{{ number }}</span>
            </span>
            <a class="btn" @click="submit">提交订单</a>
        </footer>
    </div>
</template>

<script>
import { postLogin } from "@/api/common";
import { checkTel, checkPassword, setSessionStorage } from "@/common/util";
export default {
    data() {
        return {
            num: "00.00",
            number: "400",
            list: [
                {
                    img: "./img/5bb352eacbff7.jpg",
                    title:
                        "马牌轮胎 ComfortContact CC6 195/65R15 91V 专为亚太地区量身打造 100110581",
                    speci: "195/65R15",
                    decor: "CC6",
                    brand: "马牌/Continental",
                    number: 99,
                    price: 459.0
                },
                {
                    img: "./img/5bb352eacbff7.jpg",
                    title:
                        "马牌轮胎 ComfortContact CC6 195/65R15 91V 专为亚太地区量身打造 100110581",
                    speci: "195/65R15",
                    decor: "CC6",
                    brand: "马牌/Continental",
                    number: 99,
                    price: 459.0
                },
                {
                    img: "./img/5bb352eacbff7.jpg",
                    title:
                        "马牌轮胎 ComfortContact CC6 195/65R15 91V 专为亚太地区量身打造 100110581",
                    speci: "195/65R15",
                    decor: "CC6",
                    brand: "马牌/Continental",
                    number: 99,
                    price: 459.0
                },
                {
                    img: "./img/5bb352eacbff7.jpg",
                    title:
                        "马牌轮胎 ComfortContact CC6 195/65R15 91V 专为亚太地区量身打造 100110581",
                    speci: "195/65R15",
                    decor: "CC6",
                    brand: "马牌/Continental",
                    number: 99,
                    price: 459.0
                },
                {
                    img: "./img/5bb352eacbff7.jpg",
                    title:
                        "马牌轮胎 ComfortContact CC6 195/65R15 91V 专为亚太地区量身打造 100110581",
                    speci: "195/65R15",
                    decor: "CC6",
                    brand: "马牌/Continental",
                    number: 99,
                    price: 459.0
                },
                {
                    img: "./img/5bb352eacbff7.jpg",
                    title:
                        "马牌轮胎 ComfortContact CC6 195/65R15 91V 专为亚太地区量身打造 100110581",
                    speci: "195/65R15",
                    decor: "CC6",
                    brand: "马牌/Continental",
                    number: 99,
                    price: 459.0
                },
                {
                    img: "./img/5bb352eacbff7.jpg",
                    title:
                        "马牌轮胎 ComfortContact CC6 195/65R15 91V 专为亚太地区量身打造 100110581",
                    speci: "195/65R15",
                    decor: "CC6",
                    brand: "马牌/Continental",
                    number: 99,
                    price: 459.0
                }
            ]
        };
    },
    methods: {
        // 加
        addShop() {},
        // 减
        reduceShop() {},
        // 移除购物车
        removeShop(item) {
            console.log(item);
            // window.location.href = "./my_mall.html";
        },
        // 提交订单
        submit() {
            this.$router.push({ path: "/pay" })
        }
    }
};
</script>

<style lang='scss' scoped>
ul,
li {
    list-style: none;
}

#app {
    width: 1000px;
    margin: 15px auto;
    border: 1px solid #e6e6e6;
    overflow: hidden;
}

header {
    background-color: #f2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border: 1px solid #e6e6e6;
}

ul li {
    height: 150px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #eee;
}

ul .image {
    width: 120px;
    height: 120px;
    margin-right: 20px;
}

ul .image img {
    width: 100%;
    height: 100%;
}

.msg {
    width: 700px;
}

.msg h4 {
    margin-bottom: 10px;
}

.msg div {
    line-height: 200%;
    color: #999999;
    font-size: 12px;
}

.msg span {
    color: #434343;
    margin-right: 3px;
}

.power .number {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #999;
}
.power .number span {
    border: 1px solid #eee;
    padding: 2px 10px;
    font-size: 18px;
    cursor: pointer;
    color: #333;
}

.power .price {
    width: 100px;
    height: 30px;
    font-size: 18px;
    color: #ff8800;
    margin: auto;
    margin-top: 5px;
    font-weight: bold;
}

.power .btn {
    width: 100px;
    display: block;
    height: 30px;
    font-size: 13px;
    color: #fff;
    margin: auto;
    background-color: #fe7f2a;
    border-radius: 3px;
    text-align: center;
    line-height: 30px;
    margin-top: 10px;
    cursor: pointer;
}

footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 70px;
}

footer .footer-item {
    height: 30px;
    font-size: 18px;
    color: #ff4400;
    margin: auto;
    margin-top: 5px;
    font-weight: bold;
}

footer .footer-item span {
    margin-left: 5px;
}

footer .btn {
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
