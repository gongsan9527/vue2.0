<template>
	<div class="index-container">
		<HeaderMenu></HeaderMenu>
		<Search></Search>
		<Slide></Slide>
		<div class="table-header-container">
			<TableHeader :name-list.once="nameList"></TableHeader>
		</div>
		<IndexList></IndexList>
	</div>
</template>

<script>

	import HeaderMenu from './HeaderMenu.vue'
	import Search from './Search.vue'
	import Slide from './Slide.vue'
	import TableHeader from './TableHeader.vue'
	import IndexList from './IndexList.vue'

	export default {
		data () {
			return {
				nameList:['推荐','热门']
			}
		},
		components: {
			HeaderMenu,
			Search,
			Slide,
			TableHeader,
			IndexList
		},
		mounted (){
			
		}
	}

</script>

<style>
	
	.table-header-container {
		margin-top: 0.266667rem;
	}

</style>
