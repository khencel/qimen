

require('./bootstrap');

window.token = document.getElementsByName("user-token")[0].content;

import BootstrapVue from 'bootstrap-vue'
import Form from 'vform'
import Notifications from 'vue-notification';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

import VueHtmlToPaper from 'vue-html-to-paper';

const options = {
    name: '_blank',
    specs: [
      'fullscreen=yes',
      'titlebar=yes',
      'scrollbars=yes'
    ],
    styles: [
      'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    ]
}


window.Vue = require('vue');
window.Form = Form;

Vue.component('pulseLoader',PulseLoader);
Vue.use(BootstrapVue);
Vue.use(Notifications)
Vue.use(VueHtmlToPaper, options);




// chart
require('./components/chart/RegisterComponent');

// modal
require('./components/modal/RegisterComponent');

//user
require('./components/user/RegisterComponent');

// setting
require('./components/setting/RegisterComponent');


//user side
require('./components/user-side/RegisterComponent');

//year chart
require('./components/year-chart/RegisterComponent');

//landing page
require('./components/landing-page/RegisterComponent');

// trigram Management
require('./components/trigram/RegisterComponent');

//Stem
require('./components/stem/RegisterComponent');

// door
require('./components/door/RegisterComponent');

// star
require('./components/star/RegisterComponent');

// deitie
require('./components/deitie/RegisterComponent');

//hour chart
require('./components/chart/hour-chart/RegisterComponent')

//search
require('./components/search/RegisterComponent')

Vue.component(
    'chart-tab',
    ()=>import('./components/TabChart.vue')
);

const app = new Vue({
    el: '#app',
});

