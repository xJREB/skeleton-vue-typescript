import MainView from "./views/Main.vue";
import TestView from "./views/Test.vue";

export default [
    {
        name: "Home",
        path: "/",
        component: MainView
    },
    {
        name: "Test",
        path: "/test",
        component: TestView
    }
];
