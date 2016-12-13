<template>
	<div class="header-menu">
		<div class="header-menu-user-pic">
			<img width="100%" height="100%" src="../../static/images/user_pic.png" alt="">
		</div>
		<div class="header-menu-title">
			{{ message }}
		</div>
	</div>
</template>








<script>
	export default {
		data (){
			return {
				'message':'玉林城'
			}
		}
	}
</script>

<style>
	.header-menu {
		position: relative;
		width: 100%;
		height: 1.17rem;
		background-color: #1ac600;
	}
	.header-menu-title {
		width: 100%;
		height: 100%;
		line-height: 1.17rem;
		color: white;
		font-size: .48rem;
		text-align: center;
	}
	.header-menu-user-pic {
		position: absolute;
		top: .21rem;
		left: .21rem;
		width: .75rem;
		height: .75rem;
		border-radius: 100%;
		overflow: hidden;
	}
</style>