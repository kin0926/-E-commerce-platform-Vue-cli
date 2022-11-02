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
                  <a href="sign-in.html">请登录</a>
                  <a href="register.html" class="style-red">免费注册</a>
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
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
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

</style>
