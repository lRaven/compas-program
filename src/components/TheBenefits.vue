<template>
	<section class="the-benefits" id="benefits">
		<div class="the-benefits__container center">
			<h2 class="the-benefits__title">
				Для предпринимателей, которые хотят
				<span class="the-benefits__title_accent">выделиться </span>на рынке и
				получить сайт с индивидуальным функционалом
			</h2>

			<div class="the-benefits__content">
				<div class="the-benefits__col the-benefits__steps">
					<div
						class="the-benefits__step"
						:class="{ active: selectedBenefit === benefit.id }"
						v-for="benefit in benefits"
						:key="benefit.id"
						@mouseenter="selectedBenefit = benefit.id"
						@mouseleave="selectedBenefit = null"
					>
						<p class="the-benefits__step-description">
							{{ benefit.text }}
						</p>

						<img
							class="the-benefits__step-image"
							:class="{ active: selectedBenefit === benefit.id }"
							:src="benefit.image"
							alt="image"
						/>
					</div>

					<r-button
						color="accent"
						text="Рассчитать стоимость проекта"
						@click="$emit('open-popup')"
					></r-button>
				</div>

				<div class="the-benefits__col the-benefits__cards">
					<div
						v-for="benefit in benefits"
						:key="benefit.id"
						class="the-benefits__card"
						:class="{ active: selectedBenefit === benefit.id }"
						:style="`background: url(${benefit.image}) center / cover no-repeat;`"
						@mouseenter="selectedBenefit = benefit.id"
						@mouseleave="selectedBenefit = null"
					></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import { ref } from 'vue';

	export default {
		name: 'TheBenefits',
		setup() {
			const benefits = [
				{
					id: 1,
					text: 'Разрабатываем внутреннюю CRM-систему для обработки заявок и контроля менеджеров. Больше не придётся пользоваться сторонними сервисами',
					image: '/img/steps/step-1.jpg',
				},
				{
					id: 2,
					text: 'Нешаблонное решение. Мы вникаем в ваш проект, выясняем, что нужно конкретно вам, и сразу предлагаем план реализации',
					image: '/img/steps/step-2.jpg',
				},
				{
					id: 3,
					text: 'Конечный результат будет таким, каким его обговорили вначале. Утверждаем макет, прототип и дизайн',
					image: '/img/steps/step-3.jpg',
				},
			];
			const selectedBenefit = ref(null);

			return { benefits, selectedBenefit };
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-benefits {
		@media (max-width: 1390px) {
			position: relative;
			padding-bottom: 0;

			&::before {
				content: '';
				position: absolute;
				right: 0;
				top: 11rem;
				width: 17rem;
				height: 17rem;
				transform: scale(-1, 1);
				background: url('/public/img/icons/logo-3d.png') center / contain
					no-repeat;
			}
		}
		@media (max-width: 767px) {
			padding-bottom: 0;
		}

		&__container {
			position: relative;
			padding-bottom: 8rem;
			&::after {
				content: '';
				position: absolute;
				left: 0;
				bottom: 0;
				right: 0;
				height: 0.1rem;
				background-color: #c9c9c9;
				transition: all 0.3s ease;
			}
		}

		&__title {
			@media (max-width: 1390px) {
				margin-bottom: 15rem;
			}
			@media (max-width: 767px) {
				margin-bottom: 4rem;
			}
			&_accent {
				color: $accent;
			}
		}

		&__content {
			display: flex;
			justify-content: space-between;
		}

		&__col {
			@media (min-width: 1391px) {
				padding-top: 15rem;
			}
		}

		&__steps {
			.r-button {
				@media (min-width: 767px) {
					padding: 2.6rem 8rem;
				}
				@media (max-width: 1390px) {
					width: 100%;
				}
				@media (max-width: 425px) {
					font-size: $text-m;
				}
			}
		}
		&__step {
			cursor: pointer;
			max-width: 49rem;
			@media (max-width: 1390px) and (min-width: 768px) {
				max-width: 100%;
				display: grid;
				grid-gap: 5rem;
				grid-template-columns: 1fr 1fr;
			}
			@media (max-width: 767px) {
				max-width: 100%;
			}

			&-description {
				font-family: 'Roboto', sans-serif;
				font-size: $text-l;
				color: $dark;
				padding-bottom: 2rem;
				border-bottom: 0.2rem solid $accent;
				transition: color 0.2s ease;
				height: max-content;
				@media (max-width: 1390px) {
					margin-bottom: 2rem;
				}
				&.active {
					color: $black;
				}
			}
			&-image {
				width: 100%;
				height: 30rem;
				object-fit: cover;
				border-radius: 1.3rem;
				filter: grayscale(1);
				transition: all 0.5s ease;
				&.active {
					filter: grayscale(0);
				}
				@media (min-width: 1391px) {
					display: none;
				}
			}

			+ .the-benefits__step {
				margin-top: 8rem;
			}
			+ .r-button {
				height: max-content;
				margin-top: 8rem;
			}
		}

		&__cards {
			position: relative;
			padding-left: 5rem;
			padding-bottom: 20rem;
			display: grid;
			width: 90rem;
			z-index: 1;
			@media (max-width: 1390px) {
				display: none;
			}
			&::before,
			&::after {
				content: '';
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				z-index: -1;
			}
			&::before {
				background: url('/public/img/icons/logo-3d.png') top right / auto 47rem
					no-repeat;
			}
			&::after {
				background: url('/public/img/icons/logo-3d.png') bottom right / auto
					30rem no-repeat;
				transform: scale(-1, 1);
			}
		}
		&__card {
			cursor: pointer;
			grid-area: 1/1;
			height: 60rem;
			width: 42.5rem;
			filter: grayscale(1);
			border-radius: 1.3rem;
			object-fit: cover;
			transition: all 0.5s ease;
			&.active {
				z-index: 1;
				filter: grayscale(0);
			}
			&:nth-child(1) {
				transform: rotate(-6deg);

				&.active {
					transform: none;
				}
			}
			&:nth-child(2) {
				transform: translate(18rem, 3.5rem) rotate(-3.5deg);
				transform-origin: 50%;

				&.active {
					transform: translate(18rem, 3.5rem) rotate(3.5deg);
				}
			}
			&:nth-child(3) {
				transform: translate(38rem, 9rem);

				&.active {
					transform: translate(38rem, 9rem) rotate(6.5deg);
				}
			}
		}
	}
</style>
