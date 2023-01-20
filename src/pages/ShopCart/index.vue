<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th2-5">版本</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="cart in cartInfoList" :key="cart.id">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" />
          </li>
          <li class="cart-list-con2">
            <img :src="cart.imgUrl" />
            <div class="item-msg">{{ cart.skuName }}</div>
          </li>
          <li class="cart-list-con3">
            <div class="item-txt">黑金款</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ cart.skuPrice }}.00</span>
          </li>
          <li class="cart-list-con5">
            <a
              href="javascript:void(0)"
              class="mins"
              @click="handler('minus', -1, cart)"
              >-</a
            >
            <input
              autocomplete="off"
              type="text"
              :value="cart.skuNum"
              @change="handler('change', $event.target.value, cart)"
              minnum="1"
              class="itxt"
            />
            <a
              href="javascript:void(0)"
              class="plus"
              @click="handler('add', 1, cart)"
              >+</a
            >
            <!-- 本来想用element-ui的，不过搞不定 -->
            <!-- <el-input-number v-model="cart.skuNum" @change="handleChange($event.target.value*1,cart)" :min="1" label="描述文字" size="mini"></el-input-number> -->
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ cart.skuNum * cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con7">
            <a href="#none" class="sindelet">删除</a>
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" :checked="isAllCheck" />
        <span>全选</span>
      </div>
      <div class="option">
        <a href="#none">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择 <span>{{ totalGoods }}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" href="###" target="_blank">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// 导入节流
import throttle from 'lodash/throttle';

export default {
  name: "ShopCart",
  methods: {
    getDate() {
      // 获取购物车数据
      this.$store.dispatch("getCartList");
    },
    // 商品数量部分
    //加入节流操作,1000毫米内只能点一次
    handler:throttle(async function(type, disNum, cart) {
      //减按钮判断当前数量是否为1
      if (type === "minus") {
        //当商品数量为1是，不可以再减少
        disNum = cart.skuNum >1? -1:0;
      }else if (type === "add") {
        disNum = 1;
      }
      //输入框修改,难点：要判断输入的内容是否合法
      if (type === "change") {
        //输入内容不合法时
        if (isNaN(disNum * 1) || disNum <= 0) {
          disNum = 1;
        } else {
          disNum = parseInt(disNum) - cart.skuNum;
        }
      }
      //派发action
      try {
        // 代表的是修改成功
        await this.$store.dispatch("reqAddCart", {
          skuId: cart.skuId,
          skuNum: disNum,
        });
        //商品数量修改成功后再次获取服务器数据
        this.getDate();
      } catch (error) {}
    },600),
  },
  computed: {
    ...mapGetters(["cartList"]),
    // 购物车数据
    cartInfoList() {
      return this.cartList.cartInfoList || [];
    },
    // 计算产品的总价
    totalPrice() {
      let sum = 0;
      this.cartInfoList.forEach((element) => {
        sum += element.skuNum * element.skuPrice;
      });
      return sum;
    },
    // 计算商品总数
    totalGoods() {
      let goods = 0;
      this.cartInfoList.forEach((item) => {
        goods += item.skuNum;
      });
      return goods;
    },
    // 计算是否全选
    isAllCheck() {
      return this.cartInfoList.every((item) => item.isChecked == 1);
    },
  },
  mounted() {
    this.getDate();
  },
};
</script>

<style lang="less" scoped>
.el-input-number--mini {
  // 这个是计数器的宽度
  width: 100px;
}
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 11%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 26%;
      }

      .cart-th2-5 {
        width: 13%;
      }

      .cart-th3 {
        width: 14%;
      }
      .cart-th4 {
        width: 11%;
      }
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 4.1667%;
        }

        .cart-list-con2 {
          width: 25%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con3 {
          width: 20.8333%;

          .item-txt {
            text-align: center;
          }
        }

        .cart-list-con4 {
          width: 12.5%;
        }

        .cart-list-con5 {
          width: 12.5%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
          .itxt{
            height: 37px;
          }
        }

        .cart-list-con6 {
          width: 12.5%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 12.5%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
