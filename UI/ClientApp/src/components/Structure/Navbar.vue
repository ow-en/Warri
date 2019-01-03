<template>
  <div>
    <nav class="navbar has-shadow is-light">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="@/assets/bulma-logo.png" width="112" height="28">
        </a>
        <a class="navbar-item">
          <b-icon pack="fab" icon="github"></b-icon>
        </a>
        <a class="navbar-item">
          <b-icon pack="fab" icon="twitter" type="is-info"></b-icon>
        </a>
        <a class="navbar-item">
          <b-icon pack="fab" icon="medium" type="is-success"></b-icon>
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
            <small>Warri Connect: Development across continents.</small>
          </div>
        </div>
        <div id="navBarStart" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item is-active">Home</a>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <user-menu-logged-out v-if="!loggedIn"/>
              <a class="button is-primary" v-if="!loggedIn">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
      <user-menu-logged-in v-if="loggedIn"/>
    </nav>
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
export default class Navbar extends Vue {
  loggedIn: boolean = true;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" scoped>
</style>