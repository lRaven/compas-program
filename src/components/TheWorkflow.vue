<template>
	<section class="the-workflow" id="workflow">
		<div class="the-workflow__container center">
			<div class="the-workflow__header">
				<h1 class="the-workflow__title">Xод работы</h1>

				<img
					src="/img/icons/arrow-triangle.svg"
					alt="arrow"
					class="the-workflow__arrow"
					v-show="documentWidth <= 1023"
				/>
			</div>

			<div class="the-workflow__content">
				<div class="the-workflow__col the-workflow__company">
					<img
						src="/img/icons/arrow-triangle.svg"
						alt="arrow"
						class="the-workflow__arrow"
						v-show="documentWidth > 1440"
					/>

					<p class="the-workflow__company-title">O нас</p>
					<h3 class="the-workflow__company-name">Compas Pro team.</h3>

					<img
						src="/img/about/about.jpg"
						class="the-workflow__company-photo"
						alt="company-photo"
					/>

					<p
						class="the-workflow__company-description the-workflow__company-description_ttu"
					>
						НАШИ СОТРУДНИКИ ИМЕЮТ ПРОФИЛЬНЫЕ КВАЛИФИКАЦИИ.
					</p>
					<p
						class="the-workflow__company-description the-workflow__company-description_ttu"
					>
						ГЕНЕРАЛЬНЫЙ ДИРЕКТОР ВЕДЕТ ОБЩЕНИЕ С ВАМИ. ЛИЧНЫЙ МЕНЕДЖЕР
						ЗАНИМАЕТСЯ РАЗРАБОТКОЙ БИЗНЕС-ЛОГИКИ.
					</p>
					<p
						class="the-workflow__company-description the-workflow__company-description_ttu"
					>
						КОМАНДА ДИЗАЙНЕРОВ ОТВЕЧАЕТ ЗА СОСТАВЛЕНИЕ ПРОТОТИПОВ, КОНЦЕПТОВ,
						ПОДБОР ПАЛИТРЫ ЦВЕТОВ, ДИЗАЙН-МАКЕТЫ, ПРИМЕНЕНИЕ ПОЛЬЗОВАТЕЛЬСКОГО
						ОПЫТА И КОНТЕНТ.
					</p>
					<p
						class="the-workflow__company-description the-workflow__company-description_ttu"
					>
						КОМАНДА BACKEND-РАЗРАБОТКИ ПРОРАБАТЫВАЕТ ОСНОВНУЮ ЛОГИКУ САЙТОВ
						(РЕГИСТРАЦИЯ НА РЕСУРСЕ, АВТОРИЗАЦИЯ, ХРАНЕНИЕ ДАННЫХ, ОБРАБОТКА
						ДАННЫХ, ВНЕДРЕНИЕ МАШИННОГО ОБУЧЕНИЯ).
					</p>
					<p
						class="the-workflow__company-description the-workflow__company-description_ttu"
					>
						КОМАНДА FRONTEND-РАЗРАБОТКИ ЗАНИМАЕТСЯ РАЗРАБОТКОЙ ВИЗУАЛЬНОЙ ЧАСТИ.
					</p>
					<p class="the-workflow__company-description">
						С заботой о вашем продукте.
					</p>
				</div>

				<div class="the-workflow__col the-workflow__steps">
					<img
						src="/img/icons/arrow-triangle.svg"
						alt="arrow"
						class="the-workflow__arrow"
						v-show="documentWidth < 1440 && documentWidth > 1023"
					/>
					<h4 class="the-workflow__steps-title">
						Вы контролируете промежуточные результаты и<br />
						имеете возможность вносить правки, чтобы в<br />
						конечном итоге получить желаемый результат, а не<br />
						кота в мешке.
					</h4>

					<div class="the-workflow__step">
						<p class="the-workflow__step-counter">0.1</p>
						<div class="the-workflow__step-name">
							<h3 class="the-workflow__step-name-1">Знакомство</h3>
							<h3 class="the-workflow__step-name-2">Знакомство</h3>
						</div>
						<p class="the-workflow__step-description">
							Вы оставляете заявку, и наши менеджеры<br />
							связываются с вами.
						</p>
					</div>

					<div class="the-workflow__step">
						<p class="the-workflow__step-counter">0.2</p>
						<div class="the-workflow__step-name">
							<h3 class="the-workflow__step-name-1">Исследование</h3>
							<h3 class="the-workflow__step-name-2">Исследование</h3>
						</div>

						<p class="the-workflow__step-description">
							Вы приезжаете в офис, где за чашкой кофе мы обсуждаем ваш<br />
							проект. Если нет возможности приехать, пообщаемся по<br />
							видеосвязи.
						</p>
					</div>

					<div class="the-workflow__step">
						<p class="the-workflow__step-counter">0.3</p>
						<div class="the-workflow__step-name">
							<h3 class="the-workflow__step-name-1">Согласование</h3>
							<h3 class="the-workflow__step-name-2">Согласование</h3>
						</div>
						<p class="the-workflow__step-description">
							Составляем ТЗ на основании<br />
							ваших запросов.
						</p>
					</div>

					<div class="the-workflow__step">
						<p class="the-workflow__step-counter">0.4</p>
						<div class="the-workflow__step-name">
							<h3 class="the-workflow__step-name-1">Анализ</h3>
							<h3 class="the-workflow__step-name-2">Анализ</h3>
						</div>
						<p class="the-workflow__step-description">
							Разбиваем всю работу на этапы, утверждаем<br />
							сроки выполнения и цену, подписываем договор.
						</p>
					</div>

					<div class="the-workflow__step">
						<p class="the-workflow__step-counter">0.5</p>
						<div class="the-workflow__step-name">
							<h3 class="the-workflow__step-name-1">Разработка</h3>
							<h3 class="the-workflow__step-name-2">Разработка</h3>
						</div>
						<p class="the-workflow__step-description">
							Декомпозируем задачи и<br />
							приступаем к работе.
						</p>
					</div>

					<div class="the-workflow__step">
						<p class="the-workflow__step-counter">0.6</p>
						<div class="the-workflow__step-name">
							<h3 class="the-workflow__step-name-1">Забота</h3>
							<h3 class="the-workflow__step-name-2">Забота</h3>
						</div>
						<p class="the-workflow__step-description">
							Ведём протокол совещаний, учитываем все ваши пожелания<br />
							и правки, чтобы ничего не было упущено.
						</p>
					</div>

					<div class="the-workflow__step">
						<p class="the-workflow__step-counter">0.7</p>
						<div class="the-workflow__step-name">
							<h3 class="the-workflow__step-name-1">Сдача проекта</h3>
							<h3 class="the-workflow__step-name-2">Сдача проекта</h3>
						</div>
						<p class="the-workflow__step-description">
							Сдаём проект, проводим обучение, выдаём<br />
							необходимую документацию по работе с сервисом.
						</p>
					</div>

					<div class="the-workflow__step">
						<p class="the-workflow__step-counter">0.8</p>
						<div class="the-workflow__step-name">
							<h3 class="the-workflow__step-name-1">Поддержка</h3>
							<h3 class="the-workflow__step-name-2">Поддержка</h3>
						</div>
						<p class="the-workflow__step-description">
							Остаёмся на связи для ежедневной поддержки.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'TheWorkflow',
		computed: {
			...mapState(['documentWidth']),
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-workflow {
		background-color: $bg;
		&__container {
		}
		&__header {
			display: flex;
			flex-direction: column;
			margin-bottom: 16rem;
			@media (max-width: 1440px) {
				margin-bottom: 5rem;
			}
			@media (max-width: 1023px) {
				flex-direction: column-reverse;
			}
		}

		&__content {
			display: flex;
			justify-content: space-between;
			gap: 5rem;
			@media (max-width: 1440px) {
				flex-direction: column-reverse;
			}
		}
		&__col {
		}

		&__arrow {
			height: 7rem;
			transform: rotate(90deg);
			margin-bottom: 25rem;
			@media (max-width: 1440px) {
				margin: 0;
				width: 7rem;
			}
			@media (max-width: 1023px) {
				transform: rotate(180deg);
				margin-left: auto;
			}
		}

		&__company {
			@media (max-width: 1440px) {
				display: grid;
				grid-template-columns: max-content minmax(0, 68rem);
				grid-gap: 0 10rem;
			}
			@media (max-width: 1023px) {
				grid-gap: 0 5rem;
			}
			@media (max-width: 767px) {
				display: block;
			}

			&-title {
				text-transform: uppercase;
				margin-bottom: 1rem;
				color: $gray;
				@media (max-width: 1440px) {
					grid-column: 1/3;
				}
			}
			&-name {
				margin-bottom: 3rem;
				font-size: $text-xl;
				@media (max-width: 1440px) {
					grid-column: 1/3;
				}
			}
			&-photo {
				border-radius: 2rem;
				width: 100%;
				max-width: 38rem;
				height: 25rem;
				object-fit: cover;
				margin-bottom: 5rem;
				@media (max-width: 1440px) {
					grid-row: 3/8;
					margin-bottom: 0;
					height: 100%;
				}
				@media (max-width: 767px) {
					margin-bottom: 5rem;
				}
			}

			&-description {
				font-size: 1.4rem;
				color: $gray;

				&_ttu {
					text-transform: uppercase;
					max-width: 36rem;
					grid-column: 2/3;
					@media (max-width: 1440px) {
						max-width: 68rem;
					}
				}
				+ .the-workflow__company-description {
					margin-top: 3rem;
					@media (max-width: 1440px) {
						margin-top: 2rem;
					}
				}
			}
		}

		&__steps {
			max-width: 60%;
			width: 100%;
			height: max-content;
			display: grid;
			grid-template-columns: 7rem 24rem 1fr;
			grid-gap: 0 8rem;
			@media (max-width: 1440px) {
				max-width: 100%;
			}
			@media (max-width: 1023px) {
				display: flex;
				flex-direction: column;
			}

			&-title {
				color: $gray;
				text-transform: uppercase;
				margin-bottom: 12rem;
				grid-column: 2/4;
				@media (max-width: 1440px) {
					margin-left: auto;
				}
				@media (max-width: 767px) {
					margin-bottom: 7rem;
					margin-left: 0;
				}
			}
		}
		&__step {
			display: grid;
			grid-template-columns: 7rem 24rem 1fr;
			grid-gap: 0 8rem;
			align-items: center;
			grid-column: 1/4;
			padding: 4rem 0;
			border-bottom: 0.1rem solid #ebebeb;
			@media (max-width: 1440px) {
				grid-column: 2/4;
			}
			@media (max-width: 1023px) {
				grid-column: 1/4;
				grid-gap: 0 5rem;
			}
			@media (max-width: 767px) {
				grid-template-columns: 2.5rem 1fr;
				grid-gap: 2rem 3.8rem;
			}

			&-counter {
				color: $gray;
				font-size: $text-m;
			}
			&-name {
				position: relative;
				display: flex;
				overflow: hidden;
				&:hover {
					.the-workflow__step-name {
						&-1 {
							transform: translateX(calc(-100% - 2rem));
						}
						&-2 {
							left: 0;
						}
					}
				}
				&-1,
				&-2 {
					transition: all 0.3s ease;
					@media (max-width: 767px) {
						font-size: $text-m;
					}
					width: max-content;
				}
				&-1 {
				}
				&-2 {
					position: absolute;
					left: calc(100% + 2rem);
					top: 0;
				}
			}
			&-description {
				text-transform: uppercase;
				color: $gray;
				font-size: $text-s;
				@media (max-width: 767px) {
					grid-column: 2/3;
				}
			}
		}
	}
</style>
