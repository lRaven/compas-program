<template>
	<label class="text-checkbox">
		<input
			type="radio"
			:name="radioGroup"
			class="text-checkbox__real"
			:checked="isChecked"
			:value="value"
			@change.stop="this.$emit('update:modelValue', value)"
		/>

		<div
			class="text-checkbox__fake"
			:style="isChecked ? checkedStyles : uncheckedStyles"
			@mouseenter="$event.target.style = checkedStyles"
			@mouseleave="
				if (!isChecked) {
					$event.target.style = uncheckedStyles;
				}
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
			text: {
				value: [String, Number],
				default: "radio",
			},
			radioGroup: {
				value: String,
				default: "radio",
			},

			//* style
			designOptions: {
				value: Object,
				default: {
					accentColor: "#1d1d1d",
					defaultColor: "transparent",
					isHasBorder: false,
				},
			},
		},
		computed: {
			isChecked() {
				return this.value === this.selectedValue;
			},

			checkedStyles() {
				const bg = `background-color: ${this.designOptions.accentColor};`;
				const border = `border-color: ${this.designOptions.accentColor};`;
				const textColor = `color: #fff`;

				if (this.designOptions.isHasBorder) {
					return bg + border + textColor;
				} else {
					return bg;
				}
			},
			uncheckedStyles() {
				const bg = `background-color: ${this.designOptions.defaultColor};`;
				const border = `border-color: ${this.designOptions.accentColor};`;

				if (this.designOptions.isHasBorder) {
					return bg + border;
				} else {
					return bg;
				}
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
			text-align: center;
			user-select: none;
			cursor: pointer;
			padding: 2rem 3rem;
			border-radius: 7rem;
			font-size: 2.4rem;
			transition: all 0.3s ease;
			border: 0.2rem solid transparent;
			@media (max-width: 767px) {
				padding: 2rem;
				font-size: 1.8rem;
			}
		}
	}
</style>
