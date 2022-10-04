<template>
	<div class="r-estimate" :class="{ open: isEstimateOpen }">
		<div
			class="r-estimate__top"
			:class="{ open: isEstimateOpen }"
			v-show="isEstimateOpen"
		>
			<button
				class="r-estimate__close"
				@click="
					isEstimateOpen = false;
					selectedEstimate = null;
				"
			>
				<img
					src="/img/icon/cross.svg"
					alt="close"
					class="r-estimate__close-icon"
				/>
			</button>

			<text-radio
				v-for="(item, index) in estimateList"
				:key="item.id"
				:designOptions="{
					accentColor: item.color,
					defaultColor: 'transparent',
					isHasBorder: true,
				}"
				:text="item.description"
				:selectedValue="selectedEstimate"
				:value="index + 1"
				radioGroup="estimate"
				v-model="selectedEstimate"
			></text-radio>
		</div>

		<div class="r-estimate__main" :class="{ open: selectedEstimate }">
			<div class="r-estimate__text-wrapper">
				<template v-if="selectedEstimate === 1">
					<p class="r-estimate__text r-estimate__text_bd">
						<span class="r-estimate__text_accent">
							Landing Page, Сайт Визитка
						</span>
						(утверждение и согласование проводится на всех этапах
						работ)
					</p>
					<br />

					<p class="r-estimate__text">
						Разработка ведётся “под ключ”! Этапы и виды работ:
					</p>
					<p class="r-estimate__text r-estimate__text_bd">Этап 1:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Сбор всей информации которая будет подана на сайте.
							Онлайн и офлайн встречи - по желанию заказчика.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Построение ПРОТОТИПА страниц, представление будущего
							сайта в виде блоков и пометок, утверждение блоков.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 2:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Подготовка дизайна, определяется стилистика, цвета и
							основные “Акценты” для выражения пожеланий заказчика
							на сайте.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация уникального макета, внесение правок и
							замечаний, утверждение макета.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация Дизайна страницы, внесение правок и
							замечаний, утверждение готового дизайна.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 3:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Вёрстка готовых дизайн макетов, реализация
							функциональной логики на ресурсе.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Адаптивная вёрстка, реализация на планшетах и
							телефонах.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Тестирование функционала, тестирование производится
							специалистами, а так же к тестированию привлекается
							заказчик (если ему это необходимо), внесение правок
							и замечаний, утверждение реализованного функционала.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 4:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Подключение доменного имени сайта, настройка
							хостинга и SSl-сертификатов.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Подключение аналитики Яндекс.Метрика и Google
							Analytics.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Передача исходных данных сайта заказчику, обучение
							управления сайтом.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Переход в долгосрочную поддержку и сотрудничество.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 5*:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Маркетинговые исследования, целевая аудитория,
							построение Интеллект-карты - от идеи, до цели.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							SEO-оптимизация ресурса.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Продающий и креативный копирайтинг, формирование
							уникального торгового предложения из маркетингового
							исследования.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Корректирование развития сайта во временном анализе
							с использованием аналитических метрик.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">
						СТОИМОСТЬ: от
						<span class="r-estimate__text_accent">
							30 000 рублей</span
						>.
					</p>
					<p class="r-estimate__text r-estimate__text_bd">
						СРОКИ РЕАЛИЗАЦИИ: от
						<span class="r-estimate__text_accent">
							20 рабочих дней</span
						>.
					</p>
					<br />
					<p class="r-estimate__text r-estimate__text_bd">
						*этап 5, является дополнительным и не входит в основную
						стоимость.
					</p>
				</template>

				<template v-if="selectedEstimate === 2">
					<p class="r-estimate__text r-estimate__text_bd">
						<span class="r-estimate__text_accent"
							>Разработка IOS/ANDROID приложения</span
						>
						(утверждение и согласование проводится на всех этапах
						работ)
					</p>
					<br />

					<p class="r-estimate__text">
						Разработка ведётся “под ключ”! Этапы и виды работ:
					</p>
					<p class="r-estimate__text r-estimate__text_bd">Этап 1:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Сбор всей информации которая будет подана в
							приложении. Проведение аналитики и глубокого
							анализа, разрабатываемого ПО. Онлайн и офлайн
							встречи - по желанию заказчика.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация технического задания, детальная
							проработка и согласование.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Построение ПРОТОТИПА страниц приложения,
							представление будущего приложения в виде блоков и
							пометок, утверждение блоков.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 2:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							UX/Ui-анализ, подготовка карты приложения.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Подготовка дизайна, определяется стилистика, цвета и
							основные “Акценты” для выражения пожеланий заказчика
							и реализация результатов проведённого UX/Ui анализа.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация уникального макета приложения, выбираются
							основные страницы и представляются нескольких видах,
							внесение правок и замечаний, утверждение макета.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация Дизайна приложения, внесение правок и
							замечаний, утверждение готового дизайна.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 3:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Постановка задач, определение чётких сроков, работа
							проводится по 2х недельным этапам, на каждом из
							этапов реализуется минимальная жизнеспособная версия
							приложения, которую можно протестировать.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация API интерфейсов приложения,
							программирование backend (серверной) части
							приложения, базы данных.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация визуальной части приложения, интеграция с
							API.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Тестирование функционала приложения, тестирование
							производится специалистами отдела QA, а так же к
							тестированию привлекается заказчик (если ему это
							необходимо), внесение правок и замечаний,
							утверждение реализованного функционала.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 4:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Загрузка приложения в App Store и Google Play.
							Настройка и повторное тестирование.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Подключение аналитики и метрик.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Передача исходных данных приложения заказчику,
							обучение управления приложением.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Переход в долгосрочную поддержку и сотрудничество.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 5*:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Маркетинговые исследования, целевая аудитория,
							построение Интеллект-карты - от идеи, до цели.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Эквайринг - оплата онлайн, настройка кассы,
							автоматизация получения чеков.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Продающий и креативный копирайтинг, формирование
							уникального торгового предложения из маркетингового
							исследования.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Корректирование развития приложения во временном
							анализе с использованием аналитических метрик.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Организация рекламной компании в рекламной сети
							яндекса.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">
						СТОИМОСТЬ: от
						<span class="r-estimate__text_accent">
							100 000 рублей</span
						>.
					</p>
					<p class="r-estimate__text r-estimate__text_bd">
						СРОКИ РЕАЛИЗАЦИИ: от
						<span class="r-estimate__text_accent">
							60 рабочих дней</span
						>.
					</p>
					<br />
					<p class="r-estimate__text r-estimate__text_bd">
						*этап 5, является дополнительным и не входит в основную
						стоимость.
					</p>
				</template>

				<template v-if="selectedEstimate === 3">
					<p class="r-estimate__text r-estimate__text_bd">
						<span class="r-estimate__text_accent">
							Интернет магазины, интеграция личного кабинета к
							готовому ресурсу, разработка ресурса с личными
							кабинетами</span
						>
						(утверждение и согласование проводится на всех этапах
						работ)
					</p>
					<br />

					<p class="r-estimate__text">
						Разработка ведётся “под ключ”! Этапы и виды работ:
					</p>
					<p class="r-estimate__text r-estimate__text_bd">Этап 1:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Сбор всей информации которая будет подана в личном
							кабинете на сайте. Онлайн и офлайн встречи - по
							желанию заказчика.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация технического задания, детальная
							проработка и согласование.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Построение ПРОТОТИПА страниц личного кабинета,
							представление будущего кабинета в виде блоков и
							пометок, утверждение блоков.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 2:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							UX/Ui-анализ, подготовка карты сайта и личных
							кабинетов.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Подготовка дизайна, определяется стилистика, цвета и
							основные “Акценты” для выражения пожеланий заказчика
							и использование результатов проведенного UX/Ui
							анализа.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация уникального макета личных кабинетов,
							выбираются основные страницы и представляются в
							нескольких видах, внесение правок и замечаний,
							утверждение макета.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация Дизайна приложения, внесение правок и
							замечаний, утверждение готового дизайна.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 3:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Постановка задач, определение чётких сроков, работа
							проводится по 2х недельным этапам, на каждом из
							этапов реализуется минимальная жизнеспособная версия
							приложения, которую можно протестировать.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация API интерфейсов приложения,
							программирование backend (серверной) части
							приложения, базы данных.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация визуальной части приложения, интеграция с
							API.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Тестирование функционала приложения, тестирование
							производится специалистами отдела QA (проверка
							качества), а так же к тестированию привлекается
							заказчик (если ему это необходимо), внесение правок
							и замечаний, утверждение реализованного функционала.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 4:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Подключение доменного имени ресурса, настройка
							хостинга и SSl-сертификатов.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Организация отказоустойчивости системы, копии данных
							по расписанию
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Подключение аналитики Яндекс.Метрика и Google
							Analytics.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Передача исходных данных сайта заказчику, обучение
							управления ресурсом.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Переход в долгосрочную поддержку и сотрудничество.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 5*:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Маркетинговые исследования, целевая аудитория,
							построение Интеллект-карты - от идеи, до цели.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							SEO-оптимизация ресурса.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Продающий и креативный копирайтинг, формирование
							уникального торгового предложения из маркетингового
							исследования.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Корректирование развития сайта во временном анализе
							с использованием аналитических метрик.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Организация рекламной компании в рекламной сети
							яндекса.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">
						СТОИМОСТЬ: от
						<span class="r-estimate__text_accent">
							70 000 рублей</span
						>.
					</p>
					<p class="r-estimate__text r-estimate__text_bd">
						СРОКИ РЕАЛИЗАЦИИ: от
						<span class="r-estimate__text_accent">
							30 рабочих дней</span
						>.
					</p>
					<br />
					<p class="r-estimate__text r-estimate__text_bd">
						*этап 5, является дополнительным и не входит в основную
						стоимость.
					</p>
				</template>

				<template v-if="selectedEstimate === 4">
					<p class="r-estimate__text r-estimate__text_bd">
						<span class="r-estimate__text_accent">
							Реализация внутренней CRM системы
						</span>
						(утверждение и согласование проводится на всех этапах
						работ)
					</p>
					<br />

					<p class="r-estimate__text">
						Разработка ведётся “под ключ”! Этапы и виды работ:
					</p>
					<p class="r-estimate__text r-estimate__text_bd">Этап 1:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Сбор всей информации которая будет реализована в CRM
							системе. Изучение бизнес процессов заказчика. Поиск
							сильных и уязвимых мест. Проведение аналитики и
							глубокого анализа, разрабатываемой CRM системы.
							Онлайн и оффлайн встречи- тип по желанию заказчика.
							<br />
							<span class="r-estimate__text_accent">
								ВОЗМОЖЕН ВЫЕЗД СПЕЦИАЛИСТОВ-АНАЛИТИКОВ, ДЛЯ
								ИЗУЧЕНИЯ ПРОЦЕССОВ, К ЗАКАЗЧИКУ.
							</span>
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация технического задания, детальная
							проработка и согласование.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Построение ПРОТОТИПА страниц и функций
							<span class="r-estimate__text_accent">
								CRM системы</span
							>, представление будущего ресурса в виде блоков и
							пометок, утверждение блоков.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 2:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							UX/Ui-анализ, подготовка карты ресурса, анализ
							удобства пользования, построения отчетов и прочее.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Подготовка дизайна, определяется стилистика, цвета и
							основные “Акценты” для
							<span class="r-estimate__text_accent">
								выражения пожеланий заказчика
							</span>
							и использование результатов проведенного UX/Ui
							анализа.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация уникального макета CRM системы,
							выбираются основные страницы и представляются в
							нескольких видах на выбор заказчика. Внесение правок
							и замечаний, утверждение макета.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация Дизайна CRM, внесение правок и замечаний,
							<span class="r-estimate__text_accent">
								утверждение готового дизайна</span
							>.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 3:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Постановка задач, определение чётких сроков, работа
							проводится по 2х недельным этапам, на каждом из
							этапов реализуется минимальная жизнеспособная версия
							приложения, которую можно протестировать.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация API интерфейсов ресурса, программирование
							backend (серверной) части приложения, базы данных,
							интеграция со сторонними
							<span class="r-estimate__text_accent">
								приложениями (1С, SAP)</span
							>.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация визуальной части ресурса, интеграция с
							API, frontend разработка.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Тестирование функционала приложения, тестирование
							производится специалистами отдела
							<span class="r-estimate__text_accent">
								QA (проверка качества)</span
							>, а так же к тестированию привлекается заказчик (
							если ему это необходимо), внесение правок и
							замечаний, утверждение реализованного функционала.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 4:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Настройка серверов и выгрузки CRM системы.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Организация отказоустойчивости системы,
							<span class="r-estimate__text_accent">
								копии данных по расписанию</span
							>.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Передача исходных данных сайта заказчику, обучение
							управления ресурсом, обучение персонала по
							использованию CRM системы.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Переход в долгосрочную поддержку и сотрудничество.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 5*:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Профессиональная аналитика - наблюдение за
							действиями пользователей, анализ эффективной
							работоспособности ресурса, для автоматизации
							процессов и усовершенствования CRM системы в целом.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Построение
							<span class="r-estimate__text_accent">BI</span>
							отчетов для менеджмента.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">
						СТОИМОСТЬ: от
						<span class="r-estimate__text_accent">
							200 000 рублей</span
						>.
					</p>
					<p class="r-estimate__text r-estimate__text_bd">
						СРОКИ РЕАЛИЗАЦИИ: от
						<span class="r-estimate__text_accent">
							90 рабочих дней</span
						>.
					</p>
					<br />
					<p class="r-estimate__text r-estimate__text_bd">
						*этап 5, является дополнительным и не входит в основную
						стоимость.
					</p>
				</template>

				<template v-if="selectedEstimate === 5">
					<p class="r-estimate__text r-estimate__text_bd">
						<span class="r-estimate__text_accent">
							Брендирование компании, брендирование отдельного
							продукта
						</span>
						(утверждение и согласование проводится на всех этапах
						работ)
					</p>
					<br />

					<p class="r-estimate__text">
						Разработка ведётся “под ключ”! Этапы и виды работ:
					</p>
					<p class="r-estimate__text r-estimate__text_bd">Этап 1:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							<span class="r-estimate__text_accent">
								Маркетинговое исследование </span
							>, анализ KPI и целевой аудитории по компании и/или
							продукту.
							<br />
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Построение Интеллект-карты - от “идеи, до цели.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Анализ конкурентов, разработка кейсов с уникальным
							предложением.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Подготовление развернутого отчёта по первому этапу,
							с планом реализации, техническим заданием на
							программистов, контентщиков, рекламу, дизайнеров.
							Нацеливание нескольких стратегий брендирования.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 2:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Выбор
							<span class="r-estimate__text_accent">
								стратегии брендирования
							</span>
							компании и/или продукта, постановка целей и шагов
							ведущих к реализации и “подогреву лидов”.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Продающий и креативный копирайтинг, формирование
							уникального торгового предложения из маркетингового
							исследования.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация технических заданий из первого этапа.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 3:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Подключение аналитики Яндекс.Метрика и Google
							Analytics к веб-ресурсам заказчика.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Оценка выбранной стратегии, корректирование в
							реальном времени (бесшовно для имеющихся
							заказчиков/потребителей) добавление новых шагов.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							<span class="r-estimate__text_accent">
								Проведение рекламной компании
							</span>
							на основе выбранной стратегии.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Анализ результатов, составление отчета для
							дальнейших действий заказчика.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Переход в долгосрочную поддержку и сотрудничество.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">
						СТОИМОСТЬ: от
						<span class="r-estimate__text_accent">
							40 000 рублей</span
						>.
					</p>
					<p class="r-estimate__text r-estimate__text_bd">
						СРОКИ РЕАЛИЗАЦИИ: от
						<span class="r-estimate__text_accent">
							60 рабочих дней</span
						>.
					</p>
				</template>

				<template v-if="selectedEstimate === 6">
					<p class="r-estimate__text r-estimate__text_bd">
						<span class="r-estimate__text_accent">
							Брендирование компании, брендирование отдельного
							продукта
						</span>
						(утверждение и согласование проводится на всех этапах
						работ)
					</p>
					<br />

					<p class="r-estimate__text">
						Разработка ведётся “под ключ”! Этапы и виды работ:
					</p>
					<p class="r-estimate__text r-estimate__text_bd">Этап 1:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Сбор всей информации которая будет учтена при
							подготовке и реализации дизайна. Онлайн и офлайн
							встречи - по желанию заказчика.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							<span class="r-estimate__text_accent">
								UX/Ui- анализ </span
							>, подготовка карты ресурса (прототип), анализ
							удобства пользования, построения отчетов и прочее
							(специфика по ресурсу).
						</li>

						<li class="r-estimate__list-item r-estimate__text">
							Подготовка технического задания дизайнеру,
							определение сроков и задач для исполнения ТЗ.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 2:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Реализация
							<span class="r-estimate__text_accent"
								>трёх концептов</span
							>, предоставление заказчику для возможности выбора.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Исполнение макета, вносятся правки и замечания от
							заказчика.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Подготовка дизайна, определяется стилистика, цвета и
							основные “Акценты” для выражения пожеланий
							заказчика. Использование результатов проведенного
							UX/Ui анализа.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация
							<span class="r-estimate__text_accent"
								>уникального Дизайна</span
							>
							, описание всех компонентов, документирование в виде
							комментариев для удобства и ускорения работы
							разработчиков.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Передача исходных данных и всех прав заказчику.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">
						СТОИМОСТЬ: от
						<span class="r-estimate__text_accent">
							8 000 рублей</span
						>.
					</p>
					<p class="r-estimate__text r-estimate__text_bd">
						СРОКИ РЕАЛИЗАЦИИ: от
						<span class="r-estimate__text_accent">
							5 рабочих дней</span
						>.
					</p>
				</template>
			</div>
		</div>

		<div class="r-estimate__bottom">
			<r-button
				:class="{ open: isEstimateOpen }"
				v-show="selectedEstimate"
				text="Назад"
				color="black"
				@click="selectedEstimate = null"
			></r-button>
			<r-button
				:class="{ open: isEstimateOpen }"
				:color="isEstimateOpen ? 'black' : 'bordered'"
				:size="{ big: !isEstimateOpen }"
				:text="isEstimateOpen ? 'Скачать всё' : 'Получить смету'"
				@click="
					isEstimateOpen
						? (isDownloadPdf = true)
						: (isEstimateOpen = true)
				"
			></r-button>
		</div>
	</div>
