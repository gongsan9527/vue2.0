<template>
	<div class="table-header">
		<span class="table-header-li" :class="{active:listIndex == $index}" v-for="(item,$index) in nameList" @click="getListData($index)">{{item}}</span>
	</div>
</template>


<script>

	import { mapActions } from 'vuex'
	import { Indicator } from 'mint-ui'

	export default {
		data () {
			return {
				'listIndex': 0
			}
		},
		props: [
			'nameList'
		],
		methods: {
			getListData (index) {
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
	   			setView:'VIEW_ACTION'
	   		})
		}
	}
</script>

<style>
	.table-header {
		height: 0.613333rem;
		width: 100%;
		text-align: center;	
	}
	.table-header-li {
		display: inline-block;
		padding-bottom: 0.213333rem;
		width: 2.133333rem;
		font-size: 0.373333rem;
		color: #1ac600;
		font-family: '微软雅黑';
	}
	.table-header .active {
		border-bottom: 1px solid #1ac600;
	}
</style>