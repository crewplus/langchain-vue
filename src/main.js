import Vue from 'vue'

import App from './App.vue'
import i18n from './lang'
import hljs from 'highlight.js';
// choose a predefined style
import "highlight.js/styles/github.css";

Vue.config.productionTip = false

Vue.use(hljs);          // highlight markdown/code

// add directive v-highlight
Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});

// add hljs handler 
// Vue.prototype.$hljs = hljs;

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app');
