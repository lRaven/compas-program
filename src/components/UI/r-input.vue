<template>
	<input
		:type="type"
		:placeholder="placeholder"
		:value="modelValue"
		class="r-input"
		@input="
			this.$emit('update:modelValue', $event.target.value);
			this.$emit('update:valid', $event.target.checkValidity());
		"
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
		border: 0.2rem solid $white;
		color: $black;
		font-size: 2.4rem;
		width: 100%;
		transition: all 0.3s ease;
		@media (max-width: 767px) {
			font-size: 1.8rem;
		}
		@media (max-width: 540px) {
			padding: 1.5rem;
		}
		&::placeholder {
			color: #bcbcbc;
		}

		&:hover {
			border-color: #bcbcbc;
		}
		&:focus {
			border-color: $accent-pale;
		}
	}
</style>
