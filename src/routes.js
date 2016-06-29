import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

var router = new VueRouter();

// Components

import HomePage from './components/pages/Home'
import ContactPage from './components/pages/Contact'


router.map({

	'/': {
		component: HomePage
	},
	'/contact': {
		component: ContactPage
	}

});

export default router;