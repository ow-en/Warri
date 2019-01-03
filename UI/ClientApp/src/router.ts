import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Restricted from "@/Restricted.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      meta: { layout: "empty" },
      component: require("@/views/LoginPortal.vue").default
    },
    {
      path: "/restricted",
      name: "restricted",
      meta: { layout: "default" },
      component: require("./Restricted.vue").default,
      children: [
        { path: "home", component: Home },
        {
          path: "about",
          name: "about",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/About.vue")
        }
      ]
    }
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active"
});
