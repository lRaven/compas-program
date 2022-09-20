<template>
	<section class="the-projects" id="projects" ref="section">
		<div class="the-projects__container center">
			<img
				src="/img/icon/arrow-triangle.svg"
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
						v-if="Object.keys(selectedProject).length > 0"
						:slides="selectedProject.slides"
						:xPosition="sliderCoordinates.x"
						:yPosition="sliderCoordinates.y"
					></project-card-slider>
				</transition>
			</div>

			<div class="the-projects__archive">
				<p class="the-projects__archive-title">2022 Архив</p>
				<ul class="the-projects__archive-list">
					<li
						class="the-projects__archive-project"
						v-for="project in projects_archive"
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

			<r-button
				color="bordered"
				text="Получить смету"
				class="the-projects__btn"
			></r-button>
		</div>
	</section>
</template>

<script>
	import { mapState } from "vuex";

	import ProjectCard from "@/components/projects/ProjectCard.vue";
	import ProjectCardSlider from "@/components/projects/ProjectCardSlider.vue";

	export default {
		name: "TheProjects",
		components: {
			ProjectCard,
			ProjectCardSlider,
		},
		watch: {
			yPosition: {
				handler() {
					this.$emit("update:modelValue", this.yPosition);
				},
				deep: true,
			},
		},
		data: () => ({
			selectedProject: {},
			sliderCoordinates: {},

			yPosition: {},
		}),
		computed: {
			...mapState({
				projects: (state) => state.projects.projects,
				projects_archive: (state) => state.projects.projects_archive,
			}),
		},
		methods: {
			getSectionPositionY() {
				this.yPosition = {
					relative: this.$refs.section.getBoundingClientRect().y,
					absolute: this.$refs.section.offsetTop,
				};
			},

			trackPageScrolling(setListener) {
				if (setListener) {
					document.addEventListener(
						"scroll",
						this.getSectionPositionY
					);
				} else {
					document.removeEventListener(
						"scroll",
						this.getSectionPositionY
					);
				}
			},
		},
		mounted() {
			this.trackPageScrolling(true);
		},
		beforeUnmount() {
			this.trackPageScrolling(false);
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
		}
		&__title {
			text-align: center;
			transform: translateX(15rem);
			margin-bottom: 16rem;
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
			margin-bottom: 25rem;

			.project-card {
				&:nth-child(2) {
					height: 70rem;
					width: 70rem;
				}
				&:nth-child(3) {
					width: 123rem;
					margin: auto;
				}
				&:nth-child(4) {
					height: 60rem;
					width: 60rem;
					transform: translateY(50%);
				}
				&:nth-child(5) {
					margin-right: auto;
				}
			}
		}

		&__archive {
			margin: 0 25rem 16rem auto;
			width: max-content;
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
				font-size: 2rem;
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
			font-size: 3.2rem;
			padding: 3.6rem;
			border-radius: 9rem;
		}
	}
</style>
