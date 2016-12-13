<template>
	<div class="comment-container">
		<h6 class="comment-title">玩友评论</h6>
		<div class="comment-content-container">
			<div class="comment-content clear">
				<div class="user-comment-pic">
					<img src="../../static/images/user_pic.png" alt="">
				</div>
				<div class="user-comment-container">
					<p class="user-name">Pooma卜马</p>
					<p class="user-content">这里是一段很长的而文字，长到不之所错，你不知道还以为是什么内容呢，其实不是的？</p>
					<p class="user-time">2016.9.10 14:44:50</p>
				</div>
			</div>
			<div class="comment-content clear">
				<div class="user-comment-pic">
					<img src="../../static/images/user_pic.png" alt="">
				</div>
				<div class="user-comment-container">
					<p class="user-name">Pooma卜马</p>
					<p class="user-content">这里是一段很长的而文字，长到不之所错，你不知道还以为是什么内容呢，其实不是的？</p>
					<p class="user-time">2016.9.10 14:44:50</p>
				</div>
			</div>
			<div class="comment-content clear">
				<div class="user-comment-pic">
					<img src="../../static/images/user_pic.png" alt="">
				</div>
				<div class="user-comment-container">
					<p class="user-name">Pooma卜马</p>
					<p class="user-content">这里是一段很长的而文字，长到不之所错，你不知道还以为是什么内容呢，其实不是的？</p>
					<p class="user-time">2016.9.10 14:44:50</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.comment-title {
		margin-top: 0.48rem;
		text-indent: 0.24rem;
		font-size: 0.373333rem;
	}
	.comment-content-container {
		padding-bottom: 0.32rem;
	}
	.comment-content {
		width: 9.253333rem;
		margin: 0.4rem auto 0;
		padding-bottom: 0.4rem;
		border-bottom: 1px solid #efefef;
	}
	.user-comment-pic {
		float: left;
		width: 0.746667rem;
		height: 0.746667rem;
		border-radius: 100%;
		overflow: hidden;
	}
	.user-comment-container {
		float: left;
		margin-left: 0.266667rem;
		width: 8.133333rem;
	}
	.user-name {
		padding-top: 0.16rem;
		font-size: 0.32rem;
		color: #1ac600;
	}
	.user-content {
		margin-top: 0.266667rem;
		font-size: 0.373333rem;
		line-height: 0.693333rem;
	}
	.user-time {
		margin-top: 0.4rem;
		font-size: 0.32rem;
		color: #999;
	}
</style>