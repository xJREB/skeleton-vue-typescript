// Internal global dependencies
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
// bootswatch theme
import "bootswatch/dist/yeti/bootstrap.min.css";

import "./index.html";

// IE polyfills
import "core-js/es6/array";
import "core-js/es6/string";
import "core-js/es7/array";

import BootstrapVue from "bootstrap-vue";
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./components/App.vue";

Vue.use(BootstrapVue);
Vue.use(VueRouter);

// Import custom filters that are globally usable in Vue components
import "./common/filters";

// Routes
import routes from "./routes";
const router = new VueRouter({
    routes
});

// Kick start the main Vue component
window.onload = () => {
    const app = new Vue({
        el: ".app",
        router,
        render: (h) => h(App)
    });
};
