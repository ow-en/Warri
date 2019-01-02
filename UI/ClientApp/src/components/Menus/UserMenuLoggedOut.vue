<template>
  <div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <b-dropdown position="is-bottom-left">
          <div class="navbar-item" slot="trigger">
            <button class="button" type="button">
              <b-icon icon="angle-down"/>
              <span>Login</span>
            </button>
          </div>

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