import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './components/router';


// Import the router instance

// Create the app and add the router
createApp(App).use(router).mount('#app');
