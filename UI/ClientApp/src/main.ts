import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./../node_modules/bulma/css/bulma.css";
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLock,
  faEnvelope,
  faUserCircle,
  faHandHoldingHeart,
  faSignOutAlt,
  faTachometerAlt,
  faAddressBook,
  faFileInvoiceDollar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faEnvelope,
  faLock,
  faUserCircle,
  faHandHoldingHeart,
  faSignOutAlt,
  faTachometerAlt,
  faAddressBook,
  faFileInvoiceDollar
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(Buefy);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
