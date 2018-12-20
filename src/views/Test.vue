<template>
  <div>
    <h1>Test View for AJAX Request</h1>
    <p>
      Number of stars for Vue.js on
      <a href="https://github.com/vuejs/vue">GitHub</a>:
      <span>{{starGazers}}</span>
      <fa-icon icon="star"></fa-icon>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

@Component({})
export default class extends Vue {
  private starGazers = 0;

  private async mounted() {
    // Using axios to fetch info about the Vue.js repo from the GitHub API via an HTTP GET request
    this.starGazers = (await axios.get(
      `https://api.github.com/repos/vuejs/vue`
    )).data.stargazers_count;
  }
}
</script>

<style lang="less" scoped>
span {
  color: lawngreen;
}
</style>
