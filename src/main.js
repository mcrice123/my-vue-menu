import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal';

Vue.config.productionTip = false

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding && binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    }
    window.addEventListener('scroll', f)
  }
});

Vue.use(VModal);

new Vue({
  render: h => h(App),
}).$mount('#app')
