<template>
  <div class="footer">
    <div class="w">
      <!-- mod_service -->
      <div class="mod_service">
        <ul>
          <li>
            <i class="mod-service-icon mod_service_zheng"></i>
            <div class="mod_service_tit">
              <h5>正品保障</h5>
              <p>正品保障，提供发票</p>
              <p>如有问题，私信邮箱</p>
            </div>
          </li>
          <li>
            <i class="mod-service-icon mod_service_kuai"></i>
            <div class="mod_service_tit">
              <h5>正品保障</h5>
              <p>正品保障，提供发票</p>
              <p>如有问题，私信邮箱</p>
            </div>
          </li>
          <li>
            <i class="mod-service-icon mod_service_bao"></i>
            <div class="mod_service_tit">
              <h5>正品保障</h5>
              <p>正品保障，提供发票</p>
              <p>如有问题，私信邮箱</p>
            </div>
          </li>
          <li>
            <i class="mod-service-icon mod_service_bao"></i>
            <div class="mod_service_tit">
              <h5>正品保障</h5>
              <p>正品保障，提供发票</p>
              <p>如有问题，私信邮箱</p>
            </div>
          </li>
          <li>
            <i class="mod-service-icon mod_service_bao"></i>
            <div class="mod_service_tit">
              <h5>正品保障</h5>
              <p>正品保障，提供发票</p>
              <p>如有问题，私信邮箱</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*footer 部分*/
.footer {
	height: 78px;
	background-color: #f5f5f5;
	padding-top: 30px;
}
.mod_service {
	height: 79px;
	border-bottom: 1px solid #ccc;
}
.mod_service ul{
  display: flex;
  justify-content: center;
}
.mod_service li {
  list-style: none;
	width: 240px;
	height: 79px;
}
.mod-service-icon {
	/*浮动的盒子 可以直接给大小的 不需要转换*/
	float: left;
	width: 50px;
	height: 50px;
  max-width: 100%;
  max-height: 100%;
	margin-left: 35px;
	background: url(./img/icons.png) no-repeat;
}
.mod_service_zheng {
	background-position: -253px -3px;	
}
.mod_service_tit {
	float: left;
	margin-left: 5px;
}
.mod_service_tit h5 {
	margin: 5px 0;
}
.mod_service_kuai {
	background-position: -255px -54px;
}
.mod_service_bao {
	background-position: -257px -105px;
}
.mod_help {
	height: 187px;
	border-bottom: 1px solid #ccc;
}
.mod_help_item {
	float: left;
	width: 150px;
	padding: 20px 0 0 50px;
}
.mod_help_item dt {
	height: 25px;
	font-size: 16px;
}
.mod_help_item dd {
	height: 22px;
}
.mod_help_app dt,
.mod_help_app p {
	padding-left: 15px;
}
.mod_help_app img {
	margin: 7px 0;
}
.mod_copyright {
	text-align: center;
}
.mod_copyright_links {
	margin: 20px 0 15px 0;
}
.mod_copyright_info {
	line-height: 18px;
}

</style>
