import { createApp } from 'vue';
import './Style/general.scss';

import App from './App.vue';
import { router } from './router';
import 'bootstrap/js/dist/carousel.js'


createApp(App).use(router).mount('#app')
