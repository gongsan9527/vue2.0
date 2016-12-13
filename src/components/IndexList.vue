<template>
	<transition name="fade" mode="out-in">
		<div v-if="viewState" class="list-container" key="recommend">
			<mt-loadmore :bottom-method="recommendloadBottom" :bottom-all-loaded="recommendallLoaded" ref="recommendloadmore">
			  	<ul class="data-list clear">
					<li v-for="(item,index) in recommendList">
						<router-link :to="{ path: '/article/'+index}">
					  		<div class="list-img"><img width="100%" height="100%" :src="item.pic" alt=""></div>
							<div class="list-title">{{item.title}}</div>
						</router-link>
						<div class="list-address">{{item.address}}</div>
						<div class="countdown-container" v-if="item.time < 30">
							<div class="time-bg"></div>
							<p class="time-txt">{{item.time}}分钟前</p>
						</div>
					</li>
				</ul>
			</mt-loadmore>
		</div>
		<div v-else class="list-container" key="hots">
			<mt-loadmore :bottom-method="hotsloadBottom" :bottom-all-loaded="hotsallLoaded" ref="hotsloadmore">
			  	
			  	<ul class="data-list clear">
					<li v-for="(item,index) in hotsList">
						<router-link :to="{ path: '/article/'+index}">
					  		<div class="list-img"><img width="100%" height="100%" :src="item.pic" alt=""></div>
							<div class="list-title">{{item.title}}</div>
						</router-link>
						<div class="list-address">{{item.address}}</div>
						<div class="countdown-container" v-if="item.time < 30">
							<div class="time-bg"></div>
							<p class="time-txt">{{item.time}}分钟前</p>
						</div>
					</li>
				</ul>
			</mt-loadmore>
		</div>
	</transition>
