import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'

import components from '@/components/UI'

import Toast, { POSITION } from "vue-toastification"
import "vue-toastification/dist/index.css"

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

app.mount('#app')
