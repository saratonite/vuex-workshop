import Vue from 'vue'

import router from'./routes'

import store from './store'

/* Import Global Styles*/

var BootstrapCSS = require('../node_modules/bootstrap/dist/css/bootstrap.css'); 

import gCSS from './css/main.css'

import Navigation from './components/Navigation';





/* Import Components */





/* eslint-disable no-new */

var app = Vue.extend({
	store,
	components:{
		Navigation

	}
});

router.start(app,'body');
