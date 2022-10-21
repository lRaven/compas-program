<template>
	<label class="text-checkbox">
		<input
			type="radio"
			:name="radioGroup"
			class="text-checkbox__real"
			:checked="isChecked"
			:value="value"
			@change.stop="$emit('update:modelValue', value)"
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
	import { computed } from 'vue';

	export default {
		name: 'TextCheckbox',
		props: {
			selectedValue: [String, Number],
			value: [String, Number],
			text: {
				value: [String, Number],
				default: 'radio',
			},
			radioGroup: {
				value: String,
				default: 'radio',
			},

			//* style
			designOptions: {
				value: Object,
				default: {
					accentColor: '#1d1d1d',
					defaultColor: 'transparent',
					isHasBorder: false,
				},
			},
		},
		setup(props) {
			const isChecked = computed(() => props.value === props.selectedValue);

			const checkedStyles = computed(() => {
				const bg = `background-color: ${props.designOptions.accentColor};`;
				const border = `border-color: ${props.designOptions.accentColor};`;
				const textColor = `color: #fff`;

				if (props.designOptions.isHasBorder) {
					return bg + border + textColor;
				} else {
					return bg;
				}
			});
			const uncheckedStyles = computed(() => {
				const bg = `background-color: ${props.designOptions.defaultColor};`;
				const border = `border-color: ${props.designOptions.accentColor};`;

				if (props.designOptions.isHasBorder) {
					return bg + border;
				} else {
					return bg;
				}
			});

			return {
				isChecked,

				checkedStyles,
				uncheckedStyles,
			};
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
