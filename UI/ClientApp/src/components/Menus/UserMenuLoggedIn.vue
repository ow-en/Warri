<template>
  <div>
    <div class="navbar-item">
      <b-dropdown>
        <button class="button is-primary" slot="trigger">
          <span>User Menu</span>
          <b-icon icon="menu-down"></b-icon>
        </button>
        <b-dropdown-item>
          <router-link to="/profile" class="navbar-item">
            <div>
              <span class="icon is-small">
                <font-awesome-icon icon="user-circle"/>
              </span>
              Profile
            </div>
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/donate" class="navbar-item">
            <div>
              <span class="icon is-small">
                <font-awesome-icon icon="hand-holding-heart"/>
              </span>
              Donate
            </div>
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/logout" class="navbar-item">
            <div>
              <span class="icon is-small">
                <font-awesome-icon icon="sign-out-alt"/>
              </span>
              Sign Out
            </div>
          </router-link>
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class UserMenuLoggedIn extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" scoped>
</style>
