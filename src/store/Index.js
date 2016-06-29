import Vue from 'vue'
import Vuex from 'vuex'

const state = {
	count:0
}

const mutations = {
	COUNTER_INCREMENT (state) {
		state.count++;
	},
	COUNTER_DECREMENT (state){
		state.count--;
	},
	COUNTER_UPDATE (state,value){
		state.count = value;
	}
}

Vue.use(Vuex);

export  default new Vuex.Store({
	state,
	mutations
});