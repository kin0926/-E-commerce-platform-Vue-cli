<template>
  <div id="app">
    <!-- 组件三件套3:使用组件 -->
    <HeaderVue></HeaderVue>
    <br /><br />
    <router-view></router-view>
    <br /><br />
    <FooterVue v-show="$route.meta.show"></FooterVue>
  </div>
</template>

<script>
// 组件三件套1：引入组件
import HeaderVue from "./components/Header/Header.vue";
import FooterVue from "./components/Footer/Footer.vue";

export default {
  name: "App",
  // 组件三件套2：注册组件
  components: {
    HeaderVue,
    FooterVue,
  },
  mounted(){
    //通知Vuex发请求，获取数据，并存储于仓库当中,
    //这里actions取名叫做categorylist，然后去Vuex里配置actions
    this.$store.dispatch("categoryList");
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
/*去掉列表前面的小点*/
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #000;
}
</style>
