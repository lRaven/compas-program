<template>
	<section class="the-workflow" id="workflow">
		<div class="the-workflow__container center">
			<div class="the-workflow__header">
				<h1 class="the-workflow__title">Xод работы</h1>
				<h4 class="the-workflow__description">
					Вы видите промежуточные этапы и можете вносить правки, чтобы в
					конечном итоге получить желаемый результат
				</h4>
			</div>
			<img
				src="/img/icons/arrow-triangle.svg"
				alt="arrow"
				class="the-workflow__arrow"
			/>

			<div class="the-workflow__steps">
				<WorkflowStep
					v-for="step in workflowSteps"
					:key="step.id"
					:step="step"
				></WorkflowStep>
			</div>

			<div class="the-workflow__company">
				<h2 class="the-workflow__company-title">Compas Pro team</h2>

				<img
					src="/img/about/about.jpg"
					class="the-workflow__company-photo"
					alt="company-photo"
				/>

				<p class="the-workflow__company-description">
					Все сотрудники имеют профильные квалификации.
					<span class="the-workflow__company-description_accent">
						Генеральный директор
					</span>
					ведет общение с вами. Личный менеджер занимается разработкой
					бизнес-логики.
					<span class="the-workflow__company-description_accent">
						Команда дизайна
					</span>
					отвечает за составление прототипов, концептов, подбор палитры цветов,
					дизайн-макеты, применение пользовательского опыта и контент.
					<span class="the-workflow__company-description_accent">
						Команда backend-разработки
					</span>
					отвечает за основную логику сайтов (регистрация на ресурсе,
					авторизация, хранение и обработка данных) и внедрение машинного
					обучения.
					<span class="the-workflow__company-description_accent">
						Команда frontend-разработки
					</span>
					занимается визуальной частью.
				</p>
			</div>
		</div>
	</section>
</template>

<script>
	import WorkflowStep from '@/components/workflow/WorkflowStep.vue';

	export default {
		name: 'TheWorkflow',
		components: { WorkflowStep },
		setup() {
			const workflowSteps = [
				{
					id: 1,
					title: 'Знакомство',
					description:
						'Вы оставляете заявку, и наши\nменеджеры связываются с вами.',
				},
				{
					id: 2,
					title: 'Исследование',
					description:
						'Вы приезжаете в офис, где за чашкой кофе мы обсуждаем ваш проект.\nЕсли нет возможности приехать, пообщаемся по видеосвязи.',
				},
				{
					id: 3,
					title: 'Согласование',
					description: 'Составляем ТЗ на основании\nваших запросов.',
				},
				{
					id: 4,
					title: 'Анализ',
					description:
						'Разбиваем всю работу на этапы, утверждаем сроки\nвыполнения, цену и подписываем договор.',
				},
				{
					id: 5,
					title: 'Разработка',
					description: 'Декомпозируем задачи и\nприступаем к работе.',
				},
				{
					id: 6,
					title: 'Забота',
					description:
						'Ведём протокол совещаний. Все ваши пожелания и\nправки будут учтены, чтобы ничего не было упущено.',
				},
				{
					id: 7,
					title: 'Сдача проекта',
					description:
						'Сдаём проект, проводим обучение по пользованию сервисами,\nвыдаем всю документацию (инструкцию по пользованию).',
				},
				{
					id: 8,
					title: 'Поддержка',
					description: 'Остаёмся на ежедневной поддержке.',
				},
			];

			return { workflowSteps };
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-workflow {
		background-color: $bg;

		&__header {
			margin-bottom: 1rem;
			@media (min-width: 1024px) {
				display: grid;
				grid-template-columns: 0.5fr 27rem 2fr;
				grid-gap: 8rem;
				align-items: center;
			}
			@media (max-width: 1023px) {
				flex-direction: column-reverse;
			}
			@media (max-width: 767px) {
				margin-bottom: 4rem;
			}
		}

		&__title {
			@media (min-width: 1024px) {
				grid-column: 1/3;
			}
			@media (max-width: 1023px) {
				display: none;
			}
		}
		&__description {
			@media (min-width: 768px) {
				max-width: 48rem;
			}
			@media (max-width: 1023px) {
				font-size: $text-xl;
			}
		}

		&__arrow {
			display: block;
			height: 7rem;
			transform: rotate(180deg);
			margin-left: auto;
			margin-right: 14rem;
			@media (max-width: 1300px) {
				margin-right: 0;
			}
			@media (max-width: 1023px) {
				display: none;
			}
		}

		&__steps {
			margin-bottom: 20rem;
			@media (max-width: 767px) {
				margin-bottom: 7rem;
			}
		}

		&__company {
			@media (max-width: 767px) {
				display: flex;
				flex-direction: column;
			}
			&-title {
				margin-bottom: 3rem;
				@media (max-width: 767px) {
					font-size: 4.6rem;
				}
			}
			&-photo {
				border-radius: 2rem;
				width: 100%;
				height: 45rem;
				object-fit: cover;
				margin-bottom: 5rem;
				@media (max-width: 767px) {
					order: 1;
				}
				@media (max-width: 540px) {
					height: 23rem;
				}
			}

			&-description {
				font-size: $text-xl;
				color: $dark;
				font-family: 'Roboto', sans-serif;
				@media (max-width: 767px) {
					margin-bottom: 3rem;
					font-size: $text-l;
				}
				&_accent {
					color: $accent;
				}
			}
		}
	}
</style>
