import Vue from 'vue';
import SemanticUI from 'semantic-ui-vue'; // it is just importing the components of semantic ui library
import 'semantic-ui-css/semantic.min.css'; // it has css of all semantic ui components

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(SemanticUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
