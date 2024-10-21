import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/style.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  delay: 50,
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  mirror: true,
});

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(store).use(vuetify).use(router).mount("#app");
