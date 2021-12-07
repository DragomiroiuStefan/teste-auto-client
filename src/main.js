import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import Menubar from 'primevue/menubar';
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';   

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.component('Menubar', Menubar);
app.component('Dropdown', Dropdown);
app.component('Dialog', Dialog);
app.component('Button', Button);

app.mount('#app')
