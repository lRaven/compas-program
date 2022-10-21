<template>
	<div class="r-slider">
		<button
			type="button"
			class="r-slider__button swiper-button-prev"
			:class="`r-slider__prev-${sliderId}`"
		>
			<svg
				width="12"
				height="8"
				viewBox="0 0 12 8"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="r-slider__button-icon"
			>
				<path
					d="M11 4.5C11.2761 4.5 11.5 4.27614 11.5 4C11.5 3.72386 11.2761 3.5 11 3.5V4.5ZM0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM11 3.5L1 3.5V4.5L11 4.5V3.5Z"
					fill="white"
				/>
			</svg>
		</button>

		<Swiper
			:slides-per-view="1"
			:space-between="20"
			:loop="true"
			:modules="modules"
			:navigation="{
				prevEl: `.r-slider__prev-${sliderId}`,
				nextEl: `.r-slider__next-${sliderId}`,
			}"
			@slide-change="onSlideChange"
		>
			<SwiperSlide v-for="slide in slides" :key="slide.id">
				<img class="r-slider__image" :src="slide.image" :alt="slide.name" />
			</SwiperSlide>
		</Swiper>

		<button
			type="button"
			class="r-slider__button swiper-button-next"
			:class="`r-slider__next-${sliderId}`"
		>
			<svg
				width="12"
				height="8"
				viewBox="0 0 12 8"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="r-slider__button-icon"
			>
				<path
					d="M1 4.5C0.723858 4.5 0.5 4.27614 0.5 4C0.5 3.72386 0.723858 3.5 1 3.5L1 4.5ZM11.3536 3.64645C11.5488 3.84171 11.5488 4.15829 11.3536 4.35355L8.17157 7.53553C7.97631 7.7308 7.65973 7.7308 7.46447 7.53553C7.2692 7.34027 7.2692 7.02369 7.46447 6.82843L10.2929 4L7.46447 1.17157C7.2692 0.976311 7.2692 0.659728 7.46447 0.464466C7.65973 0.269204 7.97631 0.269204 8.17157 0.464466L11.3536 3.64645ZM1 3.5L11 3.5V4.5L1 4.5L1 3.5Z"
					fill="white"
				/>
			</svg>
		</button>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { Navigation } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/navigation';

	export default {
		name: 'rSlider',
		components: {
			Swiper,
			SwiperSlide,
		},
		props: {
			slides: {
				value: Array,
				required: true,
			},
			sliderId: {
				value: [Number, String],
				default: 'slider',
			},
		},
		setup(props, { emit }) {
			const onSlideChange = (swiper) => {
				if (swiper.activeIndex === 0) {
					emit('update:modelValue', props.slides.length);
				} else if (swiper.activeIndex === props.slides.length + 1) {
					emit('update:modelValue', 1);
				} else {
					emit('update:modelValue', swiper.activeIndex);
				}
			};
			return {
				onSlideChange,
				modules: [Navigation],
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.r-slider {
		position: relative;
		&__image {
			height: 40rem;
			width: 100%;
			object-fit: cover;
			border-radius: 2rem;
			transition: all 0.2s ease;
			@media (max-width: 540px) {
				height: 26rem;
			}
		}
		&__button {
			width: 5rem;
			height: 5rem;
			border-radius: 50%;
			margin-top: 0;
			transform: translateY(-50%);
			background: $accent;
			z-index: 2;
			transition: all 0.2s ease;
			@media (max-width: 540px) {
				width: 2rem;
				height: 2rem;
			}
			&::after {
				display: none;
			}

			&-icon {
				width: 2.5rem;
				height: 2.5rem;
				object-fit: contain;
				transition: all 0.2s ease;
				@media (max-width: 540px) {
					width: 1rem;
					height: 1rem;
				}
			}
		}
	}
</style>
