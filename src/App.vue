<template>
	<div id="app-container">
		<div class="footer-menu">
			<router-link :to="{ path: '/index' }" tag="span" class="footer-menu-icon"><div>首页</div></router-link>
			<router-link :to="{ path: '/detection' }" tag="span" class="footer-menu-icon"><div>发现</div></router-link>
			<router-link :to="{ path: '/message' }" tag="span" class="footer-menu-icon"><div>消息</div></router-link>
		</div>
		<transition name="page" mode="out-in">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>

	export default {
		components: {

		},
		mounted (){
			
		}
	}

</script>

<style>

	.footer-menu {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1.28rem;
		z-index: 10;
		background-color: white;
		border-top: 1px solid #ddd;
		background-color: white;
	}
	.footer-menu .router-link-active div {
		color: #1ac600;
	}
	.footer-menu-icon {
		position: relative;
		float: left;
		height: 100%;
		background-repeat: no-repeat;
	}
	.footer-menu-icon div {
		position: absolute;
		left: 0;
		bottom: 0.106667rem;
		width: 100%;
		text-align: center;
		font-size: 0.266667rem;
	}
	.footer-menu span:nth-child(1) {
		width: 0.666667rem;
		margin-left: 1.813333rem;
		background-image: url(../static/images/home.png);
		background-size: 0.64rem 0.64rem;
		background-position: center 0.08rem;
	}
	.footer-menu span:nth-child(2) {
		width: 0.746667rem;
		margin-left: 2.16rem;
		background-image: url(../static/images/find.png);
		background-size: 0.746667rem 0.56rem;
		background-position: center 0.12rem;
	}
	.footer-menu span:nth-child(3) {
		width: 0.746667rem;
		margin-left: 2.16rem;
		background-image: url(../static/images/mseeage.png);
		background-size: 0.746667rem 0.64rem;
		background-position: center 0.08rem;
	}
	#app {
		/*padding-bottom: 1.3rem;*/
	}

	.clear{
		zoom:1
	}
	.clear:after{
		content:'';
		display:block;
		clear:both
	}

	.page-enter-active, .page-leave-active {
  		transition: all .5s;
	}
	.page-enter, .page-leave-active {
	  	opacity: 0;
	}
	.page-fade-enter {
	  	transform: translateX(31px);
	}
	.page-leave-active {
	  	transform: translateX(-31px);
	}

	.fade-enter-active, .fade-leave-active {
  		transition: opacity .1s
	}
	.fade-enter, .fade-leave-active {
  		opacity: 0
	}


</style>
