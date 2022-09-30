<template>
	<label class="r-filepicker">
		<input
			type="file"
			class="r-filepicker__real"
			@change="
				file = $event.target.files.item(0).name;
				this.$emit('update:modelValue', $event.target.files.item(0));
			"
		/>
		<div class="r-filepicker__fake">{{ file || description }}</div>
	</label>
</template>

<script>
	export default {
		name: "rFilepicker",
		props: { description: String },
		data: () => ({ file: null }),
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
				padding: 2rem;
			}
		}
	}
</style>
