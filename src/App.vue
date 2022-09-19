<template>
	<router-view v-slot="{ Component }">
		<transition mode="out-in">
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<script>
	export default {
		watch: {
			$route(to) {
				document.title = to.meta.title || "Default Title";
			},

			"$route.path"() {
				//* срабатывает при переходе по router-link
				document.querySelector("body").classList.remove("locked");
			},
		},
	};
</script>

<style lang="scss">
	@import "@/assets/scss/variables";
	@import "@/assets/scss/fonts";

	@import "@/assets/scss/animations";
	@import "@/assets/scss/center";

	body {
		font-family: "Inter", sans-serif;
		font-size: 1.6rem;
		line-height: 1.4;
		color: $black;
		background-color: $bg;
		@media (max-width: 767px) {
			font-size: 1.2rem;
		}

		&.locked {
			overflow: hidden;
		}
	}
	* {
		scroll-behavior: smooth;
		transition: padding 0.3s ease, margin 0.3s ease;

		//* chrome/safari
		&::-webkit-scrollbar {
			width: $scrollbarWidth; /* ширина scrollbar */
		}
		&::-webkit-scrollbar-track {
			background: $scrollbarBg; /* цвет дорожки */
		}
		&::-webkit-scrollbar-thumb {
			background-color: $scrollbarThumb; /* цвет плашки */
			border-radius: $scrollbarBorderRadius; /* закругления плашки */
			border: $scrollbarBorder; /* padding вокруг плашки */
		}
		//* firefox
		scrollbar-width: thin; /* "auto" или "thin"  */
		scrollbar-color: $scrollbarThumb $scrollbarBg;
	}

	#app,
	.page {
		display: flex;
		flex-direction: column;
		height: max-content;
		min-height: 100vh;
	}

	.main {
		display: flex;
		flex-direction: column;
		flex: 1 0 auto;
	}

	section {
		overflow: hidden;
		padding: 16.5rem 3.5rem;
		background-color: $light-gray;
	}

	header {
		padding: 3rem 3.5rem 2.4rem 3.5rem;
	}

	footer {
		flex: 0 0 auto;
		padding: 12rem 3.5rem 10rem 3.5rem;
	}

	input {
		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			/* display: none; <- Crashes Chrome on hover */
			-webkit-appearance: none;
			margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
		}
		-moz-appearance: textfield;
		&:hover {
			-moz-appearance: number-input;
		}
		&[type="text"] {
			::-ms-clear {
				display: none;
				width: 0;
				height: 0;
			}
			::-ms-reveal {
				display: none;
				width: 0;
				height: 0;
			}
		}
		&[type="search"] {
			&::-webkit-search-decoration,
			&::-webkit-search-cancel-button,
			&::-webkit-search-results-button,
			&::-webkit-search-results-decoration {
				display: none;
			}
		}
	}

	img,
	svg,
	button,
	header,
	footer {
		user-select: none;
	}

	h1 {
		font-size: 12.8rem;
		font-weight: 500;
		line-height: 1.4;
	}
	h2 {
		font-size: 6.4rem;
		font-weight: 500;
		line-height: 1.4;
	}
	h3 {
		font-size: 3.2rem;
		font-weight: 500;
		line-height: 1.4;
	}
	h4 {
		font-size: 2rem;
		font-weight: 400;
		line-height: 1.4;
	}
</style>
