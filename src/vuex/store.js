import Vue from "vue";
import Vuex from 'vuex';
import moduleIndex from './modules/moduleIndex.js';
import moduleDetection from './modules/moduleDetection.js';
Vue.use(Vuex);

export default new Vuex.Store({  
	modules : {
		index: moduleIndex,
		detection: moduleDetection
	}
});