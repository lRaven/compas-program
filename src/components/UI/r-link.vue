<template>
	<a :href="link" target="_blank" class="r-link" :class="color">
		{{ description }}
	</a>
</template>

<script>
	export default {
		name: 'rLink',
		props: {
			color: {
				value: String,
				default: 'gray',
			},
			link: {
				value: String,
				required: true,
			},
			description: {
				value: [String, Number],
				default: 'Link',
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.r-link {
		padding: 1.8rem 3.2rem;
		border-radius: 8rem;
		color: #3f3f3f;
		border: 0.2rem solid transparent;
		transition: all 0.2s ease;
		font-family: 'Roboto', sans-serif;
		font-size: $text-l;
		&.gray {
			background-color: $light-gray;
			&:hover {
				background-color: $accent;
				color: $white;
			}
		}
		&.accent {
			border-color: $accent;
			background-color: transparent;
			color: $white;
			&:hover {
				background-color: $accent;
			}
		}
	}
</style>
