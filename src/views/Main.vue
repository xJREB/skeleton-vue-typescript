<template>
    <div>
        <h1>Main View</h1>
        <div class="jumbotron">
            <h1>{{message}}</h1>
            <hr class="my-4" />
            <p>
                It uses utility classes for typography and spacing to position content out within the larger container.
                <fa-icon icon="comment-dots"></fa-icon>
            </p>
            <div class="form-inline">
                <input type="text" class="form-control" v-model="userInput" placeholder="Type something..." />
                <button class="btn btn-primary" v-on:click="openAlert(userInput)" v-bind:disabled="userInput === ''">
                    <fa-icon icon="arrow-right"></fa-icon>&nbsp;Click me!
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class extends Vue {
    private message = "Hello, world!";
    private userInput = "";

    // Executed when the DOM is ready
    public mounted() {
        console.log("Ready for business...");
    }

    public openAlert(msg: string) {
        alert(msg);
    }
}
</script>

<style lang="less" scoped>
.jumbotron {
    padding: 60px;
}
</style>