</template>
<script>

	import Vue from 'vue'
	import { mapGetters } from 'vuex'
	import { Loadmore,Indicator } from 'mint-ui';

	Vue.component(Loadmore.name, Loadmore);

	export default {
		data (){
			return {
				hotsList:[],
				recommendList:[],
				hotsallLoaded:false,
				recommendallLoaded:false,
				arr1:[
					{	
						"pic":"../../static/images/1.jpg",
						"title":"标题很长的一条？",
						"address":"新疆-乌鲁木齐-天山",
						"time":31
					},
					{
						"pic":"../../static/images/2.jpg",
						"title":"标题很长的一条？",
						"address":"新疆-乌鲁木齐-天山",
						"time":3
					},
					{
						"pic":"../../static/images/3.jpg",
						"title":"标题很长的一条？",
						"address":"新疆-乌鲁木齐-天山",
						"time":50
					},
					{
						"pic":"../../static/images/4.jpg",
						"title":"标题很长的一条？",
						"address":"新疆-乌鲁木齐-天山",
						"time":10
					},
					{
						"pic":"../../static/images/3.jpg",
						"title":"标题很长的一条？",
						"address":"新疆-乌鲁木齐-天山",
						"time":20
					},
					{
						"pic":"../../static/images/1.jpg",
						"title":"标题很长的一条？",
						"address":"新疆-乌鲁木齐-天山",
						"time":90
					},
					{
						"pic":"../../static/images/2.jpg",
						"title":"标题很长的一条？",
						"address":"新疆-乌鲁木齐-天山",
						"time":1
					},
					{
						"pic":"../../static/images/4.jpg",
						"title":"标题很长的一条？",
						"address":"新疆-乌鲁木齐-天山",
						"time":5
					}
				],
				arr2:[
					{
						"pic":"../../static/images/4.jpg",
						"title":"标题很长的一条？",
						"address":"新疆-乌鲁木齐-天山",
						"time":15
					},
					{
						"pic":"../../static/images/3.jpg",
						"title":"标题很长的一条？",
						"address":"新疆-乌鲁木齐-天山",
						"time":55
					},
					{
						"pic":"../../static/images/2.jpg",
						"title":"标题很长的一条？",
						"address":"新疆-乌鲁木齐-天山",
						"time":75
					},
					{
						"pic":"../../static/images/1.jpg",
						"title":"标题很长的一条？",
						"address":"新疆-乌鲁木齐-天山",
						"time":25
					},
					{
						"pic":"../../static/images/4.jpg",
						"title":"标题很长的一条？",
						"address":"新疆-乌鲁木齐-天山",
						"time":95
					},
					{
						"pic":"../../static/images/1.jpg",
						"title":"标题很长的一条？",
						"address":"新疆-乌鲁木齐-天山",
						"time":15
					},
					{
						"pic":"../../static/images/2.jpg",
						"title":"标题很长的一条？",
						"address":"新疆-乌鲁木齐-天山",
						"time":85
					},
					{
						"pic":"../../static/images/3.jpg",
						"title":"标题很长的一条？",
						"address":"新疆-乌鲁木齐-天山",
						"time":15
					}
				]
				// arr1:[
				// 	{	
				// 		"pic":"static/images/1.jpg",
				// 		"title":"标题很长的一条？",
				// 		"address":"新疆-乌鲁木齐-天山",
				// 		"time":31
				// 	},
				// 	{
				// 		"pic":"static/images/2.jpg",
				// 		"title":"标题很长的一条？",
				// 		"address":"新疆-乌鲁木齐-天山",
				// 		"time":3
				// 	},
				// 	{
				// 		"pic":"static/images/3.jpg",
				// 		"title":"标题很长的一条？",
				// 		"address":"新疆-乌鲁木齐-天山",
				// 		"time":50
				// 	},
				// 	{
				// 		"pic":"static/images/4.jpg",
				// 		"title":"标题很长的一条？",
				// 		"address":"新疆-乌鲁木齐-天山",
				// 		"time":10
				// 	},
				// 	{
				// 		"pic":"static/images/3.jpg",
				// 		"title":"标题很长的一条？",
				// 		"address":"新疆-乌鲁木齐-天山",
				// 		"time":20
				// 	},
				// 	{
				// 		"pic":"static/images/1.jpg",
				// 		"title":"标题很长的一条？",
				// 		"address":"新疆-乌鲁木齐-天山",
				// 		"time":90
				// 	},
				// 	{
				// 		"pic":"static/images/2.jpg",
				// 		"title":"标题很长的一条？",
				// 		"address":"新疆-乌鲁木齐-天山",
				// 		"time":1
				// 	},
				// 	{
				// 		"pic":"static/images/4.jpg",
				// 		"title":"标题很长的一条？",
				// 		"address":"新疆-乌鲁木齐-天山",
				// 		"time":5
				// 	}
				// ],
				// arr2:[
				// 	{
				// 		"pic":"static/images/4.jpg",
				// 		"title":"标题很长的一条？",
				// 		"address":"新疆-乌鲁木齐-天山",
				// 		"time":15
				// 	},
				// 	{
				// 		"pic":"static/images/3.jpg",
				// 		"title":"标题很长的一条？",
				// 		"address":"新疆-乌鲁木齐-天山",
				// 		"time":55
				// 	},
				// 	{
				// 		"pic":"static/images/2.jpg",
				// 		"title":"标题很长的一条？",
				// 		"address":"新疆-乌鲁木齐-天山",
				// 		"time":75
				// 	},
				// 	{
				// 		"pic":"static/images/1.jpg",
				// 		"title":"标题很长的一条？",
				// 		"address":"新疆-乌鲁木齐-天山",
				// 		"time":25
				// 	},
				// 	{
				// 		"pic":"static/images/4.jpg",
				// 		"title":"标题很长的一条？",
				// 		"address":"新疆-乌鲁木齐-天山",
				// 		"time":95
				// 	},
				// 	{
				// 		"pic":"static/images/1.jpg",
				// 		"title":"标题很长的一条？",
				// 		"address":"新疆-乌鲁木齐-天山",
				// 		"time":15
				// 	},
				// 	{
				// 		"pic":"static/images/2.jpg",
				// 		"title":"标题很长的一条？",
				// 		"address":"新疆-乌鲁木齐-天山",
				// 		"time":85
				// 	},
				// 	{
				// 		"pic":"static/images/3.jpg",
				// 		"title":"标题很长的一条？",
				// 		"address":"新疆-乌鲁木齐-天山",
				// 		"time":15
				// 	}
				// ]
			}
		},
		computed: {
			...mapGetters({
				viewState:'GET_VIEW_STATE'  
			})
		},
		methods: {
			getInitData (){
				var _this = this;
				// this.$http.get('http://192.168.1.168:8080/static/json/hotsList.json',).then((response) => {
				// 	let _this = this;
				//     this.hotsList = response.body;
				// }, (response) => {
				 
				// });

				// this.$http.get('http://192.168.1.168:8080/static/json/recommendList.json',).then((response) => {
				// 	let _this = this;
				//     this.recommendList = response.body;
				// }, (response) => {
				   
				// });
				this.arr1.forEach( (val,key) => {
			    	_this.hotsList.push(val);
			    });
				
			
				this.arr2.forEach( (val,key) => {
			    	_this.recommendList.push(val);
			    });




			},
			hotsloadBottom (id){
				var _this = this;
				// this.$http.get('http://192.168.1.168:8080/static/json/hotsList.json',).then((response) => {
				// 	response.body.forEach( (val,key) => {
				//     	_this.hotsList.push(val);
				//     });
				//     _this.$refs.hotsloadmore.onBottomLoaded(id);
				    
				// }, (response) => {
				  
				// });
				this.arr1.forEach( (val,key) => {
			    	_this.hotsList.push(val);
			    });
			    _this.$refs.hotsloadmore.onBottomLoaded(id);

			},
			recommendloadBottom (id){
				var _this = this;
				// this.$http.get('http://192.168.1.168:8080/static/json/recommendList.json',).then((response) => {
				// 	response.body.forEach( (val,key) => {
				//     	_this.recommendList.push(val);
				//     });
				//     _this.$refs.recommendloadmore.onBottomLoaded(id);
				    
				// }, (response) => {
				   
				// });
				this.arr2.forEach( (val,key) => {
			    	_this.recommendList.push(val);
			    });
			    _this.$refs.recommendloadmore.onBottomLoaded(id);
			    	
			}
		},
		created (){
			this.getInitData();
		}
	}
