<template>
	<div class="quiz-popup" @click="this.$emit('closePopup')">
		<transition mode="out-in">
			<div
				class="quiz-popup__content"
				v-show="isPopupContentVisible"
				@click.stop
			>
				<button
					class="quiz-popup__close"
					@click="this.$emit('closePopup')"
				>
					<img src="/img/icon/cross.svg" alt="close" />
				</button>

				<div class="quiz-popup__slides">
					<transition mode="out-in" name="fade-left">
						<div
							class="quiz-popup__slide quiz-popup__slide-1"
							v-show="quizData.progress.step === 1"
						>
							<p class="quiz-popup__slide-title">
								Как должен выглядеть результат?
							</p>
							<div class="quiz-popup__slide-1-row">
								<text-checkbox
									v-for="(type, index) in quizData.types"
									:key="type.id"
									:color="type.color"
									:text="type.description"
									:types="quiz.types"
									:selectedValue="index + 1"
									@change="collectTypes"
								>
								</text-checkbox>
							</div>
							<r-input
								placeholder="Свой вариант"
								v-model.trim="quiz.types_personal"
							></r-input>
						</div>
					</transition>

					<transition mode="out-in" name="fade-left">
						<div
							class="quiz-popup__slide quiz-popup__slide-2"
							v-show="quizData.progress.step === 2"
						>
							<p class="quiz-popup__slide-title">
								Как должен выглядеть результат?
							</p>

							<div class="quiz-popup__slide-2-details">
								<r-textarea
									placeholder="Мне нужно..."
								></r-textarea>
								<r-input
									placeholder="Вставить ссылку на референс"
								></r-input>
								<r-filepicker
									description="Прикрепить материал"
								></r-filepicker>
							</div>
						</div>
					</transition>
				</div>

				<div class="quiz-popup__bottom">
					<r-button
						text="Назад"
						color="gray"
						v-show="quizData.progress.step > 1"
						@click="quizData.progress.step--"
					></r-button>

					<div class="quiz-popup__bottom-col">
						<span class="quiz-popup__bottom-counter">
							{{
								quizData.progress.step +
								"/" +
								quizData.progress.steps
							}}
						</span>
						<r-button
							text="Дальше"
							@click="quizData.progress.step++"
						></r-button>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		name: "quizPopup",
		props: {
			isPopupOpen: {
				value: Boolean,
				default: false,
			},
		},
		data: () => ({
			isPopupContentVisible: false,

			quiz: {
				types: [],
				types_personal: null,

				details: {
					description: null,
					link: null,
					file: null,
				},
				price: null,
				deadline: null,
				contacts: {
					name: null,
					job_place: null,
					link: null,
				},
			},

			quizData: {
				progress: {
					steps: 4,
					step: 1,
				},
				types: [
					{ id: 1, description: "Вебсайт", color: "#9FB0ED" },
					{
						id: 2,
						description: "Мобильное приложение",
						color: "#E7ED9F",
					},
					{ id: 3, description: "Личный кабинет", color: "#ED9F9F" },
					{
						id: 4,
						description: "Внутренний продукт",
						color: "#9FEDA7",
					},
					{ id: 5, description: "Дизайн система", color: "#FFC9AA" },
					{
						id: 6,
						description: "Бренд для компании или продукта",
						color: "#9FB0ED",
					},
				],
			},
		}),
		methods: {
			collectTypes(value, checked) {
				if (checked) {
					this.quiz.types.push(value);
				} else {
					this.quiz.types = this.quiz.types.filter(
						(el) => el !== value
					);
				}
			},
		},
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
			display: grid;
			grid-template-rows: max-content 1fr max-content;
			cursor: default;
			padding: 6rem;
			background-color: #f8f8f8;
			border-radius: 4.8rem;
			width: calc(100vw - 6rem);
			min-height: 73rem;
		}

		&__close {
			width: max-content;
			background-color: transparent;
			margin-left: auto;
		}

		&__slides {
			display: grid;
			grid-template-columns: 1fr;
			margin-bottom: 10rem;
		}
		&__slide {
			grid-area: 1/1;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: auto;
			height: 100%;
			width: 100%;

			&-1 {
				max-width: 114rem;
				&-row {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					gap: 2rem;
					margin-bottom: 2rem;
				}
				.r-input {
					max-width: 63.5rem;
				}
			}

			&-2 {
				&-details {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					grid-template-rows: repeat(2, max-content);
					.r-textarea {
						grid-row: 1/3;
					}
				}
			}

			&-title {
				font-size: 4rem;
				margin-bottom: 10rem;
			}
			&-col {
			}
		}

		&__bottom {
			margin-top: auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 5rem;
			&-col {
				display: flex;
				align-items: center;
				gap: 4rem;
				margin-left: auto;
			}
			&-counter {
				color: $middle-gray;
			}
		}
	}
</style>
