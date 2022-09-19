<template>
	<div class="page-home page">
		<the-header />

		<main class="page-home__main main">
			<the-banner />
			<the-steps />
		</main>
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader.vue";

	import TheBanner from "@/components/TheBanner.vue";
	import TheSteps from "@/components/TheSteps.vue";

	export default {
		name: "PageHome",
		components: {
			TheHeader,

			TheBanner,
			TheSteps,
		},
	};
</script>

<style lang="scss" scoped>
	.page-home {
		&__main {
			height: 200vh;
		}
	}
</style>
