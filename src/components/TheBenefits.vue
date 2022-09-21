<template>
	<section class="the-benefits" id="steps">
		<div class="the-benefits__container center">
			<h2 class="the-benefits__title">
				Для предпринимателей которые хотят выделиться на рынке и
				получить сайт с
				<span class="the-benefits__title_accent">индивидуальным</span>
				функционалом.
			</h2>
			<img
				src="/img/icon/arrow-triangle.svg"
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
							Разрабатываем внутреннюю CRM систему,<br />
							для обработки заявок и контроля<br />
							менеджеров. Не нужно будет<br />
							пользоваться сторонними сервисами.
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
							Не шаблонное решение. Мы вникаем в ваш<br />
							проект, что конкретно нужно вам и сразу<br />
							предлагаем, как можно это реализовать.
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
							Конечный результат будет таким как и<br />
							обговорили в начале. Утверждаем<br />
							макет, прототип и дизайн.
						</h4>
					</div>
				</div>

				<div class="the-benefits__cards">
					<img
						src="/img/steps/step-1.jpg"
						class="the-benefits__card"
						:class="{ active: selectedBenefit === 1 }"
						alt="card-1"
						@mouseenter="selectedBenefit = 1"
						@mouseleave="selectedBenefit = null"
					/>
					<img
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
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "TheBenefits",
		data: () => ({
			selectedBenefit: null,
		}),
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-benefits {
		padding-bottom: 26rem;

		&__container {
			position: relative;
			&::after {
				content: "";
				position: absolute;
				left: 14rem;
				bottom: -26rem;
				right: 0;
				height: 0.1rem;
				background-color: $black;
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
		}

		&__content {
			display: flex;
			justify-content: space-between;
			gap: 5rem;
		}

		&__steps {
			margin-left: 14rem;
		}

		&__step {
			cursor: pointer;
			color: $gray;
			+ .the-benefits__step {
				margin-top: 8rem;
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
		}
		&__card {
			cursor: pointer;
			grid-area: 1/1;
			height: 100%;
			width: 42.5rem;
			filter: grayscale(1);
			border-radius: 1.3rem;
			object-fit: cover;
			transition: all 0.5s ease;
			transform-origin: center;
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
