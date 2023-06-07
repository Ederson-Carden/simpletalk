import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css';

Vue.config.productionTip = false
Vue.use(Vant);
import { Toast } from 'vant';

Vue.use(Toast);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
