<template>
	<section class="the-benefits" id="benefits">
		<div class="the-benefits__container center">
			<h2 class="the-benefits__title">
				Для предприни&shy;ма&shy;телей, которые хотят выделиться на
				рынке и получить сайт с
				<span class="the-benefits__title_accent">
					индивиду&shy;аль&shy;ным
				</span>
				функциона&shy;лом.
			</h2>
			<img
				src="/img/icons/arrow-triangle.svg"
				class="the-benefits__arrow"
				alt="arrow"
			/>

			<div class="the-benefits__content">
				<div class="the-benefits__steps">
					<div
						class="the-benefits__step"
						@mouseenter="selectedBenefit = 1"
						@mouseleave="selectedBenefit = null"
					>
						<span
							class="the-benefits__step-counter"
							:class="{ active: selectedBenefit === 1 }"
						>
							0.1
						</span>
						<h4
							class="the-benefits__step-text"
							:class="{ active: selectedBenefit === 1 }"
						>
							РАЗРАБАТЫВАЕМ ВНУТРЕННЮЮ CRM-СИСТЕМУ<br />
							ДЛЯ ОБРАБОТКИ ЗАЯВОК И КОНТРОЛЯ<br />
							МЕНЕДЖЕРОВ. БОЛЬШЕ НЕ ПОТРЕБУЕТСЯ<br />
							ПОЛЬЗОВАТЬСЯ СТОРОННИМИ СЕРВИСАМИ.
						</h4>
					</div>

					<div
						class="the-benefits__step"
						@mouseenter="selectedBenefit = 2"
						@mouseleave="selectedBenefit = null"
					>
						<span
							class="the-benefits__step-counter"
							:class="{ active: selectedBenefit === 2 }"
						>
							0.2
						</span>
						<h4
							class="the-benefits__step-text"
							:class="{ active: selectedBenefit === 2 }"
						>
							НЕСТАНДАРТНОЕ РЕШЕНИЕ. МЫ ВНИКАЕМ В ВАШ<br />
							ПРОЕКТ, АНАЛИЗИРУЕМ, ЧТО НЕОБХОДИМО<br />
							ИМЕННО ВАМ, И ПРЕДЛАГАЕМ, КАК ЭТОГО ДОСТИЧЬ.
						</h4>
					</div>

					<div
						class="the-benefits__step"
						@mouseenter="selectedBenefit = 3"
						@mouseleave="selectedBenefit = null"
					>
						<span
							class="the-benefits__step-counter"
							:class="{ active: selectedBenefit === 3 }"
						>
							0.3
						</span>
						<h4
							class="the-benefits__step-text"
							:class="{ active: selectedBenefit === 3 }"
						>
							УТВЕРЖДАЕМ МАКЕТ, ПРОТОТИП И ДИЗАЙН.<br />
							КОНЕЧНЫЙ РЕЗУЛЬТАТ БУДЕТ ТАКИМ, КАКИМ МЫ<br />
							ЗАПЛАНИРОВАЛИ ЕГО ИЗНАЧАЛЬНО.
						</h4>
					</div>
				</div>

				<div class="the-benefits__cards">
					<div
						class="the-benefits__card"
						:class="{ active: selectedBenefit === 1 }"
						@mouseenter="selectedBenefit = 1"
						@mouseleave="selectedBenefit = null"
					></div>
					<div
						class="the-benefits__card"
						:class="{ active: selectedBenefit === 2 }"
						@mouseenter="selectedBenefit = 2"
						@mouseleave="selectedBenefit = null"
					></div>
					<div
						class="the-benefits__card"
						:class="{ active: selectedBenefit === 3 }"
						@mouseenter="selectedBenefit = 3"
						@mouseleave="selectedBenefit = null"
					></div>
					<!-- <img
						src="/img/steps/step-1.jpg"
						class="the-benefits__card"
						alt="card-1"
					/> -->
					<!-- <img
						src="/img/steps/step-2.jpg"
						class="the-benefits__card"
						:class="{ active: selectedBenefit === 2 }"
						alt="card-2"
						@mouseenter="selectedBenefit = 2"
						@mouseleave="selectedBenefit = null"
					/>
					<img
						src="/img/steps/step-3.jpg"
						class="the-benefits__card"
						:class="{ active: selectedBenefit === 3 }"
						alt="card-3"
						@mouseenter="selectedBenefit = 3"
						@mouseleave="selectedBenefit = null"
					/> -->
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "TheBenefits",
		data: () => ({ selectedBenefit: null }),
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-benefits {
		padding-bottom: 26rem;
		@media (max-width: 767px) {
			padding-bottom: 0;
		}

		&__container {
			position: relative;
			&::after {
				content: "";
				position: absolute;
				left: 14rem;
				bottom: -26rem;
				right: 0;
				height: 0.1rem;
				background-color: #c9c9c9;
				transition: all 0.3s ease;
				@media (max-width: 1520px) {
					left: 0;
				}
				@media (max-width: 767px) {
					bottom: 0;
				}
			}
		}

		&__title {
			margin-bottom: 11rem;
			&_accent {
				color: $accent;
			}
		}
		&__arrow {
			height: 7rem;
			transform: rotate(90deg);
			margin-bottom: 5rem;
			@media (max-width: 1023px) {
				display: none;
			}
		}

		&__content {
			display: flex;
			justify-content: space-between;
			gap: 5rem;
			@media (max-width: 1520px) {
				flex-direction: column;
			}
		}

		&__steps {
			margin-left: 14rem;
			@media (max-width: 1520px) {
				margin-left: 0;
				display: flex;
				justify-content: space-between;
				gap: 5rem;
			}
			@media (max-width: 1023px) {
				flex-direction: column;
			}
		}

		&__step {
			cursor: pointer;
			color: $gray;
			@media (max-width: 1520px) {
				max-width: 42.5rem;
			}
			+ .the-benefits__step {
				margin-top: 8rem;
				@media (max-width: 1520px) {
					margin-top: 0;
				}
			}
			&-counter {
				margin-bottom: 1rem;
				display: block;
				transition: color 0.5s ease;
				&.active {
					color: $black;
				}
			}
			&-text {
				text-transform: uppercase;
				transition: color 0.5s ease;
				&.active {
					color: $black;
				}
			}
		}

		&__cards {
			display: grid;
			width: 85rem;
			height: 60rem;
			@media (max-width: 1520px) {
				display: flex;
				justify-content: space-between;
				gap: 5rem;
				width: 100%;
				height: max-content;
			}
			@media (max-width: 767px) {
				flex-direction: column;
				padding-bottom: 7rem;
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
			@media (max-width: 1520px) {
				width: 100%;
				max-width: 42.5rem;
			}
			@media (max-width: 1200px) {
				height: 37rem;
			}
			&.active {
				z-index: 1;
				filter: grayscale(0);
			}
			&:nth-child(1) {
				transform: rotate(-6deg);
				background: url("/public/img/steps/step-1.jpg") center / cover
					no-repeat;
				@media (max-width: 1520px) {
					transform: none;
				}
				@media (max-width: 767px) {
					height: 37rem;
					width: 26rem;
				}
				&.active {
					transform: none;
				}
			}
			&:nth-child(2) {
				transform: translate(18rem, 3.5rem) rotate(-3.5deg);
				transform-origin: 50%;
				background: url("/public/img/steps/step-2.jpg") center / cover
					no-repeat;
				@media (max-width: 1520px) {
					transform: none;
				}
				@media (max-width: 767px) {
					height: 28rem;
					width: 20rem;
					margin-left: auto;
				}
				&.active {
					transform: translate(18rem, 3.5rem) rotate(3.5deg);
					@media (max-width: 1520px) {
						transform: none;
					}
				}
			}
			&:nth-child(3) {
				transform: translate(38rem, 9rem);
				background: url("/public/img/steps/step-3.jpg") center / cover
					no-repeat;
				@media (max-width: 1520px) {
					transform: none;
				}
				@media (max-width: 767px) {
					height: 33rem;
					width: 23rem;
					margin: 0 auto;
				}
				&.active {
					transform: translate(38rem, 9rem) rotate(6.5deg);
					@media (max-width: 1520px) {
						transform: none;
					}
				}
			}
		}
	}
</style>
