const state = () => ({
	projects: [
		{
			id: 1,
			image: "/img/projects/project-1.jpg",
			name: "Название",
			type: "UiUx/Упаковка",
			year: 2022,
			slides: [
				{ id: 1, image: "/img/projects/project-1.jpg" },
				{ id: 2, image: "/img/projects/project-2.jpg" },
				{ id: 3, image: "/img/projects/project-3.jpg" },
				{ id: 4, image: "/img/projects/project-4.jpg" },
				{ id: 5, image: "/img/projects/project-5.jpg" },
			],
			link: '',
		},
		{
			id: 2,
			image: "/img/projects/project-2.jpg",
			name: "Название",
			type: "UiUx/Упаковка",
			year: 2022,
			slides: [
				{ id: 1, image: "/img/projects/project-2.jpg" },
				{ id: 2, image: "/img/projects/project-3.jpg" },
				{ id: 3, image: "/img/projects/project-4.jpg" },
				{ id: 4, image: "/img/projects/project-5.jpg" },
				{ id: 5, image: "/img/projects/project-1.jpg" },
			],
			link: '',
		},
		{
			id: 3,
			image: "/img/projects/project-3.jpg",
			name: "Название",
			type: "UiUx/Упаковка",
			year: 2022,
			slides: [
				{ id: 1, image: "/img/projects/project-3-slide-1.jpg" },
				{ id: 2, image: "/img/projects/project-3.jpg" },
				{ id: 3, image: "/img/projects/project-4.jpg" },
				{ id: 4, image: "/img/projects/project-5.jpg" },
				{ id: 5, image: "/img/projects/project-1.jpg" },
				{ id: 6, image: "/img/projects/project-2.jpg" },
			],
			link: '',
		},
		{
			id: 4,
			image: "/img/projects/project-4.jpg",
			name: "Название",
			type: "UiUx/Упаковка",
			year: 2022,
			slides: [
				{ id: 1, image: "/img/projects/project-4.jpg" },
				{ id: 2, image: "/img/projects/project-5.jpg" },
				{ id: 3, image: "/img/projects/project-1.jpg" },
				{ id: 4, image: "/img/projects/project-2.jpg" },
				{ id: 5, image: "/img/projects/project-3.jpg" },
			],
			link: '',
		},
		{
			id: 5,
			image: "/img/projects/project-5.jpg",
			name: "Название",
			type: "UiUx/Упаковка",
			year: 2022,
			slides: [
				{ id: 1, image: "/img/projects/project-5.jpg" },
				{ id: 2, image: "/img/projects/project-1.jpg" },
				{ id: 3, image: "/img/projects/project-2.jpg" },
				{ id: 4, image: "/img/projects/project-3.jpg" },
				{ id: 5, image: "/img/projects/project-4.jpg" },
			],
			link: '',
		},
	],
	projectsArchive: [
		{ id: 1, name: 'ПРОЕКТ-0.1', link: '' },
		{ id: 2, name: 'ПРОЕКТ-0.2', link: '' },
		{ id: 3, name: 'ПРОЕКТ-0.3', link: '' },
		{ id: 4, name: 'ПРОЕКТ-0.4', link: '' },
		{ id: 5, name: 'ПРОЕКТ-0.5', link: '' },
		{ id: 6, name: '2021', link: '' },
	]
})

const getters = {}

const mutations = {}

const actions = {}

export default {
	state,
	getters,
	mutations,
	actions,
}