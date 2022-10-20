<template>
	<div
		class="project-card-slider"
		:style="`left: ${xPosition}px; top: ${yPosition}px`"
	>
		<h4 class="project-card-slider__description">ПЕРЕЙТИ</h4>
		<div class="project-card-slider__body">
			<div class="project-card-slider__dots">
				<span class="project-card-slider__dot"></span>
				<span class="project-card-slider__dot"></span>
				<span class="project-card-slider__dot"></span>
			</div>
			<img
				class="project-card-slider__slide"
				:class="{ active: slide.id === numberOfSlide }"
				:src="slide.image"
				alt=""
				v-for="slide in slides"
				:key="slide.id"
			/>
		</div>
	</div>
</template>

<script>
	import { ref, computed, onMounted } from 'vue';

	export default {
		name: 'ProjectCardSlider',
		props: {
			slides: {
				value: Array,
				required: true,
			},
			xPosition: Number,
			yPosition: Number,
		},
		setup(props) {
			const numberOfSlide = ref(1);
			const slidesLength = computed(() => {
				if (props.slides) {
					return props.slides.length;
				} else return 0;
			});
			const incrementSlide = () => {
				if (numberOfSlide.value >= slidesLength.value) numberOfSlide.value = 0;
				numberOfSlide.value++;
			};
			const changeSlides = () => {
				setTimeout(() => {
					if (slidesLength.value) {
						incrementSlide();
						changeSlides();
					} else {
						numberOfSlide.value = 1;
					}
				}, 1500);
			};

			onMounted(() => {
				if (slidesLength.value) changeSlides();
			});

			return {
				numberOfSlide,
				incrementSlide,
				changeSlides,
				slidesLength,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.project-card-slider {
		pointer-events: none;
		position: absolute;
		z-index: 3;
		width: 70rem;
		height: 40rem;
		transition: all 0.1s ease;
		@media (max-width: 767px) {
			width: calc(100vw - 3rem);
		}
		@media (max-width: 540px) {
			height: 30rem;
		}

		&__description {
			background-color: $white;
			display: inline-block;
			border-radius: 6rem;
			padding: 1rem 4rem;
			margin: 0 0 1.6rem 6rem;
		}

		&__body {
			border-radius: 2.4rem;
			background: rgba($white, 0.35);
			backdrop-filter: blur(0.5rem);
			padding: 2.7rem 0.5rem 0.5rem 0.5rem;
			position: relative;
			display: grid;
			grid-template-rows: 100%;
			height: 100%;
		}
		&__slide {
			border-radius: 2.4rem;
			grid-area: 1/1;
			opacity: 0;
			transition: all 0.3s ease;
			max-width: 100%;
			width: 100%;
			height: 100%;
			object-fit: cover;
			&.active {
				opacity: 1;
			}
		}

		&__dots {
			position: absolute;
			top: 0.9rem;
			left: 3rem;
			display: flex;
			align-items: center;
			gap: 1rem;
		}
		&__dot {
			height: 0.9rem;
			width: 0.9rem;
			border-radius: 50%;
			background-color: rgba($white, 0.4);
		}
	}
</style>
