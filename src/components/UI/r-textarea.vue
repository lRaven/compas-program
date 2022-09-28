<template>
	<textarea
		class="r-textarea"
		:placeholder="placeholder"
		:value="modelValue"
		@input="this.$emit('update:modelValue', $event.target.value)"
	></textarea>
</template>

<script>
	export default {
		name: "rTextarea",
		props: {
			modelValue: String,
			placeholder: [String, Number],
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.r-textarea {
		padding: 2rem 3rem;
		background-color: $white;
		border-radius: 1rem;
		color: $black;
		font-size: 2.4rem;
		width: 100%;
		resize: none;
		&::placeholder {
			color: #bcbcbc;
		}
	}
</style>
