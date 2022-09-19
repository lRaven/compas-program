import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import(/* webpackChunkName: "home" */ '@/views/PageHome.vue'),

		meta: { title: 'Compas Pro', }
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
