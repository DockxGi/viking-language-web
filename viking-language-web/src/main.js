
import { createApp } from 'vue'
import App from './App.vue'

let app = createApp(App);

app.config.errorHandler = (err => {
    console.error('unexpected error', err);
});

app.mount('#app')
