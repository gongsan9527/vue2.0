<template>
	<div class="search-container">
		<div class="search-txt-container">
			<input type="text" @keyup.enter="submitHandler" class="search-txt" v-model="searchTxt" placeholder="输入您感兴趣的">
			<button class="search-btn" @click.stop.prevent="submitHandler">搜索</button>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				'searchTxt':''
			}
		},
		methods: {
			submitHandler () {
				console.log(this.searchTxt);
			}
		}
	}
</script>

<style>
	.search-container {
		height: 1.066667rem;
		width: 100%;
		overflow: hidden;
		background-color: #efefef;
	}
	.search-txt-container {
		height: 0.72rem;
		width: 9.68rem;
		margin: 0.16rem auto 0;
		border: 1px solid #ddd;
		background-color: white;
		background-image: url(../../static/images/search.png);
		background-size: 0.426667rem 0.426667rem;
		background-position: 0.16rem 0.16rem;
		background-repeat: no-repeat;
	}
	.search-txt {
		float: left;
		height: 100%;
		width: 7.453333rem;
		margin: 0 0 0 0.746667rem;
		line-height: 100%;
		border: none;
	}
	.search-btn {
		float: left;
		width: 1.173333rem;
		height: 100%;
		margin-left: 0.266667rem;
		line-height: 100%;
		color: #1ac600;
		font-size: 0.32rem;
		border: none;
		border-left: 1px solid #ddd;
		background: none;
	}
</style>
