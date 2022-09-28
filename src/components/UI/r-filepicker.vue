<template>
	<label class="r-filepicker">
		<input type="file" class="r-filepicker__real" />
		<div class="r-filepicker__fake">{{ description }}</div>
	</label>
</template>

<script>
	export default {
		name: "rFilepicker",
		props: {
			description: String,
		},
	};
</script>

<style lang="scss" scoped>
	.r-filepicker {
		&__real {
			display: none;
		}
		&__fake {
			background-color: #dfe3e3;
			width: 100%;
			padding: 2rem 3rem;
			border-radius: 1rem;
			font-size: 2.4rem;
		}
	}
</style>
