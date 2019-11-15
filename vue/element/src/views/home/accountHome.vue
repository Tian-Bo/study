<template>
  <div class="app-content">
    <accountHeader title="账号主页" />
    <main>
      <div class="header">
        <div class="header-lt">
          <div class="header-lt-img">
            <img src alt>
          </div>
          <div class="header-lt-name">18580557309</div>
        </div>
        <router-link tag="div" class="header-rt" to="/account-setting">账号设置</router-link>
      </div>
      <div class="main">
        <div class="main-title">知识店铺(1)</div>
        <ul class="main-box">
          <li
            v-for="(item, index) in 3"
            :key="index"
            class="main-box-item"
            :class="{ 'main-box-end': index==3 }"
            @click="jumpDamin(item)"
          >
            <div class="main-box-item-t">
              <span class="item-t-name ellipsis">中国好声音中国好声音中国好声音中国好声音</span>
              <span class="item-t-type">医疗整形</span>
            </div>
            <div
              class="main-box-item-b"
            >{{ index== 3 ? '试用期' : '七天试用期' }} {{ index== 3 ? '已过期' : '有效期至2019-10-04' }}</div>
          </li>
          <li class="main-box-item main-box-btn">
            <div>
              <i class="iconfont el-icon-plus" />创建专属店铺
            </div>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import accountHeader from '@/components/Header/accountHeader'
export default {
  components: {
    accountHeader
  },
  methods: {
    // 跳转后台
    jumpDamin(item) {
      // 在此存储店铺信息
      this.$router.push({ path: '/general' })
    }
  }
}
</script>

<style lang="scss" scoped>
main {
    width: 1000px;
    margin: 0 auto;
    margin-top: 20px;
    .header {
        width: 100%;
        height: 100px;
        padding: 20px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .header-lt {
            display: flex;
            align-items: center;
            .header-lt-img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                overflow: hidden;
                border: 1px solid #eee;
                background: url("../../assets/img/icon_head.png");
                background-size: 100%;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .header-lt-name {
                padding: 10px;
            }
        }
        .header-rt {
            color: #fff;
            background-color: #409eff;
            cursor: pointer;
            font-size: 12px;
            padding: 8px 15px;
            border-radius: 2px;
        }
    }
    .main {
        margin-top: 20px;
        .main-title {
            font-weight: bold;
            padding: 10px 0;
        }
        .main-box {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            .main-box-item {
                width: 320px;
                height: 100px;
                margin-bottom: 20px;
                margin-right: 20px;
                background-color: #fff;
                border-radius: 2px;
                cursor: pointer;
                border-left: 5px solid #409eff;
                padding: 25px 25px 20px 30px;
                .main-box-item-t {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .item-t-name {
                        font-size: 16px;
                        max-width: 200px;
                    }
                    .item-t-type {
                        color: #409eff;
                        font-size: 12px;
                        padding: 2px 5px;
                        border-radius: 2px;
                        border: 1px solid #409eff;
                    }
                }
                .main-box-item-b {
                    margin-top: 20px;
                    font-size: 12px;
                    color: #888888;
                }
            }
            .main-box-end {
                border-left: 5px solid #ccc;
                .main-box-item-t {
                    .item-t-type {
                        color: #ccc;
                        border: 1px solid #ccc;
                    }
                }
            }
            .main-box-btn {
                display: flex;
                justify-content: center;
                align-items: center;
                color: #409eff;
                font-size: 16px;
                font-weight: 500;
                border-left: 0px;
                .iconfont {
                    font-weight: bold;
                    padding-right: 5px;
                }
            }
            .main-box-item:nth-of-type(3n) {
                margin-right: 0px;
            }
            .main-box-item:hover {
                transition: all 0.5s;
                box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
            }
        }
    }
}
</style>
