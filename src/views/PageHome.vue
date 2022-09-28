<template>
	<div class="page-home page">
		<the-header />

		<main class="page-home__main main">
			<the-banner />
			<the-benefits />
			<the-projects @openPopup="openPopup"></the-projects>
			<the-workflow />
			<the-questions @openPopup="openPopup"></the-questions>
		</main>

		<the-footer />

		<transition mode="out-in" name="fade">
			<quiz-popup
				v-if="isPopupOpen"
				:isPopupOpen="isPopupOpen"
				@closePopup="closePopup"
			></quiz-popup>
		</transition>
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader.vue";

	import TheBanner from "@/components/TheBanner.vue";
	import TheBenefits from "@/components/TheBenefits.vue";
	import TheProjects from "@/components/TheProjects.vue";
	import TheWorkflow from "@/components/TheWorkflow.vue";
	import TheQuestions from "@/components/TheQuestions.vue";

	import TheFooter from "@/components/TheFooter.vue";

	import QuizPopup from "@/components/quiz/quizPopup.vue";

	export default {
		name: "PageHome",
		components: {
			TheHeader,

			TheBanner,
			TheBenefits,
			TheProjects,
			TheWorkflow,
			TheQuestions,

			TheFooter,

			QuizPopup,
		},
		data: () => ({ isPopupOpen: true }),
		methods: {
			openPopup() {
				document.querySelector("body").classList.add("locked");
				this.isPopupOpen = true;
			},
			closePopup() {
				document.querySelector("body").classList.remove("locked");
				this.isPopupOpen = false;
			},
		},
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
