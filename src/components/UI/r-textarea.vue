<template>
	<label class="r-textarea">
		<textarea
			class="r-textarea__input"
			:placeholder="placeholder"
			:value="modelValue"
			@input="this.$emit('update:modelValue', $event.target.value)"
		></textarea>
	</label>
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
		padding: 2rem 1rem 2rem 3rem;
		background-color: $white;
		border-radius: 1rem;
		border: 0.2rem solid $white;
		transition: all 0.3s ease;
		&:hover {
			border-color: #bcbcbc;
		}
		&__input {
			color: $black;
			font-size: 2.4rem;
			width: 100%;
			height: 100%;
			resize: none;
			padding-right: 2rem;
			&::placeholder {
				color: #bcbcbc;
			}

			//* chrome/safari
			&::-webkit-scrollbar-track {
				background: transparent; /* цвет дорожки */
			}
			&::-webkit-scrollbar-thumb {
				background-color: #f4f4f4; /* цвет плашки */
			}
			//* firefox
			scrollbar-width: thin; /* "auto" или "thin"  */
			scrollbar-color: #f4f4f4 transparent;
		}
	}
</style>
