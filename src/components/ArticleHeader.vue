<template>
	<div class="header-menu">
		<div class="header-menu-back" @click="goPath"></div>
		<div class="header-menu-title">
			{{ userId }}
		</div>
	</div>
</template>


<script>
	export default {
		data (){
			return {
			
			}
		},
		props: ['userId'],
		methods: {
			goPath (){
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
	.header-menu-back {
		position: absolute;
		top: 0.213333rem;
		left: 0.56rem;
		width: 0.4rem;
		height: 0.746667rem;
		background-image: url(../../static/images/back.png);
		background-repeat: no-repeat;
		background-size: 0.4rem 0.746667rem;
	}
</style>