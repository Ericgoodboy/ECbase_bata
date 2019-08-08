import Vue from 'vue'
import App from './App.vue'
import './assets/lib/resert.css'
import './assets/lib/clearfix.css'
import './assets/lib/css/font-awesome.min.css'
import persionInfo from './components/persionInfo/personInfo'
import feedback from './components/feedback'
import publish from './components/publish'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  
  routes: [
    { path: '/publish', component: publish },
    { path: '/', component: persionInfo },
    { path: '/feedback', component: feedback }
  ]
});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
