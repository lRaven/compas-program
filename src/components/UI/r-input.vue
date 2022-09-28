<template>
	<input
		:type="type"
		:placeholder="placeholder"
		:value="modelValue"
		class="r-input"
		@input="this.$emit('update:modelValue', $event.target.value)"
	/>
</template>

<script>
	export default {
		name: "rInput",
		props: {
			modelValue: String,
			type: {
				value: String,
				default: String,
			},
			placeholder: [String, Number],
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.r-input {
		padding: 2rem 3rem;
		background-color: $white;
		border-radius: 1rem;
		color: $black;
		font-size: 2.4rem;
		width: 100%;
		&::placeholder {
			color: #bcbcbc;
		}
	}
</style>
