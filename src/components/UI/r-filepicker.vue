<template>
	<label class="r-filepicker">
		<input
			type="file"
			class="r-filepicker__real"
			@change="
				file = $event.target.files.item(0).name;
				$emit('update:modelValue', $event.target.files.item(0));
			"
		/>
		<div class="r-filepicker__fake">{{ file || description }}</div>
	</label>
</template>

<script>
	import { ref } from 'vue';

	export default {
		name: 'rFilepicker',
		props: { description: String },
		setup() {
			const file = ref(null);
			return { file };
		},
	};
</script>

<style lang="scss" scoped>
	.r-filepicker {
		&__real {
			display: none;
		}
		&__fake {
			user-select: none;
			cursor: pointer;
			background-color: #dfe3e3;
			width: 100%;
			padding: 2rem 3rem;
			border-radius: 1rem;
			font-size: 2.4rem;
			@media (max-width: 767px) {
				font-size: 1.8rem;
			}
			@media (max-width: 540px) {
				padding: 1.5rem;
			}
		}
	}
</style>
