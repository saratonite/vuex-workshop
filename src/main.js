import Vue from 'vue'

import router from'./routes'

import store from './store'

console.log(store);

/* Import Components */





/* eslint-disable no-new */

var app = Vue.extend({
	store,
	components:{

	}
});

router.start(app,'body');
