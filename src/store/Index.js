import Vue from 'vue'
import Vuex from 'vuex'

const state = {
	count:54
}

const mutations = {
	COUNTER_INCREMENT (state) {
		state.count++;
	},
	COUNTER_DECREMENT (state){
		state.count--;
	}
}

Vue.use(Vuex);

export  default new Vuex.Store({
	state,
	mutations
});