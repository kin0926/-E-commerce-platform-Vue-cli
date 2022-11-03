<template>
  <div>
    <!-- <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <ul class="shortcut">
            <li>BUY-ME欢迎您！</li>
            <li>
              <a href="sign-in.html">请登录</a>
              <a href="register.html" class="style-red">免费注册</a>
            </li>
          </ul>
          <el-menu-item index="01">请登录</el-menu-item>
          <el-menu-item index="02">免费注册</el-menu-item>
          <el-menu-item index="1">我的订单</el-menu-item>
          <el-menu-item index="1">邮箱</el-menu-item>
          <el-menu-item index="3" disabled>活动动态</el-menu-item>
          <el-menu-item index="4"
            ><a href="javaScript:;" target="_blank">订单管理</a></el-menu-item
          >
          <el-submenu index="2">
            <template slot="title">个人中心</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4"></el-submenu>
          </el-submenu>
        </el-menu> 
      </el-header>
    </el-container>-->

        <!-- 返回顶部 锚点坐标 -->

        <!-- 顶部快捷导航start -->
        <div class="shortcut">
          <div class="w">
            <div class="fl">
              <ul>
                <li>BUY-ME欢迎您！</li>
                <li>
                  <router-link to="/login">请登录</router-link>
                  <router-link to="/register" class="style-red">免费注册</router-link>
                </li>
              </ul>
            </div>
            <div class="fr">
              <ul class="nava">
                <li><a href="#">我的订单</a></li>
                <li>
                  <a href="#">我的品优购 ⇩</a>
                  <ul style="display: none;">
                    <li>
                      <a href="">私信</a>
                    </li>
                    <li>
                      <a href="">评论</a>
                    </li>
                    <li>
                      <a href="">@我</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">客户服务 ⇩</a>
                  <ul style="display: none;">
                    <li>
                      <a href="">反馈</a>
                    </li>
                    <li>
                      <a href="">投诉</a>
                    </li>
                    <li>
                      <a href="">加入我们</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">网站导航 ⇩</a>
                  <ul style="display: none;">
                    <li>
                      <a href="">家用电器</a>
                    </li>
                    <li>
                      <a href="">电子设备</a>
                    </li>
                    <li>
                      <a href="">精品家具</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 顶部快捷导航end -->
        <!-- header制作 -->
    <div class="header w">
        <!-- logo -->
        <div class="logo">
            <h1>
                <router-link to="/home"><img src="./img/logo.jpg" title="这是一个logo" alt="" width="150px" height="95px"></router-link>
            </h1>
        </div>
        <!-- search -->
        <div class="search">
            <input type="text" class="text" placeholder="请搜索内容..." v-model="keyword">
            <button class="btn" @click="goSearch">搜一搜</button>
        </div>
        <!-- hotwrods -->
        <div class="hotwrods">
            <a href="#" class="style-red">优惠购首发</a>
            <a href="#">亿元优惠</a>
            <a href="#">9.9元团购</a>
            <a href="#">美满99减30</a>
            <a href="#">办公用品</a>
            <a href="#">电脑</a>
            <a href="#">通信</a>
        </div>
        <a href="shopping.html">
        <div class="shopcar">
            <i class="car"> </i>我的购物车 <i class="arrow">  </i>
            <i class="count">80</i>
        </div>
        </a>
    </div>
    <!-- header 结束 -->
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword:''
    };
  },
  methods: {
    // 路由传递参数
    goSearch(){
      // .toUpperCase()是大写的意思
      // this.$router.push('/search/'+this.keyword+"?id="+this.keyword.toUpperCase())
    
    // 常用：对象传参
    this.$router.push({
      name:'xiangqing',
      params:{keyword:this.keyword},
      query:{id:this.keyword.toUpperCase()}
    })
    }
  },
};
</script>

<style>
.el-menu-demo {
  display: flex;
  justify-content: flex-end;
}
/*顶部快捷导航*/
.shortcut {
	height: 31px;
	background-color: #f1f1f1;
	line-height: 31px;
}
.shortcut li {
	float: left;
}
.w {
	width: 1200px;
	margin: 0 auto;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
/* 下拉列表部分 */
/* 下拉列表 */
/* .nava li {
  list-style-type: none;
} */

.nava a {
  text-decoration: none;
  font-size: 12px;
}

/* .nava {
  margin: 100px;
} */

.nava li {
  position: relative;
  /* float: left; */
  width: 80px;
  height: 31px;
  text-align: center;
  z-index: 10;
  background-color: white;
}

.nava li a {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 41px;
  color: #333;
  border-left: #eae0e0 1px solid;
  border-right: #eae0e0 1px solid;
}

.nava>li>a:hover {
  background-color: #eee;
}

.nava ul {
  display: none;
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  border-left: 1px solid #FECC5B;
  border-right: 1px solid #FECC5B;
}

.nava ul li {
  border-bottom: 1px solid #FECC5B;
}

.nava ul li a:hover {
  background-color: #FFF5DA;
}
/*header区域*/
.header {
	position: relative;
	height: 105px;
}
.logo {
	position: absolute;
	top: 25px;
	left: 0;
	width: 175px;
	height: 56px;
}
.logo img{
  border-radius: 15px 50px
}
/* .logo a {
	display: block;
	width: 175px;
	height: 56px;
	background: url(./img/logo.jpg) no-repeat;
	font-size: 0; 
}*/
.search {
	position: absolute;
	top: 25px;
	left: 348px;
}
.text {
	float: left;
	width: 445px;
	height: 32px;
	border: 2px solid #ea5b17;
	padding-left: 10px;
}
.btn {
	float: left;
	width: 82px;
	height: 36px;
	background-color: #ea5b17;
	border: 0;
	font-size: 16px;
	color: #fff;
}
.hotwrods {
	position: absolute;
	top: 65px;
	left: 348px;
}
.hotwrods a {
	margin: 0 10px;
}
.shopcar {
	position: absolute;
	top:25px;
	right: 64px;
	width: 138px;
	height: 34px;
	border: 1px solid #dfdfdf;
	background-color: #f7f7f7;
	line-height: 34px;
	text-align: center;
}
.car {
	font-family: 'icomoon';
	color: #da5555;
}
.arrow {
	font-family: 'icomoon';
	margin-left: 5px;
}
.count {
	position: absolute;
	top: -5px;
	/*应该是左侧对齐 文字才能往右走显示*/
	left: 100px;
	background-color: #e60012;
	height: 14px;
	padding: 0 3px;
	line-height: 14px;
	color: #fff;
	/*border-radius: 左上角 右上角  右下角  左下角;*/
	border-radius: 7px 7px 7px 0;
}
</style>
