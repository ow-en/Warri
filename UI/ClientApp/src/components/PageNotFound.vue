<template>
  <div>
    <div class="emoji">
      <img src="@/assets/unicorn.gif" width="250">
    </div>
    <p class="title">404</p>
    <p class="text">Page not found ^__^</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PageNotFound extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" scoped>
html {
  font-size: 62.5%;
}

body {
  background-color: #fff;
  color: #000;
  font-family: helvetica, arial, sans-serif;
  font-size: 1.4em;
  line-height: 1.5;
}

.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.emoji {
  font-size: 9em;
  text-align: center;
}

.title {
  font-size: 3em;
  text-align: center;
  line-height: 0em;
  color: grey;
}

.text {
  text-align: center;
}
</style>