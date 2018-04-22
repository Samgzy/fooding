import Vue from 'vue/dist/vue.esm';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import DeviseSessionsNewView from 'views/devise/sessions/new.vue';

// register ElementUI
Vue.use(ElementUI);

// creating a new vue instance
const integrationIndex = new Vue({
  el: '#devise-sessions-new-view',
  // register all used components for a view
  components: {
    'devise-sessions-new-view': DeviseSessionsNewView
  }
});
