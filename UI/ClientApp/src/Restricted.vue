<template>
  <div id="restricted">
    <div class="routing"></div>
    <nav class="navbar has-shadow is-fixed-top is-dark">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="../public/img/icons/msapplication-icon-144x144.png">
        </a>
        <div class="navbar-burger burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <small>The Warri Initiative: Connecting developers across continents.</small>
          </div>
        </div>
        <div id="navBarStart" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">Home</a>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" v-if="!loggedIn">
                <strong>Sign up</strong>
              </a>
            </div>
          </div>
          <user-menu-logged-in v-if="loggedIn"/>
          <user-menu-logged-out v-if="!loggedIn"/>
        </div>
      </div>
    </nav>
    <section class="section">
      <div class="columns">
        <div class="column is-4-tablet is-3-desktop is-2-widescreen">
          <aside class="menu">
            <p class="menu-label">Menu</p>
            <ul class="menu-list">
              <li>
                <router-link to="/dashboard">
                  <span class="icon">
                    <b-icon icon="tachometer-alt"/>
                  </span>
                  Dashboard
                </router-link>
              </li>
              <li>
                <router-link to="/users">
                  <span class="icon">
                    <b-icon icon="address-book"/>
                  </span>
                  Users
                </router-link>
              </li>
              <li>
                <router-link to="/contributions">
                  <span class="icon">
                    <b-icon icon="file-invoice-dollar"/>
                  </span>
                  Contributions
                </router-link>
              </li>
            </ul>
          </aside>
        </div>

        <main class="column">
          <transition>
            <router-view/>
          </transition>
        </main>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import UserMenuLoggedIn from "@/components/Menus/UserMenuLoggedIn.vue";
import UserMenuLoggedOut from "@/components/Menus/UserMenuLoggedOut.vue";

@Component({
  components: {
    UserMenuLoggedIn,
    UserMenuLoggedOut
  }
})
export default class Restricted extends Vue {
  loggedIn = false;
}
</script>

<style lang="stylus">
.is-rounded img {
  border-radius: 300000px;
}

figure {
  margin-right: 0.5rem;
}

.is-leveled {
  justify-content: space-between;
}
</style>
