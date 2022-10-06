import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'

import Vuelidate from 'vuelidate'

import Toast, { POSITION } from "vue-toastification"
import "vue-toastification/dist/index.css"

import components from '@/components/UI'

import '@/registerServiceWorker'

const app = createApp(App)

for (const key in components) {
	if (Object.hasOwnProperty.call(components, key)) {
		app.component(key, components[key]);
	}
}

app.use(router)
app.use(store)
app.use(Toast,
	{
		position: POSITION.BOTTOM_RIGHT,
		newestOnTop: false,
	}
)
app.use(Vuelidate)

app.mount('#app')
