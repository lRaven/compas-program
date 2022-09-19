<template>
	<section class="the-steps">
		<h2 class="the-steps__title">
			Для предпринимателей которые хотят выделится на рынке и получить
			сайт с
			<span class="the-steps__title_accent">индивидуальным</span>
			функционалом.
		</h2>
		<img
			src="/img/icon/arrow-triangle.svg"
			class="the-steps__arrow"
			alt="arrow"
		/>

		<div class="the-steps__content">
			<div class="the-steps__steps">
				<div
					class="the-steps__step"
					@mouseenter="selectedStep = 1"
					@mouseleave="selectedStep = null"
				>
					<span
						class="the-steps__step-counter"
						:class="{ active: selectedStep === 1 }"
					>
						0.1
					</span>
					<h4
						class="the-steps__step-text"
						:class="{ active: selectedStep === 1 }"
					>
						Разрабатываем внутреннюю CRM систему,<br />
						для обработки заявок и контроля<br />
						менеджеров. Не нужно будет<br />
						пользоваться сторонними сервисами.
					</h4>
				</div>

				<div
					class="the-steps__step"
					@mouseenter="selectedStep = 2"
					@mouseleave="selectedStep = null"
				>
					<span
						class="the-steps__step-counter"
						:class="{ active: selectedStep === 2 }"
					>
						0.2
					</span>
					<h4
						class="the-steps__step-text"
						:class="{ active: selectedStep === 2 }"
					>
						Не шаблонное решение. Мы вникаем в ваш<br />
						проект, что конкретно нужно вам и сразу<br />
						предлагаем, как можно это реализовать.
					</h4>
				</div>

				<div
					class="the-steps__step"
					@mouseenter="selectedStep = 3"
					@mouseleave="selectedStep = null"
				>
					<span
						class="the-steps__step-counter"
						:class="{ active: selectedStep === 3 }"
					>
						0.3
					</span>
					<h4
						class="the-steps__step-text"
						:class="{ active: selectedStep === 3 }"
					>
						Конечный результат будет таким как и<br />
						обговорили в начале. Утверждаем<br />
						макет, прототип и дизайн.
					</h4>
				</div>
			</div>

			<div class="the-steps__cards">
				<img
					src="/img/steps/step-1.jpg"
					class="the-steps__card"
					:class="{ active: selectedStep === 1 }"
					alt="card-1"
					@mouseenter="selectedStep = 1"
					@mouseleave="selectedStep = null"
				/>
				<img
					src="/img/steps/step-2.jpg"
					class="the-steps__card"
					:class="{ active: selectedStep === 2 }"
					alt="card-2"
					@mouseenter="selectedStep = 2"
					@mouseleave="selectedStep = null"
				/>
				<img
					src="/img/steps/step-3.jpg"
					class="the-steps__card"
					:class="{ active: selectedStep === 3 }"
					alt="card-3"
					@mouseenter="selectedStep = 3"
					@mouseleave="selectedStep = null"
				/>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "TheSteps",
		data: () => ({
			selectedStep: null,
		}),
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-steps {
		&__title {
			text-transform: uppercase;
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
			+ .the-steps__step {
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
