import Vue from "vue";
import App from "./App.vue";
import { router } from "@/helpers";
import store from "./store";
import "./registerServiceWorker";
import "./../node_modules/bulma/css/bulma.css";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import Default from "@/layouts/Default.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("default", Default);
Vue.component("empty-layout", EmptyLayout);
Vue.use(Buefy, {
  defaultIconPack: "fas"
});

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
