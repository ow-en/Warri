<template>
  <div>
    <div class="navbar-item">
      <b-dropdown position="is-bottom-left">
        <a class="navbar-item" slot="trigger">
          <span>Login</span>
          <b-icon icon="menu-down"></b-icon>
        </a>

        <b-dropdown-item custom paddingless>
          <form action>
            <div class="modal-card" style="width:300px;">
              <section class="modal-card-body">
                <b-field label="Email">
                  <b-input type="email" placeholder="Your email" required></b-input>
                </b-field>

                <b-field label="Password">
                  <b-input type="password" password-reveal placeholder="Your password" required></b-input>
                </b-field>

                <b-checkbox>Remember me</b-checkbox>
              </section>
              <footer class="modal-card-foot">
                <button class="button is-primary">Login</button>
              </footer>
            </div>
          </form>
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class UserMenuLoggedOut extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" scoped>
</style>