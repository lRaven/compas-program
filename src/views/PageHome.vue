<template>
	<div class="page-home page">
		<the-header />

		<main class="page-home__main main">
			<the-banner />
			<the-benefits />
			<the-projects v-model="projectsSectionPosition"></the-projects>
			<the-workflow />
			<the-questions />
		</main>

		<arrow-anchor-link
			:projectsSectionPosition="projectsSectionPosition"
		></arrow-anchor-link>

		<the-footer />
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader.vue";

	import TheBanner from "@/components/TheBanner.vue";
	import TheBenefits from "@/components/TheBenefits.vue";
	import TheProjects from "@/components/TheProjects.vue";
	import TheWorkflow from "@/components/TheWorkflow.vue";
	import TheQuestions from "@/components/TheQuestions.vue";

	import ArrowAnchorLink from "@/components/ArrowAnchorLink.vue";

	import TheFooter from "@/components/TheFooter.vue";

	export default {
		name: "PageHome",
		components: {
			TheHeader,

			TheBanner,
			TheBenefits,
			TheProjects,
			TheWorkflow,
			TheQuestions,

			ArrowAnchorLink,

			TheFooter,
		},
		data: () => ({
			projectsSectionPosition: {},
		}),
		methods: {},
	};
</script>

<style lang="scss" scoped>
	.page-home {
		overflow: hidden;
		position: relative;
		&__main {
		}
	}
</style>
