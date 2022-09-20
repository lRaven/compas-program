<template>
	<header class="the-header" id="header">
		<div class="the-header__container center">
			<router-link
				:to="{ name: 'home' }"
				class="the-header__home"
				@click="scroll()"
			>
				<img
					src="/img/icon/logo-dark.svg"
					alt="logo"
					class="the-header__logo"
				/>
			</router-link>

			<nav class="the-header__nav">
				<div class="the-header__nav-item">
					<p class="the-header__nav-item-header">Портфолио</p>
					<div class="the-header__nav-item-popup">
						<a href="#" target="_blank" class="the-header__link">
							Telegram
						</a>
						<a href="#" target="_blank" class="the-header__link">
							WhatsApp
						</a>
						<a
							href="#"
							target="_blank"
							:to="{ name: 'home' }"
							class="the-header__link"
						>
							Viber
						</a>
					</div>
				</div>

				<div class="the-header__nav-item">
					<p class="the-header__nav-item-header">Соц.сети</p>
					<div class="the-header__nav-item-popup">
						<a href="#" target="_blank" class="the-header__link">
							Telegram
						</a>
						<a href="#" target="_blank" class="the-header__link">
							WhatsApp
						</a>
						<a
							href="#"
							target="_blank"
							:to="{ name: 'home' }"
							class="the-header__link"
						>
							Viber
						</a>
					</div>
				</div>

				<div class="the-header__nav-item">
					<p class="the-header__nav-item-header">Контакты</p>
					<div class="the-header__nav-item-popup">
						<a href="#" target="_blank" class="the-header__link">
							Telegram
						</a>
						<a href="#" target="_blank" class="the-header__link">
							WhatsApp
						</a>
						<a
							href="#"
							target="_blank"
							:to="{ name: 'home' }"
							class="the-header__link"
						>
							Viber
						</a>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>

<script>
	import { scroll } from "@/js/scroll";

	export default {
		name: "TheHeader",
		methods: {
			// bitch() {
			// 	document.documentElement.scrollTo(0, 0);
			// },
			scroll,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		pointer-events: none;
		z-index: 3;
		&__container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 5rem;
		}
		&__home {
			pointer-events: all;
		}
		&__logo {
			height: 6.7rem;
		}

		&__nav {
			display: flex;
			align-items: center;
			gap: 2rem;
			&-item {
				text-transform: uppercase;
				pointer-events: all;
				position: relative;
				width: 25rem;
				&:hover {
					.the-header__nav-item-popup {
						transform: none;
					}
				}
				&-header {
					cursor: pointer;
					position: relative;
					display: inline;
					font-size: 1.4rem;
					padding: 0 4rem;
					&::after {
						content: "";
						position: absolute;
						bottom: -0.2rem;
						left: 4rem;
						right: 4rem;
						height: 0.1rem;
						background-color: $dark;
					}
				}
				&-popup {
					display: flex;
					flex-direction: column;
					gap: 2.5rem;
					position: absolute;
					left: 0;
					right: 0;
					top: -2rem;
					transform: translateY(-130%);
					background-color: $white;
					border-radius: 3rem;
					padding: 8.6rem 4rem 3.5rem 4rem;
					z-index: -1;
					transition: transform 0.2s ease;
					&::before {
						content: "";
						position: absolute;
						top: 6.5rem;
						left: 2.5rem;
						right: 2.5rem;
						height: 0.1rem;
						background-color: rgba($dark, 0.2);
					}
					&.open {
						transform: none;
					}
				}
			}
		}

		&__link {
			color: inherit;
			opacity: 0.5;
			font-size: 1.4rem;
			transition: all 0.2s ease;
			&:hover {
				color: $accent;
				opacity: 1;
			}
		}
	}
</style>
