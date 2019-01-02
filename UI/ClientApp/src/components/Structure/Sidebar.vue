<template>
  <div>
    <div class="column is-4-tablet is-3-desktop is-2-widescreen">
      <aside class="menu">
        <p class="menu-label">General</p>
        <ul class="menu-list">
          <li>
            <router-link to="/dashboard">
              <span class="icon">
                <b-icon icon="tachometer-alt" size="is-small"/>
              </span>
              Dashboard
            </router-link>
          </li>
          <li>
            <router-link to="/users">
              <span class="icon">
                <b-icon icon="address-book" size="is-small"/>
              </span>
              Users
            </router-link>
          </li>
          <li>
            <router-link to="/contributions">
              <span class="icon">
                <b-icon icon="file-invoice-dollar" size="is-small"/>
              </span>
              Contributions
            </router-link>
          </li>
        </ul>
        <p class="menu-label">Administration</p>
        <ul class="menu-list">
          <li>
            <a>Team Settings</a>
          </li>
          <li>
            <a class="is-active">Manage Your Team</a>
            <ul>
              <li>
                <a>Members</a>
              </li>
              <li>
                <a>Plugins</a>
              </li>
              <li>
                <a>Add a member</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Invitations</a>
          </li>
          <li>
            <a>Cloud Storage Environment Settings</a>
          </li>
          <li>
            <a>Authentication</a>
          </li>
        </ul>
        <p class="menu-label">Transactions</p>
        <ul class="menu-list">
          <li>
            <a>Payments</a>
          </li>
          <li>
            <a>Transfers</a>
          </li>
          <li>
            <a>Balance</a>
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