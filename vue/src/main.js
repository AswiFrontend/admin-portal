import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Sidebar from 'primevue/sidebar';

import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';

import Menu from 'primevue/menu';





const app = createApp(App);
app.use(PrimeVue, { unstyled: false });
app.component('Sidebar', Sidebar);
app.component('InputText', InputText);
app.component('Avatar', Avatar);
app.component('Menu', Menu);
app.mount('#app')
