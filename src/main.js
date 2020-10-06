import { createApp } from "vue";
import router from "./router";
import store from "./store/index";
// import { createStore } from "./store/index";
import "@/assets/scss/index.scss";

import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.use(store);
// app.use(createStore());s

app.mount("#app");
