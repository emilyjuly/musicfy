import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faHeart, faMusic, faChevronLeft, faChevronRight, faBars} from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faHeart, faMusic, faChevronLeft, faBars,faChevronRight)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router);

app.mount('#app')
