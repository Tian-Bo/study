



<template>
    <div id="app">
        <header>商品列表</header>
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
                    <div class="price">¥{{ item.price }}元</div>
                    <span class="btn" @click="addShop(item)">加入购物车</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { postLogin } from "@/api/common";
import { checkTel, checkPassword, setSessionStorage } from "@/common/util";
export default {
    data() {
        return {
            list: [
                {
                    img: require("../../assets/img/5bb352eacbff7.jpg"),
                    title:
                        "马牌轮胎 ComfortContact CC6 195/65R15 91V 专为亚太地区量身打造 100110581",
                    speci: "195/65R15",
                    decor: "CC6",
                    brand: "马牌/Continental",
                    price: 459.0
                },
                {
                    img: require("../../assets/img/5bb352eacbff7.jpg"),
                    title:
                        "马牌轮胎 ComfortContact CC6 195/65R15 91V 专为亚太地区量身打造 100110581",
                    speci: "195/65R15",
                    decor: "CC6",
                    brand: "马牌/Continental",
                    price: 459.0
                },
                {
                    img: require("../../assets/img/5bb352eacbff7.jpg"),
                    title:
                        "马牌轮胎 ComfortContact CC6 195/65R15 91V 专为亚太地区量身打造 100110581",
                    speci: "195/65R15",
                    decor: "CC6",
                    brand: "马牌/Continental",
                    price: 459.0
                },
                {
                    img: require("../../assets/img/5bb352eacbff7.jpg"),
                    title:
                        "马牌轮胎 ComfortContact CC6 195/65R15 91V 专为亚太地区量身打造 100110581",
                    speci: "195/65R15",
                    decor: "CC6",
                    brand: "马牌/Continental",
                    price: 459.0
                },
                {
                    img: require("../../assets/img/5bb352eacbff7.jpg"),
                    title:
                        "马牌轮胎 ComfortContact CC6 195/65R15 91V 专为亚太地区量身打造 100110581",
                    speci: "195/65R15",
                    decor: "CC6",
                    brand: "马牌/Continental",
                    price: 459.0
                },
                {
                    img: require("../../assets/img/5bb352eacbff7.jpg"),
                    title:
                        "马牌轮胎 ComfortContact CC6 195/65R15 91V 专为亚太地区量身打造 100110581",
                    speci: "195/65R15",
                    decor: "CC6",
                    brand: "马牌/Continental",
                    price: 459.0
                },
                {
                    img: require("../../assets/img/5bb352eacbff7.jpg"),
                    title:
                        "马牌轮胎 ComfortContact CC6 195/65R15 91V 专为亚太地区量身打造 100110581",
                    speci: "195/65R15",
                    decor: "CC6",
                    brand: "马牌/Continental",
                    price: 459.0
                }
            ]
        };
    },
    methods: {
        // 加入购物车
        addShop(item) {
            this.$router.push({ path: "/my_mall" })
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
</style>
