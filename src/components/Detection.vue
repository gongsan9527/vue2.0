<template>
	<div class="detection-container">
		<div class="header-menu">
			<div class="header-menu-user-pic">
				<img width="100%" height="100%" src="../../static/images/user_pic.png" alt="">
			</div>
			<div class="table-header">
				<span class="table-header-li" :class="{active:listIndex == index}" v-for="(item,index) in nameList" @click="getListData(index)">{{item}}</span>
			</div>
		</div>
		<Search></Search>
		<DetectionList></DetectionList>
	</div>
</template>

<script>
	import Search from './Search.vue'
	import DetectionList from './DetectionList.vue'
	import { mapActions } from 'vuex'
	import { Indicator } from 'mint-ui'

	export default {
		data () {
			return {
				listIndex: 0,
				nameList:['游记','组团']
			}
		},
		components: {
			Search,
			DetectionList
		},
		methods: {
			getListData (index){
				this.listIndex = index;
				switch(index){
					case 0:
						this.setView(true);
					break;
					case 1:
						this.setView(false);
					break;
				};
			},
			...mapActions({
	   			setView:'DETECTION_VIEW_ACTION'
	   		})
		}
	}

</script>

<style>
	.detection-container .table-header-li {
		color: white;
		font-size: 0.426667rem;
	}
	.detection-container .table-header .active {
		border-bottom: 1px solid white;
	}
	.detection-container .table-header {
		padding-top: 0.266667rem;
	}
	

</style>
