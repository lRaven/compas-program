<template>
	<section class="the-banner" id="banner">
		<div class="the-banner__container center">
			<h2 class="the-banner__title">
				Cоздадим
				<span class="the-banner__title_accent"> эксклюзивный </span>
				сайт с<br />
				проработанным функционалом и<br />
				дизайном под ваш запрос
			</h2>
			<r-button
				text="Рассчитать стоимость проекта"
				color="accent"
				@click="scroll('#questions')"
			></r-button>

			<div class="the-banner__steps">
				<p class="the-banner__step" v-for="step in steps" :key="step.id">
					{{ step.text }}
				</p>
			</div>
		</div>
	</section>
</template>

<script>
	import { scroll } from '@/js/scroll';

	export default {
		name: 'TheBanner',
		setup() {
			const steps = [
				{
					id: 1,
					text: 'С вами работает отдельная команда  программистов, дизайнеров, контентщиков, которые находятся в одном офисе и быстро согласовывают работу между собой',
				},
				{
					id: 1,
					text: 'Работа разбита на этапы. Мы показываем, что сделано и что предстоит сделать. Всё это согласовываем с вами',
				},
				{
					id: 1,
					text: 'В договоре утверждаем  сроки и поэтапную оплату. Также у нас есть рассрочка платежа',
				},
			];
			return { steps, scroll };
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-banner {
		position: relative;
		min-height: 100vh;
		background-color: $bg;
		padding-top: 0;
		padding-bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		@media (min-height: 1023px) {
			min-height: 110rem;
		}
		@media (max-width: 1023px) {
			background: url('/public/img/icons/logo-3d-accent.png') calc(100% + 2rem)
				30rem / auto 30rem no-repeat;
		}
		@media (max-width: 767px) {
			min-height: inherit;
		}
		@media (max-width: 540px) {
			background-size: 15rem;
			background-position-y: 25rem;
		}

		&__container {
			padding-top: 16rem;
			padding-bottom: 16rem;
			background: url('/public/img/icons/logo-3d-accent.png') right 12rem / auto
				50rem no-repeat;
			@media (max-width: 1023px) {
				background: none;
			}
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
		.r-button {
			margin-bottom: 16rem;
			padding: 2.6rem 8rem;
			width: fit-content;
			@media (max-width: 540px) {
				padding: 2rem 6rem;
				font-size: $text-m;
			}
		}

		&__steps {
			display: flex;
			gap: 8rem;
			border-bottom: 0.2rem solid $accent;
			padding-bottom: 1rem;
			@media (max-width: 1023px) {
				flex-direction: column;
				border: none;
				padding-bottom: 0;
			}
		}
		&__step {
			pointer-events: none;
			position: relative;
			color: $dark;
			font-size: 2rem;
			font-family: 'Roboto', sans-serif;
			@media (max-width: 1023px) {
				border-bottom: 0.2rem solid $accent;
				padding-bottom: 1rem;
			}

			&:first-child {
				max-width: 45rem;
				@media (max-width: 540px) {
					max-width: 100%;
				}
			}
			&:nth-child(2) {
				max-width: 32rem;
				@media (max-width: 540px) {
					max-width: 100%;
				}
			}
			&:nth-child(3) {
				max-width: 27rem;
				@media (max-width: 540px) {
					max-width: 100%;
				}
			}
		}
	}
</style>
