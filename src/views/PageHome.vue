<template>
	<div class="page-home page">
		<the-header />

		<main class="page-home__main main">
			<the-banner />
			<the-steps />
		</main>

		<arrow-anchor-link></arrow-anchor-link>
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader.vue";

	import TheBanner from "@/components/TheBanner.vue";
	import TheSteps from "@/components/TheSteps.vue";

	import ArrowAnchorLink from "@/components/ArrowAnchorLink.vue";

	export default {
		name: "PageHome",
		components: {
			TheHeader,

			TheBanner,
			TheSteps,

			ArrowAnchorLink,
		},
	};
</script>

<style lang="scss" scoped>
	.page-home {
		&__main {
		}
	}
</style>
