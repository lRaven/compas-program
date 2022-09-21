<template>
	<section class="the-questions">
		<div class="the-questions__container center">
			<div class="the-questions__row">
				<span class="the-questions__circle"></span>

				<img
					src="/img/icon/arrow-triangle.svg"
					class="the-questions__arrow"
					alt="arrow"
				/>

				<h1 class="the-questions__title">
					Остались<br />
					вопросы?
				</h1>
			</div>

			<div class="the-questions__row">
				<r-button
					color="bordered"
					text="Расчитать стоимость"
				></r-button>
				<r-button color="bordered" text="Задать вопрос"></r-button>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "TheQuestions",
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-questions {
		position: relative;
		background-color: $accent-dark;
		color: $white;
		padding-top: 12rem;
		padding-bottom: 26rem;

		&__circle {
			position: absolute;
			left: 50%;
			transform: translate(-50%, 8rem);
			width: 90vw;
			height: 90vw;
			border-radius: 50%;
			background: linear-gradient(
				180deg,
				$white 0%,
				rgba($black, 0) 40.1%
			);
			opacity: 0.3;
		}
		&__arrow {
			position: absolute;
			top: 27rem;
			height: 7rem;
			transform: rotate(90deg);
			opacity: 0.3;
		}

		&__title {
			text-align: center;
			line-height: 1;
		}

		&__row {
			&:first-child {
				margin-bottom: 12rem;
			}
			&:nth-child(2) {
				display: flex;
				align-items: center;
				gap: 9.6rem;
				.r-button {
					color: $white;
					width: 100%;
					z-index: 1;
					border-color: $white;
					&:hover {
						color: $black;
					}
				}
			}
		}
	}
</style>
