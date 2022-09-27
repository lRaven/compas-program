<template>
	<div
		class="project-card"
		@mouseenter="onHoverCard"
		@mouseleave="onLeaveCard"
		@mousemove="onMouseMove"
		@click="openLink('https://compas-pro.ru/portfolio')"
	>
		<img
			:src="project.image"
			alt="bg-image"
			class="project-card__bg"
			:class="{ gray: isCardHover }"
		/>

		<div
			class="project-card__hidden-block"
			:class="{ visible: isCardHover }"
		>
			<h4
				class="project-card__year project-card__el project-card__el_small"
			>
				{{ project.year }}
			</h4>
			<h4
				class="project-card__year project-card__el project-card__el_small"
			>
				{{ project.type }}
			</h4>
		</div>

		<div class="project-card__row">
			<h3 class="project-card__name project-card__el">
				{{ project.name }}
			</h3>

			<div class="project-card__arrow-wrapper">
				<svg
					width="25"
					height="26"
					viewBox="0 0 25 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="project-card__arrow"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M25 25.5125L24.32 25.5125L24.32 0.694239L0.0122727 0.694238L0.0122724 5.36443e-10L25 1.64872e-06L25 25.5125Z"
						fill="#1d1d1d"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M-1.11519e-06 25.5125L24.4785 0.172809L24.9626 0.660312L0.484106 26L-1.11519e-06 25.5125Z"
						fill="#1d1d1d"
					/>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
	import { openLink } from "@/js/openLink";

	export default {
		name: "ProjectCard",
		props: {
			project: {
				value: Object,
				required: true,
			},
		},
		data: () => ({
			isCardHover: false,

			sliderCoordinates: {
				x: 0,
				y: 0,
			},
		}),
		methods: {
			openLink,

			onHoverCard() {
				this.isCardHover = true;
				this.$emit("update:modelValue", this.project);
			},
			onLeaveCard() {
				this.isCardHover = false;
				this.$emit("update:modelValue", {});
			},

			onMouseMove(event) {
				this.sliderCoordinates = {
					x: event.pageX - 20,
					y: event.pageY - 20,
				};

				this.$emit("update:slider", this.sliderCoordinates);
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.project-card {
		cursor: pointer;
		position: relative;
		padding: 3rem;
		border-radius: 7rem;
		height: 88rem;
		max-width: 88rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		overflow: hidden;
		@media (max-width: 767px) {
			border-radius: 2.6rem;
			max-width: 50rem;
			max-height: 34.7rem;
			padding: 1.5rem;
		}

		&__bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: all 0.3s ease;
			&.gray {
				filter: grayscale(1);
			}
		}

		&__row {
			display: flex;
			gap: 2rem;
			z-index: 1;
			@media (max-width: 767px) {
				gap: 1rem;
			}
		}

		&__el {
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: $white;
			border-radius: 7rem;
			padding: 2rem 11.6rem;
			max-width: max-content;
			@media (max-width: 767px) {
				padding: 0.8rem 5.5rem;
			}
			@media (max-width: 540px) {
				padding: 0.8rem 2rem;
			}
			&_small {
				padding: 0.5rem 3rem;
			}
		}
		&__arrow {
			width: 2.5rem;
			min-width: 2.5rem;
			height: 2.5rem;
			@media (max-width: 767px) {
				height: 1.3rem;
				width: 1.3rem;
				min-width: 1.3rem;
			}
			&-wrapper {
				padding: 3rem;
				height: max-content;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				background-color: $white;
				@media (max-width: 767px) {
					padding: 0;
					width: 3.8rem;
					min-width: 3.8rem;
					height: 3.8rem;
				}
			}
		}

		&__year,
		&__type {
			margin-bottom: 2rem;
			@media (max-width: 767px) {
				margin-bottom: 1rem;
			}
		}

		&__hidden-block {
			transform: translateY(30rem);
			transition: transform 0.3s ease;
			z-index: 1;
			&.visible {
				transform: none;
			}
		}

		&__description {
			position: absolute;
			left: 0;
			top: 0;
			z-index: 1;
		}
	}
</style>
