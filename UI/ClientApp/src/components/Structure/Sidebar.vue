<template>
  <div>
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

    <main class="column"></main>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Sidebar extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" scoped>
</style>