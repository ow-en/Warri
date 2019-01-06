import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export const router = new Router({
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
      path: "/registration",
      name: "registration",
      meta: { layout: "empty" },
      component: require("@/components/Registration.vue").default
    },
    {
      path: "/404",
      name: "NotFound",
      meta: { layout: "empty" },
      component: require("@/components/PageNotFound.vue").default
    },
    {
      path: "*",
      redirect: "/404"
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

// redirect to login page ('/') if not logged in and attempting to access a restricted page
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  const publicPages = ["/", "registration"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    return next("/");
  }

  next();
});
