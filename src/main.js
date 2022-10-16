import "babel-polyfill";
import Vue from "vue";
import App from "./App";
import router from "./router";
import fastclick from "fastclick";

import "common/stylus/index.styl";

// 目的：为了让body下的所有按钮没有300ms的延时
fastclick.attach(document.body);
// eslint-disable-next-line no-multiple-empty-lines

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router
});