</template>

<script>
	import { openLink } from "@/js/openLink";

	export default {
		name: "rEstimate",
		watch: {
			isDownloadPdf() {
				if (this.isDownloadPdf) {
					this.downloadPdf();
					setTimeout(() => {
						this.isDownloadPdf = false;
					}, 2000);
				}
			},
		},
		computed: {
			selectedEstimateFull() {
				return (
					this.estimateList.find(
						(el) => el.id === this.selectedEstimate
					) || {}
				);
			},
		},
		data: () => ({
			isEstimateOpen: false,
			isDownloadPdf: false,
			estimateList: [
				{
					id: 1,
					description: "Вебсайт",
					color: "#383838",
				},
				{
					id: 2,
					description: "Мобильное приложение",
					color: "#383838",
				},
				{
					id: 3,
					description: "Личный кабинет",
					color: "#383838",
				},
				{
					id: 4,
					description: "Внутренний продукт",
					color: "#383838",
				},
				{
					id: 5,
					description: "Бренд для компании или продукта",
					color: "#383838",
				},
				{
					id: 6,
					description: "Дизайн система",
					color: "#383838",
				},
			],

			selectedEstimate: null,
		}),
		methods: {
			downloadPdf() {
				openLink(
					`${process.env.VUE_APP_BACKEND_BASEURL}/media-smeta/smeta.pdf/`
				);
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.r-estimate {
		background-color: transparent;
		transition: all 0.3s ease;
		&.open {
			background-color: $white;
			padding: 6rem;
			border-radius: 4.8rem;
			@media (max-width: 767px) {
				padding: 3rem 2rem;
				border-radius: 2rem;
			}
		}

		&__close {
			background-color: transparent;
			position: absolute;
			right: 0;
			top: 0;
			@media (max-width: 540px) {
				position: static;
				margin-left: auto;
			}

			&-icon {
				width: 3rem;
				height: 3rem;
				@media (max-width: 767px) {
					width: 2rem;
					height: 2rem;
				}
			}
		}

		&__top {
			position: relative;
			padding-right: 5rem;
			display: flex;
			flex-wrap: wrap;
			gap: 2rem;
			&.open {
				margin-bottom: 3rem;

				@media (max-width: 540px) {
					flex-direction: column;
					padding-right: 0;
				}
			}
		}
		&__main {
			border: 0.2rem solid transparent;
			padding: 0 1.5rem 0 6rem;
			&.open {
				margin-bottom: 7rem;
				border-color: $dark;
				border-radius: 3rem;
				padding: 6rem 1.5rem 6rem 6rem;
				@media (max-width: 767px) {
					padding: 2rem 1.5rem 2rem 1.5rem;
					margin-bottom: 3rem;
					border-radius: 2rem;
				}
			}
		}
		&__text {
			font-size: 2.4rem;
			@media (max-width: 767px) {
				font-size: 1.8rem;
			}
			&-wrapper {
				max-height: 60rem;
				overflow-y: auto;
				padding-right: 4.5rem;
				@media (max-width: 767px) {
					padding-right: 1rem;
				}

				//* chrome/safari
				&::-webkit-scrollbar-track {
					background: transparent; /* цвет дорожки */
				}
				&::-webkit-scrollbar-thumb {
					background-color: rgba($dark, 0.2); /* цвет плашки */
				}
				//* firefox
				scrollbar-width: thin; /* "auto" или "thin"  */
				scrollbar-color: rgba($dark, 0.2) transparent;
			}
			&_bd {
				font-weight: 600;
			}
			&_accent {
				color: $accent;
			}
		}

		&__list {
			&-item {
				position: relative;
				padding-left: 2rem;
				&::before {
					content: "";
					position: absolute;
					left: 0;
					top: 1.3rem;
					width: 0.6rem;
					height: 0.6rem;
					border-radius: 50%;
					background-color: $black;
				}
			}
		}

		&__bottom {
			display: flex;
			gap: 2rem;
			@media (max-width: 470px) {
				flex-direction: column;
			}
		}

		.r-button {
			width: 100%;
			&.open {
				font-size: 2.4rem;
				@media (max-width: 767px) {
					font-size: 1.8rem;
					padding: 2rem;
				}
			}
			&:first-child {
				width: max-content;
				@media (max-width: 470px) {
					width: inherit;
				}
			}
		}
	}
</style>