</script>
<style>
	.list-container .mint-loadmore-bottom {
		position: absolute;
		bottom: 1.3rem;
		left: 0;
		width: 100%;
	}
	.data-list {
		padding-bottom: 1.3rem;
		margin-top: 0.266667rem;
	}
	.data-list li {
		position: relative;
		float: left;
		width: 4.68rem;
		margin-left: 0.213333rem;
		margin-bottom: 0.426667rem;
	}
	.list-img {
		display: block;
		width: 100%;
	}
	.list-title {
		margin-top: 0.133333rem;
		font-size: 0.373333rem;
		line-height: 0.56rem;
	}
	.list-address {
		height: 0.4rem;
		margin-top: 0.16rem;
		text-indent: 0.426667rem;
		font-size: 0.266667rem;
		color: #999;
		line-height: 0.413333rem;
		background-image: url(../../static/images/address.png);
		background-repeat: no-repeat;
		background-size: 0.266667rem 0.32rem;
	}
	.countdown-container {
		position: absolute;
		top: 0.266667rem;
		left: -0.213333rem;
		width: 1.706667rem;
		height: 0.533333rem;
	}
	.time-bg {
		position: absolute;
		top: 0;
		left: 0;
	    width: 0;
	    height: 0;
	    border: 0.266667rem solid #1ac600;
	    border-left-width: 1.706667rem;
	    border-right-color: transparent;
	    border-right-width: 0.266667rem;
	}
	.time-txt {
		position: absolute;
		top: 0;
		left: 0;
		width: 1.706667rem;
		height: 0.533333rem;
		line-height: 0.533333rem;
		font-size: 0.32rem;
		color: white;
		text-align: center;
	}
</style>