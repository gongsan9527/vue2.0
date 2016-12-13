import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Index = resolve => require(['../components/Index.vue'], resolve)
const ArticleContent = resolve => require(['../components/ArticleContent.vue'], resolve)
const TeamContent = resolve => require(['../components/TeamContent.vue'], resolve)
const Message = resolve => require(['../components/Message.vue'], resolve)
const App = resolve => require(['../App.vue'], resolve)
const Detection = resolve => require(['../components/Detection.vue'], resolve)

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path:'/',
			redirect:'/index'
		},
		{
			path:'/index',
			component: App,
			children: [
				{
					path: '', component: Index
				},
				{
					path: '/detection', component: Detection
				},
				{
					path: '/message', component: Message
				}
			]
		},
		{
			path:'/article/:id',
			component: ArticleContent
		},
		{
			path:'/team/:id',
			component: TeamContent
		}
	],
	scrollBehavior (to, from, savedPosition){
		if(to.path == '/index'){
			return savedPosition;
		}else{
			return {x:0,y:0};
		}
	}
})