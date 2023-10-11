import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Sidebar from 'primevue/sidebar';
import Chart from 'primevue/chart';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import Dropdown from 'primevue/dropdown';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Card from 'primevue/card';
import Message from 'primevue/message';
import Badge from 'primevue/badge';
import BadgeDirective from 'primevue/badgedirective';
import Menu from 'primevue/menu';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import Button from 'primevue/button';






const app = createApp(App);
app.use(PrimeVue, { unstyled: false });
app.component('Sidebar', Sidebar);
app.component('InputText', InputText);
app.component('Avatar', Avatar);
app.component('Menu', Menu);
app.component('Chart', Chart);
app.component('Dropdown', Dropdown);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('Badge', Badge);
app.component('Message', Message);
app.component('Card', Card);
app.directive('badge', BadgeDirective);
app.component('Row', Row);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('DataTable', DataTable);
app.component('Button', Button);

app.mount('#app')
