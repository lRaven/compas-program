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
									v-model="quiz.details.description"
								></r-textarea>
								<r-input
									type="url"
									placeholder="Вставить ссылку на референс"
									v-model="quiz.details.link"
								></r-input>
								<r-filepicker
									description="Прикрепить материал"
									v-model="quiz.details.file"
								></r-filepicker>
							</div>
						</div>
					</transition>

					<transition mode="out-in" name="fade-left">
						<div
							class="quiz-popup__slide quiz-popup__slide-3"
							v-show="quizData.progress.step === 3"
						>
							<p
								class="quiz-popup__slide-title quiz-popup__slide-3-title"
							>
								Оптимальная стоимость
							</p>
							<div class="quiz-popup__slide-3-row">
								<text-radio
									v-for="(type, index) in quizData.prices"
									:key="type.id"
									:designOptions="{
										accentColor: type.color,
										defaultColor: '#DFE3E3',
										isHasBorder: false,
									}"
									:text="type.description"
									:selectedValue="quiz.price"
									:value="index + 1"
									radioGroup="prices"
									v-model="quiz.price"
								>
								</text-radio>
							</div>

							<p
								class="quiz-popup__slide-title quiz-popup__slide-3-title"
							>
								Оптимальный срок
							</p>
							<div class="quiz-popup__slide-3-row">
								<text-radio
									v-for="(type, index) in quizData.deadlines"
									:key="type.id"
									:designOptions="{
										accentColor: type.color,
										defaultColor: '#DFE3E3',
										isHasBorder: false,
									}"
									:text="type.description"
									:selectedValue="quiz.deadline"
									:value="index + 1"
									radioGroup="deadlines"
									v-model="quiz.deadline"
								>
								</text-radio>
							</div>
						</div>
					</transition>

					<transition mode="out-in" name="fade-left">
						<div
							class="quiz-popup__slide quiz-popup__slide-4"
							v-show="quizData.progress.step === 4"
						>
							<p class="quiz-popup__slide-title">
								Расскажите о себе
							</p>

							<form
								class="quiz-popup__form"
								@submit.prevent="sendForm"
							>
								<r-input
									placeholder="Ваше имя"
									v-model="quiz.contacts.name"
								></r-input>
								<r-input
									placeholder="Где вы работаете"
									v-model="quiz.contacts.job"
								></r-input>
								<r-input
									placeholder="Как с вами связаться"
									v-model="quiz.contacts.link"
								></r-input>
								<r-input
									placeholder="За что отвечаете в компании"
									v-model="
										quiz.contacts.scope_of_responsibility
									"
								></r-input>
								<r-button
									:disabled="!isFormValid"
									type="submit"
									color="bordered"
									text="Отправить"
								></r-button>
							</form>
						</div>
					</transition>

					<transition mode="out-in" name="fade-left">
						<div
							class="quiz-popup__slide quiz-popup__slide-end"
							v-show="quizData.progress.step === 5"
						>
							<p class="quiz-popup__slide-title">
								Ваша заявка отправлена
							</p>

							<p class="quiz-popup__slide-end-description">
								Ваша заявка отправлена, в ближайщее время с вами
								свяжется наш менеджер.
							</p>

							<img
								src="/img/icon/face.svg"
								alt="face"
								class="quiz-popup__slide-end-icon"
							/>
						</div>
					</transition>
				</div>

				<div class="quiz-popup__bottom">
					<r-button
						:class="{
							center:
								quizData.progress.step ===
								quizData.progress.steps,
						}"
						text="Назад"
						:color="
							quizData.progress.step === quizData.progress.steps
								? 'green'
								: 'gray'
						"
						v-show="quizData.progress.step > 1"
						@click="quizData.progress.step--"
					></r-button>

					<div
						class="quiz-popup__bottom-col"
						v-show="
							quizData.progress.step < quizData.progress.steps
						"
					>
						<span class="quiz-popup__bottom-counter">
							{{
								quizData.progress.step +
								"/" +
								(quizData.progress.steps - 1)
							}}
						</span>

						<r-button
							:disabled="
								this.quizData.progress.step >=
								this.quizData.progress.steps - 1
							"
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
	import { sendQuiz } from "@/api/quiz";
	import { returnErrorMessages } from "@/js/returnErrorMessages";
	import { useToast } from "vue-toastification";

	export default {
		name: "quizPopup",
		props: {
			isPopupOpen: {
				value: Boolean,
				default: false,
			},
		},
		computed: {
			isFormValid() {
				const valid = Object.values(this.quiz.contacts).find((el) => {
					return el.length === 0;
				});

				if (valid === "") {
					return false;
				} else return true;
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
					name: "",
					job: "",
					link: "",
					scope_of_responsibility: "",
				},
			},

			quizData: {
				progress: {
					steps: 5,
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
				prices: [
					{ id: 1, description: "до 500 тыс.", color: "#9FB0ED" },
					{
						id: 2,
						description: "от 500 тыс. до 1 млн.",
						color: "#E7ED9F",
					},
					{ id: 3, description: "от 3 до 5 млн.", color: "#ED9F9F" },
					{ id: 4, description: "больше 5 млн.", color: "#9FEDA7" },
				],
				deadlines: [
					{ id: 1, description: "1-3 месяца", color: "#9FB0ED" },
					{ id: 2, description: "6-12 месяцев", color: "#E7ED9F" },
					{ id: 3, description: "12+ месяцев", color: "#ED9F9F" },
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

			async sendForm() {
				try {
					const response = await sendQuiz(this.quiz);

					if (response.status) {
						console.log(response);
						this.quizData.progress.step =
							this.quizData.progress.steps;
					}
					if (response.status === 400) {
						const error_list = returnErrorMessages(response.data);
						error_list.forEach((el) => {
							this.toast.error(el);
						});
					}
				} catch (err) {
					this.toast.error(
						"Что-то пошло не так. Повторите попытку позже."
					);
					throw new Error(err);
				}
			},
		},
		mounted() {
			setTimeout(() => {
				this.isPopupContentVisible = true;
			}, 300);
		},
		setup() {
			const toast = useToast();
			return { toast };
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
			&-title {
				font-size: 4rem;
				margin-bottom: 10rem;
			}

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
					grid-gap: 2rem;
					.r-textarea {
						grid-row: 1/3;
					}
				}
			}

			&-3 {
				&-title {
					margin-bottom: 4rem;
				}
				&-row {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					gap: 2rem;
					+ .quiz-popup__slide-title {
						margin-top: 6rem;
					}
				}
			}

			&-end {
				&-description {
					text-align: center;
					font-size: 2.4rem;
					max-width: 56rem;
					margin-bottom: 9rem;
				}
				&-icon {
					width: 6.4rem;
					height: 6.4rem;
					object-fit: contain;
				}
			}
		}

		&__form {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 2rem;

			.r-button {
				grid-column: 1/3;
				width: 100%;
				color: $gray;
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
