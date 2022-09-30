<template>
	<label class="text-checkbox">
		<input
			type="checkbox"
			class="text-checkbox__real"
			v-model="isChecked"
			@change.stop="
				this.$emit('update:modelValue', selectedValue);
				this.$emit('change', selectedValue, $event.target.checked);
			"
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
			color: {
				value: String,
				default: "#1d1d1d",
			},
			text: {
				value: [String, Number],
				default: "checkbox",
			},
		},

		data: () => ({ isChecked: false }),
	};
</script>

<style lang="scss" scoped>
	.text-checkbox {
		&__real {
			display: none;
		}
		&__fake {
			text-align: center;
			user-select: none;
			cursor: pointer;
			padding: 2rem 3rem;
			border-radius: 7rem;
			font-size: 2.4rem;
			transition: all 0.3s ease;
			@media (max-width: 767px) {
				padding: 2rem;
				font-size: 1.8rem;
			}
		}
	}
</style>
