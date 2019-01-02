<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  get layout() {
    const default_layout = "default";
    return this.$route.meta.layout || default_layout;
  }
}
</script>

<style lang="sass" src="bulma">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
