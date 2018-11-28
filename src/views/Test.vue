<template>
    <div>
        <h1>Test View</h1>
        <p>
            Hi, this is a test! Read this message:
            <span>{{message}}</span>
        </p>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class extends Vue {

    private message = "This is a message.";

};
</script>

<style lang="less" scoped>
span {
  color: red;
}
</style>
