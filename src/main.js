import {createApp} from 'vue'
import App from './App.vue'
import router from './router';

import InfiniteScroll from 'vue-infinite-scroll';

// createApp(App).mount('#app')
const app = createApp(App);

app.use(router);
app.use(InfiniteScroll);

app.mount('#app');