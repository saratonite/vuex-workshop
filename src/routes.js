import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

var router = new VueRouter();

// Components

import HomePage from './components/pages/Home'


router.map({

	'/': {
		component: HomePage
	},
	'/contact': {
		component: {
			template:"<h2>Contact</h2>"
		}
	}

});

export default router;