<template>
	<div class="quiz-popup" @click="this.$emit('closePopup')">
		<transition mode="out-in">
			<div
				class="quiz-popup__content"
				v-show="isPopupContentVisible"
				@click.stop
			>
				<div class="quiz-popup__slides">
					<transition mode="out-in">
						<div
							class="quiz-popup__slide"
							v-show="quiz.progress.step === 1"
						>
							<p class="quiz-popup__title">
								Какой сайт вам нужен?
							</p>
							<div class="quiz-popup__slide-col">
								<site-type
									:siteType="1"
									:siteTypeGroupName="'siteTypes'"
									v-model="quiz.siteType"
								></site-type>
							</div>
							<div class="quiz-popup__slide-col">
								<site-type
									:siteType="2"
									:siteTypeGroupName="'siteTypes'"
									v-model="quiz.siteType"
								></site-type>
							</div>
							<div class="quiz-popup__slide-col">
								<site-type
									:siteType="3"
									:siteTypeGroupName="'siteTypes'"
									v-model="quiz.siteType"
								></site-type>
							</div>
						</div>
					</transition>
				</div>

				<button
					class="quiz-popup__next"
					@click="quiz.progress.step++"
					:disabled="isNextButtonDisabled"
				>
					Другое
				</button>

				<div class="quiz-popup__steps">
					<span
						class="quiz-popup__step"
						:class="{ active: index + 1 <= quiz.progress.step }"
						v-for="(step, index) in quiz.progress.steps"
						:key="step.id"
					>
					</span>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import SiteType from "@/components/quiz/siteType.vue";

	export default {
		name: "quizPopup",
		components: { SiteType },
		watch: {
			quiz: {
				handler() {
					if (this.quiz.progress.step > this.quiz.progress.steps)
						this.quiz.progress.step = this.quiz.progress.steps;

					if (this.quiz.siteType === null)
						this.isNextButtonDisabled = true;
					else this.isNextButtonDisabled = false;
				},
				deep: true,
			},
		},
		props: {
			isPopupOpen: {
				value: Boolean,
				default: false,
			},
		},
		data: () => ({
			isPopupContentVisible: false,
			isNextButtonDisabled: true,

			quiz: {
				siteType: null,
				progress: {
					steps: 5,
					step: 1,
				},
			},
		}),
		mounted() {
			setTimeout(() => {
				this.isPopupContentVisible = true;
			}, 300);
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.quiz-popup {
		cursor: pointer;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba($black, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 4;

		&__content {
			display: flex;
			flex-direction: column;
			cursor: default;
			padding: 6rem 10rem;
			background-color: $white;
			border-radius: 4.8rem;
			width: calc(100vw - 6rem);
		}
		&__title {
			font-size: 4rem;
			margin-bottom: 12.5rem;
			grid-column: 1/4;
		}

		&__slides {
			display: grid;
			grid-template-columns: 1fr;
			margin-bottom: 1.5rem;
		}
		&__slide {
			grid-area: 1/1;
			&:first-child {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				grid-gap: 4.5rem;
				.pc-template {
					&.selected {
						.pc-template {
							&__landing {
								background-color: $accent;
							}
						}
					}
					&__landing {
						height: 100%;
					}
				}
			}
			&-col {
			}
		}

		&__site {
			&-radio {
				display: none;
			}
			&-card {
				&-body {
				}
			}
		}
		&__next {
			margin-left: auto;
			background-color: transparent;
			color: $accent;
			position: relative;
			margin-bottom: 5rem;
			&::after {
				content: "";
				position: absolute;
				left: 0;
				right: 0;
				bottom: -0.2rem;
				height: 0.1rem;
				background-color: $accent;
			}
		}

		&__steps {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 4.5rem;
		}
		&__step {
			height: 1.3rem;
			width: 1.3rem;
			background-color: #d9d9d9;
			border-radius: 50%;
			transition: all 0.3s ease;
			&.active {
				background-color: $accent;
			}
		}
	}
</style>
