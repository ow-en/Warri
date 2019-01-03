<template>
  <div class="navbar-menu">
    <div class="navbar-end">
      <b-dropdown v-model="navigation" position="is-bottom-left">
        <a class="navbar-item" slot="trigger">
          <span>Menu</span>
          <b-icon icon="angle-down"></b-icon>
        </a>

        <b-dropdown-item custom>
          Logged In as
          <b>Owen Caulfield</b>
        </b-dropdown-item>
        <hr class="dropdown-divider">
        <b-dropdown-item has-link>
          <a href="https://google.com" target="_blank">
            <b-icon icon="link"/>&nbsp;Google (link)
          </a>
        </b-dropdown-item>
        <b-dropdown-item value="home">
          <b-icon icon="home"/>&nbsp;Home
        </b-dropdown-item>
        <b-dropdown-item value="products">
          <b-icon icon="shopping-cart"></b-icon>&nbsp;Products
        </b-dropdown-item>
        <b-dropdown-item value="blog" disabled>
          <b-icon icon="book-open"/>&nbsp;Blog
        </b-dropdown-item>
        <hr class="dropdown-divider">
        <b-dropdown-item value="settings">
          <b-icon icon="cog"/>&nbsp;Settings
        </b-dropdown-item>
        <b-dropdown-item value="logout">
          <b-icon icon="sign-out-alt"/>&nbsp;Logout
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class UserMenuLoggedIn extends Vue {
  navigation: string = "home";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" scoped>
</style>
