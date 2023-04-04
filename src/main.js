import Vue from 'vue'
import Carousel3d from 'vue-carousel-3d'
import 'bootstrap/dist/css/bootstrap.css'

import BootstrapVue from 'bootstrap-vue'

import router from './router'

import App from './App.vue'

import store from './store'

import axios from 'axios'

import {i18n} from './i18n.js'

//import io from 'socket.io-client'

import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

export const SocketInstance = socketio('http://localhost:3000/');

Vue.use(VueSocketIO,SocketInstance)




Vue.config.productionTip = false
Vue.use(Carousel3d)
Vue.use(BootstrapVue)

// Setting up default vue's http modules for api calls
Vue.prototype.$http = axios;
// Load the token from the localStorage
const token = localStorage.getItem("token");
// Is there is any token then we will simply append default axios authorization headers
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({
  router: router,
  i18n,
  store,
  SocketInstance,
  render: h => h(App),
}).$mount('#app');









