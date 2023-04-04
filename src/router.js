import Vue from 'vue'
import Router from 'vue-router'
import unregistered_area from './components/Unregistered_Area'
import registered_area from './components/Registered_Area'
import home from './components/Home'
import products from './components/Products.vue'
import contact from './components/Contact.vue'
import info from './components/Info.vue'
import login from './components/Login.vue'
import register from './components/Register.vue'
import account from './components/Account.vue'
import failureplan from './components/failurePlan.vue'
import report from './components/Report.vue'
import chat from './components/Chat.vue'
import {Guard} from './Guards'
import {i18n} from './i18n'
import { Trans } from './Translation'





Vue.use(Router)


//const Home = { template: '<div>Welcome to Stack Abuse!</div>' }
const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path:'/',
      redirect:`${i18n.locale}`
    },
    {
    path: '/:lang',
    component: {
      render(c) {return c('router-view')}
    },
    bforeEach:Guard.beforeEach,
    beforeEnter:Trans.routeMiddleware,
  children: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: 'unregistered_area',
      name: 'unregistered_area',
      component: unregistered_area
    },
    {
      path: 'registered_area',
      name: 'registered_area',
      component: registered_area
    },
    {
      path: 'unregistered_area/products',
      name: 'products',
      component: products
    },
    {
      path: 'unregistered_area/contact',
      name: 'contact',
      component: contact
    },
    {
      path: 'unregistered_area/products/compnents/info',
      name: 'info',
      component: info
    },
    {
      path: 'registered_area/login',
      name: 'login',
      component: login,
      meta:{
        requiresGuest: true
      }
    },
    {
      path: 'registered_area/register',
      name: 'register',
      component: register,
      meta:{
        requiresGuest: true
      }
    },
    {
      path: 'registered_area/account',
      name: 'account',
      component: account,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: 'registered_area/account/failureplan',
      name: 'failureplan',
      component: failureplan,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: 'registered_area/account/failureplan/report',
      name: 'report',
      component: report,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: 'registered_area/account/chat',
      name: 'chat',
      component: chat,
      meta:{
        requiresAuth: true
      }
    },
  ],
}
]
});



export default (router);

