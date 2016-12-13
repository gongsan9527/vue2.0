<template>

	<div class="slide-container" id="slide-container">
		<mt-swipe :auto="5000">
	  		<mt-swipe-item v-for="(value,index) in slideArr">
	  			<router-link :to="{ path: '/article/'+index}">
	  				<img width="100%" :src="value" alt="">
	  			</router-link>
	  		</mt-swipe-item>
		</mt-swipe>
	</div>
		
</template>

<script>


	import Vue from 'vue'
	import { Swipe, SwipeItem } from 'mint-ui';

	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);

	export default {
		data () {
			return {
				'slideArr': null
			}
		},
		created (){
			// this.$http.get('http://192.168.1.168:8080/static/json/slideList.json',).then((response) => {
			//     this.slideArr = response.body;
			// }, (response) => {
			   
			// });

			this.slideArr = [
				"../../static/images/silide_pic.jpg",
				"../../static/images/silide_pic.jpg",
				"../../static/images/silide_pic.jpg"
			];

			// this.slideArr = [
			// 	"static/images/silide_pic.jpg",
			// 	"static/images/silide_pic.jpg",
			// 	"static/images/silide_pic.jpg"
			// ];
			

		   
		}
	};


</script>

<style>
	#slide-container {
		height: 4.266667rem;
	}
	#slide-container .mint-swipe-indicator {
		width: 0.746667rem;
		height: 0.213333rem;
		opacity: 1;
		border-radius: 0.213333rem;
		background-color: white;
	}
	#slide-container .is-active {
		background-color: #1ac600;
	}
	#slide-container .mint-swipe-indicators {
		bottom: 0.266667rem;
	}
</style>
