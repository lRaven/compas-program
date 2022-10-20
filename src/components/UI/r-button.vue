<template>
	<button class="r-button" :class="[color, size]">
		{{ text }}
		<slot name="icon"></slot>
	</button>
</template>

<script>
	export default {
		name: 'rButton',
		props: {
			color: {
				value: String,
				default: 'accent',
			},
			text: {
				value: String,
				default: 'button',
			},
			size: {
				value: String,
				default: 'default',
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.r-button {
		user-select: none;
		color: $black;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		font-size: $text-l;
		padding: 2rem 3rem;
		border-radius: 9rem;
		min-width: 13.8rem;
		width: max-content;
		transition: all 0.2s ease;
		&.big {
			font-size: $text-xl;
			padding: 3.6rem;
			@media (max-width: 767px) {
				padding: 2rem;
				font-size: $text-m;
			}
		}

		&:active {
			transform: scale(0.97);
			transition: all 0.3s ease;
		}
		&:disabled {
			cursor: default;
			background-color: #dfe3e3 !important;
			border-color: #dfe3e3;
			&:active {
				transform: none;
			}
		}

		&.bordered {
			background-color: transparent;
			border: 0.2rem solid #bcbcbc;
			&:hover {
				background-color: $white;
			}
			&:disabled {
				border-color: #dfe3e3;
			}
		}
		&.black {
			background-color: $dark;
			color: $white;
		}
		&.gray {
			background-color: #dfe3e3;
		}
		&.green {
			background-color: $accent-pale;
		}
		&.accent {
			background-color: $accent;
			color: $white;
		}
	}
</style>
