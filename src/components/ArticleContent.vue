<template>
	<div class="article-content-container">
		<ArticleHeader :user-id="userId"></ArticleHeader>
		<div class="article-pic-bg">
			<img width="100%" height="100%" src="../../static/images/article_pic.png" alt="">
		</div>
		<div class="article-info-container">
			<div class="article-info">
				<h6 class="article-title">这里是一个很，很长，很诡异的标题，你觉得好吗？</h6>
				<div class="user-info clear">
					<div class="user-info-pic">
						<img src="../../static/images/user_pic.png" alt="">
					</div>
					<div class="user-info-name">Simon雷雨</div>
					<div class="user-info-icon user-info-icon-1"></div>	
					<div class="user-info-icon user-info-icon-2"></div>		
				</div>
				<div class="article-address-info clear">
					<div class="article-address">内蒙古 - 呼和浩特 - 大草原</div>
					<div class="look-num">50000</div>
				</div>
			</div>
		</div>
		<div class="article-content">
			文章详情
		</div>
		<div class="like-btn"></div>
		<p class="like-num">10000</p>
		<div class="join-team">
			<p class="team-name">TA正在组团去这里玩</p>
			<p class="team-num">目前已有3人参团</p>
			<span class="join-btn">我要参团</span>
		</div>
		<Comment></Comment>
	</div>
</template>

<script>

	import ArticleHeader from './ArticleHeader.vue'
	import Comment from './Comment.vue'

	export default {
		data (){
			return {
				userId:null
			}
		},
		components: {
			ArticleHeader,
			Comment
		},
		methods: {
			getData (){
				this.userId = this.$route.params.id;
			}
		},
		watch: {
			'$route': 'getData'
		},
		created (){
			this.getData();
		}
	}
</script>

<style scoped>
	.article-pic-bg {
		width: 100%;
		height: 5.333333rem;
		overflow: hidden;
	}
	.article-info-container {
		position: relative;
		width: 100%;
		height: 3.253333rem;
	}
	.article-info {
		position: absolute;
		top: -1.333333rem;
		left: 50%;
		margin-left: -4.786667rem;
		height: 3.933333rem;
		width: 9.573333rem;
		background-color: white;
		box-shadow: 0 0 30px #999;
		border-bottom: 10px solid #1ac600;
	}
	.article-title {
		margin-top: 0.293333rem;
		padding: 0 0.266667rem;
		font-size: 0.426667rem;
		line-height: 0.746667rem;
	}
	.user-info-pic {
		float: left;
		width: 0.933333rem;
		height: 0.933333rem;
		overflow: hidden;
		border-radius: 100%;
		border: 4px solid #1ac600;
	}
	.user-info {
		padding: 0 0.266667rem;
		margin-top: 0.133333rem;
	}
	.user-info-name {
		float: left;
		font-size: 0.32rem;
		margin-top: 0.346667rem;
		margin-left: 0.213333rem;
	}
	.user-info-icon {
		float: left;
		margin-top: 0.24rem;
		margin-left: 0.213333rem;
		width: 0.533333rem;
		height: 0.533333rem;
		background-repeat: no-repeat;
		background-size: 0.533333rem 0.533333rem; 
	}
	.user-info-icon-1 {
		background-image: url(../../static/images/icon_1.png);
	}
	.user-info-icon-2 {
		background-image: url(../../static/images/icon_2.png);
	}
	.article-address-info {
		margin-top: 0.266667rem;
		padding: 0 0.266667rem;
	}
	.article-address {
		float: left;
		height: 0.426667rem;
		color: #666;
		font-size: 0.32rem;
		line-height: 0.426667rem;
		text-indent: 0.56rem;
		background-image: url(../../static/images/article_address.png);
		background-repeat: no-repeat;
		background-size: 0.32rem 0.426667rem;
	}
	.look-num {
		float: right;
		height: 0.32rem;
		line-height: 0.32rem;
		color: #666;
		font-size: 0.32rem;
		text-indent: 0.666667rem;
		background-image: url(../../static/images/article_look.png);
		background-repeat: no-repeat;
		background-size: 0.533333rem 0.32rem;
	}
	.article-content {
		padding: 0 0.24rem;
		min-height: 13.333333rem;
	}
	.like-btn {
		width: 1.173333rem;
		height: 1.173333rem;
		margin: 0.426667rem auto 0;
		border-radius: 100%;
		background-color: #ff5d59;
		background-image: url(../../static/images/heart.png);
		background-repeat: no-repeat;
		background-size: 0.613333rem 0.533333rem;
		background-position: 50%;
	}
	.article-content-container {
		padding-bottom: 1.28rem;
	}
	.like-num {
		margin-top: 0.213333rem;
		font-size: 0.373333rem;
		text-align: center;
	}
	
	.join-team {
		position: relative;
		height: 2.133333rem;
		border-left: 16px solid #1ac600;
	}
	.team-name {
		margin-left: 0.266667rem;
		padding-top: 0.533333rem;
		font-size: 0.426667rem;
	}
	.team-num {
		margin-left: 0.266667rem;
		margin-top: 0.346667rem;
		font-size: 0.32rem;
		color: #666;
	}
	.join-btn {
		position: absolute;
		top: 0.666667rem;
		right: 0.213333rem;
		width: 2.666667rem;
		height: 0.96rem;
		line-height: 0.96rem;
		font-size: 0.373333rem;
		color: white;
		text-align: center;
		border-radius: 5px;
		background-color: #1ac600;
	}

</style>

