<template>
	<label class="text-checkbox">
		<input
			type="radio"
			:name="radioGroup"
			class="text-checkbox__real"
			:value="value"
			@change.stop="this.$emit('update:modelValue', value)"
		/>

		<div
			class="text-checkbox__fake"
			:style="`background-color: ${isChecked ? color : '#DFE3E3'}`"
			@mouseenter="$event.target.style = 'background-color:' + color"
			@mouseleave="
				if (!isChecked)
					$event.target.style = 'background-color: #DFE3E3';
			"
		>
			{{ text }}
		</div>
	</label>
</template>

<script>
	export default {
		name: "TextCheckbox",
		props: {
			selectedValue: [String, Number],
			value: [String, Number],
			color: {
				value: String,
				default: "#1d1d1d",
			},
			text: {
				value: [String, Number],
				default: "radio",
			},
			radioGroup: {
				value: String,
				default: "radio",
			},
		},
		computed: {
			isChecked() {
				return this.value === this.selectedValue;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.text-checkbox {
		&__real {
			display: none;
		}
		&__fake {
			user-select: none;
			cursor: pointer;
			padding: 2rem 3rem;
			border-radius: 7rem;
			font-size: 2.4rem;
			transition: all 0.3s ease;
		}
	}
</style>
