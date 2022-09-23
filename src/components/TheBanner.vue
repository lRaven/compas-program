<template>
	<section class="the-banner" id="banner">
		<div class="the-banner__container center">
			<h2 class="the-banner__title">
				<span class="the-banner__title_accent">
					Эксклюзив&shy;ный
				</span>
				сайт с<br />
				проработан&shy;ным функцио&shy;налом<br />
				и дизайном под ваш запрос
			</h2>

			<div class="the-banner__steps">
				<div class="the-banner__step">
					<span class="the-banner__step-counter">0.1</span>
					<p class="the-banner__step-text">
						С вами работает отдельная команда<br />
						программистов, дизайнеров, контентщиков<br />
						которые находятся в одном офисе и быстро согласовывают
						работу между собой.
					</p>
				</div>

				<div class="the-banner__step">
					<span class="the-banner__step-counter">0.2</span>
					<p class="the-banner__step-text">
						Работа разбита на этапы, мы<br />
						показываем, что сделано, что<br />
						будет делатся и все это<br />
						согласовывается с вами.
					</p>
				</div>

				<div class="the-banner__step">
					<span class="the-banner__step-counter">0.3</span>
					<p class="the-banner__step-text">
						В договоре согласовываем<br />
						все сроки, поэтапная оплата и<br />
						есть рассрочка платежей.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "TheBanner",
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-banner {
		min-height: 100vh;
		background-color: $bg;
		padding-bottom: 9.5rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		@media (max-width: 767px) {
			padding-top: 25rem;
			min-height: inherit;
		}
		&__title {
			margin-bottom: 6rem;
			@media (max-width: 767px) {
				margin-bottom: 5rem;
			}
			&_accent {
				color: $accent;
			}
		}

		&__steps {
			display: flex;
			gap: 15rem;
			@media (max-width: 1440px) {
				gap: 5rem;
				flex-wrap: wrap;
			}
			@media (max-width: 1023px) {
				flex-direction: column;
			}
		}
		&__step {
			position: relative;
			max-width: 45rem;
			color: $gray;
			@media (max-width: 1023px) {
				&::after {
					content: "";
					position: absolute;
					left: 0;
					bottom: -1.5rem;
					background-color: $accent;
					height: 0.6rem;
					width: 0.6rem;
					border-radius: 50%;
				}
			}
			&:nth-child(1) {
				&::after {
					content: "";
					position: absolute;
					left: 0;
					bottom: -1.5rem;
					background-color: $accent;
					height: 0.6rem;
					width: 0.6rem;
					border-radius: 50%;
				}
			}
			&-counter {
				margin-bottom: 2rem;
				display: block;
			}
			&-text {
				text-transform: uppercase;
			}
		}
	}
</style>
