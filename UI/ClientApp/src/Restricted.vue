<template>
  <div id="restricted"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export default class Restricted extends Vue {}
</script>

<style lang="stylus">
.is-rounded img {
  border-radius: 300000px;
}

figure {
  margin-right: 0.5rem;
}

.is-leveled {
  justify-content: space-between;
}
</style>
