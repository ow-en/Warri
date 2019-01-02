<template>
  <div>
    <navbar/>
    <sidebar/>
    <slot/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Navbar from "@/components/Structure/Navbar.vue";
import Sidebar from "@/components/Structure/Sidebar.vue";

@Component({
  components: {
    Navbar,
    Sidebar
  }
})
export default class Default extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" scoped>
</style>