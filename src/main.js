import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faEye, faForward} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

library.add(faForward,faEye)

  
const quizApp = createApp(App)
    quizApp.component("font-awesome-icon", FontAwesomeIcon)
    quizApp.use(router)
    quizApp.use(store)
    quizApp.use(VueSweetalert2)
    quizApp.mount('#app')



