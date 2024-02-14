import { createApp } from "vue";
import App from "./App.vue";

// import boostrapp css
import "bootstrap/dist/css/bootstrap.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
// import { all } from "@awesome.me/kit-KIT_CODE";

/* add icons to the library */
// library.add(...all);

const app = createApp(App);
app.mount("#app");
app.component("font-awesome-icon", FontAwesomeIcon);
