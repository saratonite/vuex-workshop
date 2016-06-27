import Vue from 'vue'
import Vuex from 'vuex'

const state = {
	count:54
}

const mutations = {
	INCREMENT (state) {
		state.count++;
	}
}

Vue.use(Vuex);

export  default new Vuex.Store({
	state,
	mutations
});