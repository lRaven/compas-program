<template>
	<div class="page-home page">
		<TheHeader />

		<main class="page-home__main main">
			<TheBanner @open-popup="openPopup"></TheBanner>
			<TheBenefits @open-popup="openPopup"></TheBenefits>
			<TheProjects @open-popup="openPopup"></TheProjects>
			<TheWorkflow />
			<TheQuestions @open-popup="openPopup"></TheQuestions>
		</main>

		<TheFooter />

		<transition mode="out-in" name="fade">
			<QuizPopup
				v-if="isPopupOpen"
				:is-popup-open="isPopupOpen"
				@close-popup="closePopup"
			></QuizPopup>
		</transition>
	</div>
</template>

<script>
	import TheHeader from '@/components/TheHeader.vue';

	import TheBanner from '@/components/TheBanner.vue';
	import TheBenefits from '@/components/TheBenefits.vue';
	import TheProjects from '@/components/TheProjects.vue';
	import TheWorkflow from '@/components/TheWorkflow.vue';
	import TheQuestions from '@/components/TheQuestions.vue';

	import TheFooter from '@/components/TheFooter.vue';

	import QuizPopup from '@/components/quiz/quizPopup.vue';

	import { ref } from 'vue';

	export default {
		name: 'PageHome',
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
		setup() {
			const isPopupOpen = ref(false);
			const openPopup = () => {
				isPopupOpen.value = true;
				document.querySelector('body').classList.add('locked');
			};
			const closePopup = () => {
				isPopupOpen.value = false;
				document.querySelector('body').classList.remove('locked');
			};

			return { isPopupOpen, openPopup, closePopup };
		},
	};
</script>

<style lang="scss" scoped>
	.page-home {
		overflow: hidden;
		position: relative;
	}
</style>
