<template>
	<section
		class="the-projects"
		:style="`background-color: ${bgColor}`"
		id="projects"
		ref="section"
	>
		<div class="the-projects__container center">
			<div class="the-projects__header">
				<h1 class="the-projects__title">Портфолио</h1>
				<img
					src="/img/icons/arrow-triangle.svg"
					alt="arrow"
					class="the-projects__arrow"
				/>
			</div>

			<div class="the-projects__list">
				<project-card
					v-for="project in projects"
					:key="project.id"
					:project="project"
					v-model="selectedProject"
					v-model:slider="sliderCoordinates"
				></project-card>

				<transition mode="out-in" name="fade">
					<project-card-slider
						v-if="
							Object.keys(selectedProject).length > 0 && documentWidth > 767
						"
						:slides="selectedProject.slides"
						:xPosition="sliderCoordinates.x"
						:yPosition="sliderCoordinates.y"
					></project-card-slider>
				</transition>

				<div class="the-projects__archive">
					<p class="the-projects__archive-title">2022 Архив</p>
					<ul class="the-projects__archive-list">
						<li
							class="the-projects__archive-project"
							v-for="project in projectsArchive"
							:key="project.id"
						>
							<a href="#" target="_blank" class="the-projects__archive-link">
								{{ project.name }}
							</a>

							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								v-if="project.id === 1"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M1.225 1L1.225 1.32638L12.6796 1.32638L12.6796 12.9941L13 12.9941L13 1L1.225 1Z"
									fill="#14CF93"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M1.225 13L12.6796 1.6L12.4 1.32638L1 12.7676L1.225 13Z"
									fill="#14CF93"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M1.225 1L1.225 1.32638L12.6796 1.32638L12.6796 12.9941L13 12.9941L13 1L1.225 1Z"
									stroke="#14CF93"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M1.225 13L12.6796 1.6L12.4 1.32638L1 12.7676L1.225 13Z"
									stroke="#14CF93"
								/>
							</svg>
						</li>
					</ul>
				</div>
			</div>

			<div class="the-projects__slider">
				<r-slider
					v-if="documentWidth <= 767"
					sliderId="projects"
					:slides="projects"
					v-model="selectedProjectId"
				></r-slider>
				<div class="the-projects__slider-bottom">
					<p class="the-projects__project-name">{{ selectedProject.name }}</p>
					<div class="the-projects__project-info">
						<p class="the-projects__project-info-value">
							{{ selectedProject.year }}
						</p>
						<p class="the-projects__project-info-value">
							{{ selectedProject.type }}
						</p>
					</div>
				</div>
			</div>

			<r-estimate />
		</div>
	</section>
</template>

<script>
	import { useStore } from 'vuex';
	import { ref, computed, watch } from 'vue';
	import { scroll } from '@/js/scroll';

	import ProjectCard from '@/components/projects/ProjectCard.vue';
	import ProjectCardSlider from '@/components/projects/ProjectCardSlider.vue';
	import rSlider from '@/components/r-slider.vue';
	import rEstimate from '@/components/r-estimate.vue';

	export default {
		name: 'TheProjects',
		components: {
			ProjectCard,
			ProjectCardSlider,
			rSlider,
			rEstimate,
		},

		setup() {
			const store = useStore();

			const documentWidth = computed(() => store.state.documentWidth);
			watch(documentWidth, () => {
				if (documentWidth.value > 767) selectedProject.value = {};
			});

			const projects = computed(() => store.state.projects.projects);
			const projectsArchive = computed(
				() => store.state.projects.projectsArchive
			);

			const selectedProject = ref({});
			const selectedProjectId = ref(null);
			watch(selectedProjectId, () => {
				selectedProject.value = projects.value.find(
					(project) => project.id === selectedProjectId.value
				);
			});

			const sliderCoordinates = ref({});
			const bgColor = computed(() => {
				const colors = ['#9fb0ed', '#e7ed9f', '#d8f5ff', '#9feda7', '#ed9f9f'];

				if (Object.keys(selectedProject.value).length > 0) {
					if (documentWidth.value > 767) {
						return colors[selectedProject.value.id - 1];
					} else return '#f2f2f2';
				} else return '#f2f2f2';
			});

			return {
				documentWidth,
				scroll,

				projects,
				projectsArchive,

				selectedProject,
				selectedProjectId,
				sliderCoordinates,
				bgColor,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-projects {
		position: static;
		transition: all 0.2s ease;
		padding-bottom: 12rem;

		&__header {
			display: flex;
			align-items: flex-end;
			gap: 12rem;
			margin-bottom: 4rem;
		}
		&__arrow {
			height: 7rem;
			width: max-content;
			transform: rotate(90deg);
			@media (max-width: 767px) {
				display: none;
			}
		}
		&__container {
			display: flex;
			flex-direction: column;
			padding-bottom: 5rem;
			@media (min-width: 768px) {
				border-bottom: 0.2rem solid #c9c9c9;
			}
		}

		&__list {
			display: flex;
			align-items: flex-end;
			flex-wrap: wrap;
			justify-content: space-between;
			gap: 12rem;
			margin-bottom: 16rem;
			@media (max-width: 1023px) {
				margin-bottom: 7rem;
			}
			@media (max-width: 767px) {
				display: none;
			}

			.project-card {
				&:nth-child(2) {
					height: 65rem;
					width: 65rem;
					margin-left: auto;
					@media (max-width: 767px) {
						margin-left: 0;
						width: 100%;
					}
				}
				&:nth-child(3) {
					max-width: 123rem;
					margin: auto;
					@media (max-width: 767px) {
						max-width: 50rem;
					}
					@media (max-width: 767px) {
						margin-left: 0;
					}
				}
				&:nth-child(4) {
					align-self: flex-start;
					height: 60rem;
					width: 60rem;

					@media (max-width: 767px) {
						width: 100%;
					}
				}
				&:nth-child(5) {
					margin-left: auto;

					@media (max-width: 767px) {
						margin-left: 0;
					}
				}
			}
		}

		&__archive {
			margin: 0 10rem 0 auto;
			width: max-content;
			order: 3;
			font-family: 'Roboto', sans-serif;
			@media (max-width: 1300px) {
				margin-right: 0;
			}
			@media (max-width: 767px) {
				margin: 0;
				margin-left: auto;
			}
			&-title {
				text-transform: uppercase;
				margin-bottom: 3rem;
				color: $gray;
			}
			&-list {
			}
			&-project {
				cursor: pointer;
				display: flex;
				align-items: center;
				gap: 2rem;
				font-size: $text-l;
				width: max-content;

				+ .the-projects__archive-project {
					margin-top: 0.5rem;
				}
			}
			&-link {
				position: relative;
				color: inherit;
				&::after {
					content: '';
					position: absolute;
					left: 0;
					right: 0;
					bottom: 0;
					height: 0.1rem;
					background-color: $black;
				}
			}
		}

		&__slider {
			margin-bottom: 4rem;
			border-bottom: 0.2rem solid #c9c9c9;
			@media (min-width: 768px) {
				display: none;
			}

			.r-slider {
				margin-bottom: 2.5rem;
			}
		}

		&__project {
			&-name {
				font-family: 'Roboto', sans-serif;
				font-size: 2.4rem;
			}
			&-info {
				font-family: 'Roboto', sans-serif;
				display: flex;
				gap: 2rem;
				margin-bottom: 1rem;
			}
		}
	}
</style>
