<template>
	<section class="the-workflow">
		<div class="the-workflow__container">
			<h1 class="thr-workflow__title">Xод работы</h1>

			<div class="the-workflow__top">
				<img
					src="/img/icon/arrow-triangle.svg"
					alt="arrow"
					class="the-workflow__arrow"
				/>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "TheWorkflow",
	};
</script>

<style lang="scss" scoped>
	.the-workflow {
		&__container {
		}

		&__title {
			margin-bottom: 16rem;
		}
	}
</style>
