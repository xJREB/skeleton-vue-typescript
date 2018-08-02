import MainView from "./components/Main.vue";
import TestView from "./components/Test.vue";

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
