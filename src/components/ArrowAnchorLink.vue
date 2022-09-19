<template>
	<div class="arrow-anchor-link">
		<button type="button" class="arrow-anchor-link__button">
			<img src="/img/icon/arrow.svg" alt="arrow" />
		</button>

		<p class="arrow-anchor-link__description">Подробно</p>
	</div>
</template>

<script>
	export default {
		name: "ArrowAnchorLink",
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.arrow-anchor-link {
		position: fixed;
		bottom: 18rem;
		right: 20rem;
		z-index: 2;
		&__button {
			width: 11.8rem;
			height: 11.8rem;
			border-radius: 50%;
			margin-bottom: 10rem;
			background-color: #eee;
		}
		&__description {
			text-transform: uppercase;
			position: relative;
			width: max-content;
			margin: auto;
			&::after {
				content: "";
				position: absolute;
				bottom: -0.1rem;
				left: 0;
				right: 0;
				height: 0.1rem;
				background-color: $dark;
			}
		}
	}
</style>
