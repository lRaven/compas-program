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
							v-show="quizProgress.step === 1"
						>
							<p class="quiz-popup__slide-title">
								Как должен выглядеть результат?
							</p>
							<div class="quiz-popup__slide-1-row">
								<text-checkbox
									v-for="(
										result, index
									) in quizData.result_view"
									:key="result.id"
									:color="result.color"
									:text="result.description"
									:selectedValue="index + 1"
									@change="collectTypes"
								>
								</text-checkbox>
							</div>
							<r-input
								placeholder="Свой вариант"
								v-model.trim="quiz.result_view_self"
							></r-input>
						</div>
					</transition>

					<transition mode="out-in" name="fade-left">
						<div
							class="quiz-popup__slide quiz-popup__slide-2"
							v-show="quizProgress.step === 2"
						>
							<p class="quiz-popup__slide-title">
								Как должен выглядеть результат?
							</p>

							<div class="quiz-popup__slide-2-details">
								<r-textarea
									placeholder="Мне нужно..."
									v-model.trim="quiz.wishes"
								></r-textarea>
								<r-input
									type="url"
									placeholder="Вставить ссылку на референс"
									v-model.trim="quiz.url_reference"
								></r-input>
								<r-filepicker
									description="Прикрепить материал"
									v-model="quiz.file"
								></r-filepicker>
							</div>
						</div>
					</transition>

					<transition mode="out-in" name="fade-left">
						<div
							class="quiz-popup__slide quiz-popup__slide-3"
							v-show="quizProgress.step === 3"
						>
							<p
								class="quiz-popup__slide-title quiz-popup__slide-3-title"
							>
								Оптимальная стоимость
							</p>
							<div class="quiz-popup__slide-3-row">
								<text-radio
									v-for="(cost, index) in quizData.cost"
									:key="cost.id"
									:designOptions="{
										accentColor: cost.color,
										defaultColor: '#DFE3E3',
										isHasBorder: false,
									}"
									:text="cost.description"
									:selectedValue="quiz.cost"
									:value="index + 1"
									radioGroup="cost"
									v-model.number="quiz.cost"
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
									v-for="(period, index) in quizData.period"
									:key="period.id"
									:designOptions="{
										accentColor: period.color,
										defaultColor: '#DFE3E3',
										isHasBorder: false,
									}"
									:text="period.description"
									:selectedValue="quiz.period"
									:value="index + 1"
									radioGroup="period"
									v-model.number="quiz.period"
								>
								</text-radio>
							</div>
						</div>
					</transition>

					<transition mode="out-in" name="fade-left">
						<div
							class="quiz-popup__slide quiz-popup__slide-4"
							v-show="quizProgress.step === 4"
						>
							<p class="quiz-popup__slide-title">
								Расскажите о себе
							</p>

							<form
								class="quiz-popup__form"
								@submit.prevent="sendForm"
								ref="form"
							>
								<r-input
									placeholder="Ваше имя"
									v-model.trim="quiz.first_name"
								></r-input>
								<r-input
									placeholder="Где вы работаете"
									v-model.trim="quiz.work_place"
								></r-input>
								<r-input
									placeholder="Как с вами связаться"
									v-model.trim="quiz.connector"
								></r-input>
								<r-input
									placeholder="За что отвечаете в компании"
									v-model.trim="quiz.responsibilities"
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
							v-show="quizProgress.step === 5"
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
							center: quizProgress.step === quizProgress.steps,
						}"
						text="Назад"
						:color="
							quizProgress.step === quizProgress.steps
								? 'green'
								: 'gray'
						"
						v-show="quizProgress.step > 1"
						@click="quizProgress.step--"
					></r-button>

					<div
						class="quiz-popup__bottom-col"
						v-show="
							this.quizProgress.step < this.quizProgress.steps - 1
						"
					>
						<span class="quiz-popup__bottom-counter">
							{{
								quizProgress.step +
								"/" +
								(quizProgress.steps - 1)
							}}
						</span>

						<r-button
							text="Дальше"
							@click="quizProgress.step++"
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
		watch: {
			"quiz.result_view_self"() {
				const resultViewLength = this.quizData.result_view.length + 1;

				if (this.quiz.result_view_self.length > 0) {
					const find = this.quiz.result_view.find(
						(el) => el === resultViewLength
					);

					if (!find) {
						this.quiz.result_view.push(resultViewLength);
					}
				} else {
					this.quiz.result_view = this.quiz.result_view.filter(
						(el) => el !== resultViewLength
					);
				}
			},
		},
		computed: {
			isFormValid() {
				const firstNameLength = this.quiz.first_name.length;
				const workPlaceLength = this.quiz.work_place.length;
				const connectorLength = this.quiz.connector.length;
				const responsibilitiesLength =
					this.quiz.responsibilities.length;

				if (
					firstNameLength > 0 &&
					workPlaceLength > 0 &&
					connectorLength > 0 &&
					responsibilitiesLength > 0
				) {
					return true;
				} else return false;
			},
		},
		data: () => ({
			isPopupContentVisible: false,

			quiz: {
				result_view: [],
				result_view_self: "",

				wishes: "",
				url_reference: "",
				file: "",

				cost: "",
				period: "",

				first_name: "",
				work_place: "",
				connector: "",
				responsibilities: "",
			},

			quizProgress: {
				steps: 5,
				step: 1,
			},

			quizData: {
				result_view: [
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
				cost: [
					{ id: 1, description: "до 30 тыс.", color: "#9FB0ED" },
					{
						id: 2,
						description: "от 30 до 100 тыс.",
						color: "#E7ED9F",
					},
					{
						id: 3,
						description: "от 100 до 300 тыс.",
						color: "#ED9F9F",
					},
					{ id: 4, description: "больше 300 тыс.", color: "#9FEDA7" },
				],
				period: [
					{ id: 1, description: "1-3 месяца", color: "#9FB0ED" },
					{ id: 2, description: "6-12 месяцев", color: "#E7ED9F" },
					{ id: 3, description: "12+ месяцев", color: "#ED9F9F" },
				],
			},
		}),
		methods: {
			collectTypes(value, checked) {
				if (checked) {
					this.quiz.result_view.push(value);
				} else {
					this.quiz.result_view = this.quiz.result_view.filter(
						(el) => el !== value
					);
				}
			},

			async sendForm() {
				try {
					this.quiz.result_view = JSON.stringify(
						this.quiz.result_view
					);
					const response = await sendQuiz(this.quiz);

					if (response.status === 201) {
						this.quizProgress.step = this.quizProgress.steps;

						if (typeof this.quiz.result_view === "string") {
							this.quiz.result_view = JSON.parse(
								this.quiz.result_view
							);
						}
					}
				} catch (err) {
					if (typeof this.quiz.result_view === "string") {
						this.quiz.result_view = JSON.parse(
							this.quiz.result_view
						);
					}

					const error_list = returnErrorMessages(err.response.data);
					error_list.forEach((el) => {
						this.toast.error(el);
					});
				}
			},

			resetForm() {
				for (const key in this.quiz) {
					if (Object.hasOwnProperty.call(this.quiz, key)) {
						if (Array.isArray(this.quiz[key])) {
							this.quiz[key] = [];
						} else {
							this.quiz[key] = "";
						}
					}
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
		padding: 3rem;
		overflow-y: auto;
		@media (max-height: 800px) {
			display: block;
		}
		@media (max-width: 540px) {
			padding: 0;
			overflow: hidden;
		}

		&__content {
			display: grid;
			grid-template-rows: max-content 1fr max-content;
			cursor: default;
			padding: 6rem;
			background-color: #f8f8f8;
			border-radius: 4.8rem;
			max-width: 180rem;
			width: 100%;
			min-height: 73rem;
			@media (max-height: 800px) {
				min-height: max-content;
				margin: auto;
			}
			@media (max-width: 767px) {
				border-radius: 2rem;
				padding: 3rem 2rem;
				min-height: max-content;
			}
			@media (max-width: 540px) {
				height: 100vh;
				width: 100vw;
				border-radius: 0;
				overflow-y: auto;
			}
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
			@media (max-width: 767px) {
				margin-bottom: 5rem;
			}
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
				text-align: center;
				@media (max-width: 767px) {
					margin-bottom: 5rem;
				}
			}

			&-1 {
				max-width: 114rem;
				&-row {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					gap: 2rem;
					margin-bottom: 2rem;
					@media (max-width: 540px) {
						flex-direction: column;
						width: 100%;
					}
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
					@media (max-width: 767px) {
						display: flex;
						flex-direction: column;
						width: 100%;
					}
					.r-textarea {
						grid-row: 1/3;
						@media (max-width: 767px) {
							height: 15rem;
						}
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
					@media (max-width: 540px) {
						flex-direction: column;
						width: 100%;
					}
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
			@media (max-width: 767px) {
				grid-template-columns: 1fr;
				width: 100%;
			}

			.r-button {
				grid-column: 1/3;
				width: 100%;
				color: $gray;
				@media (max-width: 767px) {
					grid-column: inherit;
				}
			}
		}

		&__bottom {
			margin-top: auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 5rem;
			@media (max-width: 540px) {
				flex-direction: column-reverse;
			}
			&-col {
				display: flex;
				align-items: center;
				gap: 4rem;
				margin-left: auto;
			}
			&-counter {
				color: $middle-gray;
			}

			.r-button {
				&:nth-child(1) {
					@media (max-width: 540px) {
						width: 100%;
					}
				}
			}
		}
	}
</style>
