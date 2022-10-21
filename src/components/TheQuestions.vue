<template>
	<section class="the-questions" id="questions">
		<div class="the-questions__container center">
			<img
				src="/img/icons/arrow-triangle.svg"
				class="the-questions__arrow"
				alt="arrow"
			/>

			<h1 class="the-questions__title">Остались вопросы?</h1>

			<h3 class="the-questions__description">
				Пройдите тест за 1 минуту и получите расчёт<br />
				стоимости разработки вашего проекта
			</h3>

			<r-button
				size="big"
				color="bordered"
				text="Рассчитать стоимость"
				@click="$emit('open-popup')"
			></r-button>
			<r-button
				size="big"
				color="bordered"
				text="Задать вопрос"
				@click="openLink('https://telegram.im/@compass_pro')"
			></r-button>
		</div>
	</section>
</template>

<script>
	import { openLink } from '@/js/openLink';

	export default {
		name: 'TheQuestions',
		setup() {
			return { openLink };
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-questions {
		position: relative;
		background-color: $accent-dark;
		color: $white;
		padding-top: 12rem;
		padding-bottom: 26rem;
		@media (max-width: 767px) {
			padding-top: 7rem;
			padding-bottom: 7rem;
		}

		&__container {
			width: fit-content;
			position: relative;
			z-index: 1;
			text-align: center;
			&::before {
				content: '';
				position: absolute;
				top: 15rem;
				left: 50%;
				transform: translateX(-50%);
				width: 90vw;
				height: 90vw;
				border-radius: 50%;
				background: linear-gradient(180deg, $white 0%, rgba($black, 0) 40.1%);
				opacity: 0.1;
				z-index: -1;
				@media (max-width: 1440px) {
					width: 110vw;
					height: 110vw;
				}
				@media (max-width: 1023px) {
					transform: none;
					left: -100%;
					width: 210vw;
					height: 210vw;
					background: linear-gradient(
						180deg,
						$white 0%,
						rgba($black, 0) 78.52%
					);
				}
			}
		}

		&__arrow {
			position: absolute;
			top: 13rem;
			left: 2rem;
			height: 7rem;
			transform: rotate(90deg);
			opacity: 0.3;
			@media (max-width: 1023px) {
				display: none;
			}
		}

		&__title {
			text-align: center;
			line-height: 1;
			font-size: 12.8rem;
			margin-bottom: 7rem;
			@media (max-width: 767px) {
				font-size: $text-2xl;
				margin-bottom: 6rem;
			}
		}
		&__description {
			margin-bottom: 7rem;
			@media (max-width: 767px) {
				display: none;
			}
		}
		.r-button {
			color: $white;
			width: 100%;
			z-index: 1;
			border-color: $white;
			max-width: 88rem;
			margin: auto;
			+ .r-button {
				margin-top: 4rem;
			}
			&:hover {
				color: $black;
			}
		}
	}
</style>
