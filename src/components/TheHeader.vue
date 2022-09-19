<template>
	<header class="the-header">
		<div class="the-header__container center">
			<router-link :to="{ name: 'home' }" class="the-header__home">
				<img
					src="/img/icon/logo-dark.svg"
					alt="logo"
					class="the-header__logo"
				/>
			</router-link>

			<nav class="the-header__nav">
				<div class="the-header__nav-item">
					<div class="the-header__nav-item-header">СОЦ.СЕТИ</div>
					<div class="the-header__nav-item-popup">
						<a href="#" target="_blank" class="the-header__link">
							TELEGRAM
						</a>
						<a href="#" target="_blank" class="the-header__link">
							WHATSAPP
						</a>
						<a
							href="#"
							target="_blank"
							:to="{ name: 'home' }"
							class="the-header__link"
						>
							VIBER
						</a>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>

<script>
	export default {
		name: "TheHeader",
	};
</script>

<style lang="scss" scoped>
	.the-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		&__container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 5rem;
		}
		&__home {
		}
		&__logo {
			height: 6.7rem;
		}

		&__nav {
			&-item {
				width: 25rem;
				&-header {
				}
			}
		}
	}
</style>
