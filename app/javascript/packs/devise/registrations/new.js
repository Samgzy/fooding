import Vue from 'vue/dist/vue.esm';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import DeviseRegistrationsNewView from 'views/devise/registrations/new.vue';

// register ElementUI
Vue.use(ElementUI);

// creating a new vue instance
const integrationIndex = new Vue({
  el: '#devise-registrations-new-view',
  // register all used components for a view
  components: {
    'devise-registrations-new-view': DeviseRegistrationsNewView
  }
});
