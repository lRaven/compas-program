<template>
	<button class="r-button" :class="color">
		{{ text }}
		<slot name="icon"></slot>
	</button>
</template>

<script>
	export default {
		name: "rButton",
		props: {
			color: {
				value: String,
				default: "blue",
			},
			text: {
				value: String,
				default: "button",
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.r-button {
		user-select: none;
		color: $black;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		padding: 3.6rem;
		border-radius: 9rem;
		min-width: 13.8rem;
		width: max-content;
		font-size: $text-xl;
		transition: all 0.2s ease;
		@media (max-width: 767px) {
			padding: 2rem;
			font-size: $text-m;
		}
		&.reverse {
			flex-direction: row-reverse;
		}

		&:active {
			transform: scale(0.97);
			transition: all 0.3s ease;
		}
		&:disabled {
			cursor: default;
			color: $gray !important;
			background-color: $gray !important;
			border-color: $gray;
			&:hover {
				background-color: $gray;
				border-color: $gray;
			}
			&:active {
				transform: none;
			}
		}

		&.bordered {
			background-color: transparent;
			border: 0.2rem solid $middle-gray;
			&:hover {
				background-color: $white;
			}
		}
	}
</style>
