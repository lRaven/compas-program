<template>
	<section class="the-banner" id="banner">
		<div class="the-banner__container center">
			<h2 class="the-banner__title">
				<span class="the-banner__title_accent"> Эксклюзив&shy;ный </span>
				сайт с<br />
				проработан&shy;ным функцио&shy;налом<br />
				и дизайном под ваш запрос
			</h2>

			<div class="the-banner__steps">
				<div class="the-banner__step">
					<span class="the-banner__step-counter">0.1</span>
					<p class="the-banner__step-text">
						С ВАМИ РАБОТАЕТ ОТДЕЛЬНАЯ КОМАНДА<br />
						ПРОГРАММИСТОВ, ДИЗАЙНЕРОВ И КОНТЕНТЩИКОВ,<br />
						КОТОРЫЕ НАХОДЯТСЯ В ОДНОМ ОФИСЕ И БЫСТРО СОГЛАСОВЫВАЮТ РАБОТУ МЕЖДУ
						СОБОЙ.
					</p>
				</div>

				<div class="the-banner__step">
					<span class="the-banner__step-counter">0.2</span>
					<p class="the-banner__step-text">
						РАБОТА РАЗБИТА НА ЭТАПЫ.<br />
						МЫ ПОКАЗЫВАЕМ, ЧТО УЖЕ СДЕЛАНО И ЧТО БУДЕТ ДЕЛАТЬСЯ.<br />
						ВСЕ ЭТО СОГЛАСОВЫВАЕТСЯ С ВАМИ.
					</p>
				</div>

				<div class="the-banner__step">
					<span class="the-banner__step-counter">0.3</span>
					<p class="the-banner__step-text">
						В договоре прописываем сроки работы<br />
						и условия поэтапной оплаты.<br />
						Также у вас есть возможность оформить рассрочку платежа.
					</p>
				</div>

				<arrow-anchor-link></arrow-anchor-link>
			</div>
		</div>
	</section>
</template>

<script>
	import ArrowAnchorLink from '@/components/ArrowAnchorLink.vue';

	export default {
		name: 'TheBanner',
		components: {
			ArrowAnchorLink,
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-banner {
		position: relative;
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
			pointer-events: none;
			margin-bottom: 6rem;
			position: relative;
			z-index: 1;
			@media (max-width: 767px) {
				margin-bottom: 5rem;
			}
			&_accent {
				color: $accent;
			}
		}

		&__steps {
			display: flex;
			gap: 10rem;
			@media (max-width: 1440px) {
				gap: 5rem;
				flex-wrap: wrap;
			}
			@media (max-width: 1023px) {
				flex-direction: column;
			}
		}
		&__step {
			pointer-events: none;
			position: relative;
			max-width: 45rem;
			color: $gray;
			@media (max-width: 1023px) {
				&::after {
					content: '';
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
					content: '';
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
				position: relative;
				z-index: 1;
			}
			&-text {
				text-transform: uppercase;
				position: relative;
				z-index: 1;
			}
		}
	}
</style>
