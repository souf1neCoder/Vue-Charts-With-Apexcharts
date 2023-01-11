import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import VueApexCharts from "vue3-apexcharts";
import router from './router'

createApp(App).use(router).use(VueApexCharts).mount('#app')
