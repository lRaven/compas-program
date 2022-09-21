import { createStore } from 'vuex'

import projects from '@/store/modules/projects'

export default createStore({
	state: {
		documentWidth: document.documentElement.clientWidth,
	},
	getters: {
	},
	mutations: {
		SET_DOCUMENT_WIDTH: (state, payload) => state.documentWidth = payload,
	},
	actions: {
		getDocumentWidth: async (context) => {
			await context.commit('SET_DOCUMENT_WIDTH', document.documentElement.clientWidth);
			await window.addEventListener("resize", () => {
				setTimeout(() => {
					context.commit('SET_DOCUMENT_WIDTH', document.documentElement.clientWidth);
				}, 100);
			});
		},
	},
	modules: {
		projects,
	}
})
