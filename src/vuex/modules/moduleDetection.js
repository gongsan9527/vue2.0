export default {
	state : {
		isView:true
	},
	mutations : {
		SET_DETECTION_VIEW_STATE (state,data) {
			state.isView = data;
		}
	},
	getters : {
		GET_DETECTION_VIEW_STATE: state => {
	    	return state.isView;
	    }
	},
	actions : {
		DETECTION_VIEW_ACTION ({ commit,state }, data) {
		   commit('SET_DETECTION_VIEW_STATE',data);
		}
	}
};


/*	
	vuex 使用方式

	1、引入
	import { mapActions,mapGetters } from 'vuex';

	2、获取属性
	slideArr --> 组件内自定义属性
	getSlideList --> getters 里定义的方法

	computed: {
		...mapGetters({
			slideArr:'getSlideList'  
		})
	}

	3、设置属性
	getSlideList --> 组件内定义的方法
	SLIDE_ACTION --> actions里定义的方法

	methods: {
		...mapActions({
	   		getSlideList:'SLIDE_ACTION'
	   	})
	}
		
*/