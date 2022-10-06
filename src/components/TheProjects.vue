<template>
	<section class="the-projects" id="projects" ref="section">
		<div class="the-projects__container center">
			<img
				src="/img/icons/arrow-triangle.svg"
				alt="arrow"
				class="the-projects__arrow"
			/>
			<h1 class="the-projects__title">Проекты</h1>

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
							Object.keys(selectedProject).length > 0 &&
							documentWidth > 767
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
							<a
								href="#"
								target="_blank"
								class="the-projects__archive-link"
							>
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

			<r-estimate />
		</div>
	</section>
</template>

<script>
	import { mapState } from "vuex";

	import ProjectCard from "@/components/projects/ProjectCard.vue";
	import ProjectCardSlider from "@/components/projects/ProjectCardSlider.vue";
	import rEstimate from "@/components/r-estimate.vue";

	export default {
		name: "TheProjects",
		components: {
			ProjectCard,
			ProjectCardSlider,
			rEstimate,
		},
		data: () => ({
			selectedProject: {},
			sliderCoordinates: {},

			yPosition: {},
		}),
		computed: {
			...mapState({
				projects: (state) => state.projects.projects,
				projectsArchive: (state) => state.projects.projectsArchive,
				documentWidth: (state) => state.documentWidth,
			}),
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-projects {
		position: static;
		&__arrow {
			height: 7rem;
			width: max-content;
			margin-left: auto;
			transform: rotate(180deg) translateX(22.5rem);
			margin-bottom: 8rem;
			@media (max-width: 1600px) {
				transform: rotate(180deg);
			}
			@media (max-width: 1023px) {
				margin-bottom: 6rem;
			}
		}
		&__title {
			text-align: center;
			transform: translateX(15rem);
			margin-bottom: 16rem;
			@media (max-width: 1023px) {
				transform: none;
				text-align: left;
			}
			@media (max-width: 767px) {
				margin-bottom: 3rem;
			}
		}
		&__container {
			display: flex;
			flex-direction: column;
		}

		&__list {
			display: flex;
			align-items: flex-end;
			flex-wrap: wrap;
			justify-content: space-between;
			gap: 16rem;
			margin-bottom: 16rem;
			@media (max-width: 1023px) {
				margin-bottom: 7rem;
			}
			@media (max-width: 767px) {
				gap: 7rem;
				justify-content: flex-start;
				flex-direction: column;
				align-items: flex-start;
			}

			.project-card {
				&:nth-child(2) {
					height: 70rem;
					width: 70rem;
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
					height: 60rem;
					width: 60rem;
					transform: translateY(50%);
					@media (max-width: 1720px) {
						order: 2;
						transform: none;
					}
					@media (max-width: 767px) {
						width: 100%;
					}
				}
				&:nth-child(5) {
					margin-left: auto;
					@media (max-width: 1720px) {
						order: 1;
					}
					@media (max-width: 767px) {
						margin-left: 0;
					}
				}
			}
		}

		&__archive {
			margin: 0 25rem 16rem auto;
			width: max-content;
			order: 3;
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
					content: "";
					position: absolute;
					left: 0;
					right: 0;
					bottom: 0;
					height: 0.1rem;
					background-color: $black;
				}
			}
		}

		&__btn {
			width: 100%;
		}
	}
</style>
