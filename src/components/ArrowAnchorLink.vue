<template>
	<div class="arrow-anchor-link">
		<button
			type="button"
			class="arrow-anchor-link__button"
			:class="{ reversed: projectsSectionPosition.relative < 0 }"
			@click="scroll('#projects')"
		>
			<img src="/img/icon/arrow.svg" alt="arrow" />
		</button>

		<p class="arrow-anchor-link__description">Подробно</p>
	</div>
</template>

<script>
	import { scroll } from "@/js/scroll";

	export default {
		name: "ArrowAnchorLink",
		props: {
			projectsSectionPosition: {
				value: Object,
				required: true,
			},
		},
		methods: {
			scroll,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.arrow-anchor-link {
		pointer-events: none;
		user-select: none;
		position: fixed;
		bottom: 18rem;
		right: 20rem;
		transition: all 0.3s ease;
		@media (max-width: 1440px) {
			right: 3rem;
			bottom: 6rem;
		}
		@media (max-width: 540px) {
			right: 1.5rem;
		}

		&__button {
			pointer-events: all;
			width: 11.8rem;
			height: 11.8rem;
			border-radius: 50%;
			margin-bottom: 10rem;
			background-color: #eee;
			transition: all 0.3s ease;
			@media (max-width: 1440px) {
				margin-bottom: 23rem;
			}
			&:hover {
				background-color: $white;
			}
			&.reversed {
				transform: rotate(180deg);
			}
		}
		&__description {
			text-transform: uppercase;
			position: relative;
			width: max-content;
			margin: auto;
			transition: all 0.3s ease;
			font-size: 1.4rem;
			@media (max-width: 540px) {
				color: $accent;
			}
			&::after {
				content: "";
				position: absolute;
				bottom: -0.1rem;
				left: 0;
				right: 0;
				height: 0.1rem;
				background-color: $dark;
				@media (max-width: 540px) {
					background-color: $accent;
				}
			}
		}
	}
</style>
