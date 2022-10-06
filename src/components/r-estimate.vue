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
					src="/img/icons/cross.svg"
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
					<p
						class="r-estimate__text r-estimate__text_bd r-estimate__text_accent"
					>
						Landing Page, сайт-визитка
					</p>
					<br />

					<p class="r-estimate__text">
						Разрабатываем веб-сайты “под ключ” и согласовываем с
						заказчиком каждый этап работы:
					</p>
					<p class="r-estimate__text r-estimate__text_bd">Этап 1:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Сбор информации, которая будет располагаться на
							сайте. Онлайн- и офлайн-встречи - по желанию
							заказчика.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Построение прототипов страниц, представление
							будущего сайта в виде блоков и пометок, их
							утверждение.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 2:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Подготовка дизайна сайта, определение стилистики,
							цвета и основных акцентов с учётом пожеланий
							заказчика.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация уникального макета, внесение правок и
							замечаний, утверждение макета.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация дизайна страницы, внесение правок и
							замечаний, утверждение готового дизайна.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 3:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Вёрстка готовых дизайн-макетов, реализация
							функциональной логики на ресурсе.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Адаптивная вёрстка, реализация на планшетах и
							телефонах.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Тестирование функционала, которое производится
							специалистами и заказчиками по их желанию. Внесение
							правок и учёт замечаний, утверждение реализованного
							функционала.
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
							Подключение аналитики Яндекс.Метрики и Google
							Analytics.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Передача исходных данных сайта заказчику, обучение
							управлению сайтом.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Переход в долгосрочную поддержку и сотрудничество.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 5*:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Маркетинговые исследования, анализ целевой
							аудитории, построение Интеллект-карты – от идеи до
							цели.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							SEO-оптимизация ресурса.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Продающий и креативный копирайтинг, формирование
							уникального торгового предложения по результатам
							маркетингового исследования.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Корректировка развития сайта во временном анализе с
							использованием аналитических метрик.
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
						*этап 5 является дополнительным и не входит в основную
						стоимость.
					</p>
				</template>

				<template v-if="selectedEstimate === 2">
					<p
						class="r-estimate__text r-estimate__text_bd r-estimate__text_accent"
					>
						Разработка IOS/ANDROID приложения
					</p>
					<br />

					<p class="r-estimate__text">
						Разрабатываем приложения “под ключ” и согласовываем с
						заказчиком каждый этап работы:
					</p>
					<p class="r-estimate__text r-estimate__text_bd">Этап 1:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Сбор информации для приложения. Глубокий анализ
							разрабатываемого ПО и сбор аналитики. Онлайн- и
							офлайн-встречи – по желанию заказчика.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация технического задания, его детальная
							проработка и согласование с заказчиком.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Построение прототипов страниц приложения,
							представление будущего приложения в виде блоков и
							пометок, утверждение блоков.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 2:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							UX/UI-анализ, подготовка карты приложения.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Подготовка дизайна, определение стилистики, цвета и
							основных акцентов для выражения пожеланий заказчика.
							Реализация результатов проведённого UX/UI анализа.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация уникального макета приложения,
							представление основных страниц в нескольких видах,
							внесение правок и замечаний, утверждение макета.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация дизайна приложения, внесение правок и
							замечаний, утверждение готового дизайна.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 3:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Постановка задач, определение чётких сроков. Работа
							делится на двухнедельные этапы. На каждом из них
							реализуется минимальная жизнеспособная версия
							приложения, которую можно протестировать.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация API-интерфейсов приложения,
							программирование серверной части приложения и базы
							данных.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация визуальной части приложения, интеграция с
							API.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Тестирование функционала приложения, которое
							проводится специалистами отдела QA и заказчиком,
							если ему это необходимо. Внесение правок и
							замечаний, утверждение реализованного функционала.
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
							обучение управлению приложением.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Переход в долгосрочную поддержку и сотрудничество.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 5*:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Маркетинговые исследования, анализ целевой
							аудитории, построение Интеллект-карты – от идеи до
							цели.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Эквайринг – оплата онлайн, настройка кассы,
							автоматизация получения чеков.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Продающий и креативный копирайтинг, формирование
							уникального торгового предложения из маркетингового
							исследования.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Корректировка развития приложения во временном
							анализе с использованием аналитических метрик.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Организация рекламной кампании в Яндексе.
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
						*этап 5 является дополнительным и не входит в основную
						стоимость.
					</p>
				</template>

				<template v-if="selectedEstimate === 3">
					<p
						class="r-estimate__text r-estimate__text_bd r-estimate__text_accent"
					>
						Интеграция личного кабинета с готовым ресурсом,
						разработка ресурса с личными кабинетами
					</p>
					<br />

					<p class="r-estimate__text">
						Работа включает в себя следующие этапы:
					</p>
					<p class="r-estimate__text r-estimate__text_bd">Этап 1:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Сбор информации, которая будет отражаться в личном
							кабинете на сайте. Онлайн- и офлайн-встречи – по
							желанию заказчика.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация технического задания, его детальная
							проработка и согласование с заказчиком.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Построение прототипов страниц личного кабинета,
							представление будущего кабинета в виде блоков и
							пометок, утверждение блоков.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 2:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							UX/UI-анализ, подготовка карты сайта и личных
							кабинетов.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Подготовка дизайна, определение стилистики, цвета и
							основных акцентов для выражения пожеланий заказчика.
							Реализация результатов проведённого UX/UI анализа.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация уникального макета личного кабинета,
							представление основных страниц в нескольких видах,
							внесение правок и замечаний, утверждение макета.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация дизайна приложения, внесение правок и
							замечаний, утверждение готового дизайна.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 3:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Постановка задач, определение чётких сроков. Работа
							делится на двухнедельные этапы. На каждом этапе
							реализуется минимальная жизнеспособная версия
							приложения, которую можно протестировать.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация API-интерфейсов приложения,
							программирование серверной части приложения и базы
							данных.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация визуальной части приложения, интеграция с
							API.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Тестирование функционала приложения, которое
							проводится специалистами отдела QA и заказчиком,
							если ему это необходимо. Внесение правок и
							замечаний, утверждение реализованного функционала.
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
							Организация отказоустойчивости системы, копирование
							данных по расписанию.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Подключение аналитики Яндекс.Метрики и Google
							Analytics.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Передача исходных данных сайта заказчику, обучение
							управлению ресурсом.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Переход в долгосрочную поддержку и сотрудничество.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 5*:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Маркетинговые исследования, анализ целевой
							аудитории, построение Интеллект-карты – от идеи до
							цели.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Эквайринг – оплата онлайн, настройка кассы,
							автоматизация получения чеков.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Продающий и креативный копирайтинг, формирование
							уникального торгового предложения из маркетингового
							исследования.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Корректировка развития приложения во временном
							анализе с использованием аналитических метрик.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Организация рекламной кампании в Яндексе.
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
						*этап 5 является дополнительным и не входит в основную
						стоимость.
					</p>
				</template>

				<template v-if="selectedEstimate === 4">
					<p
						class="r-estimate__text r-estimate__text_bd r-estimate__text_accent"
					>
						Реализация внутренней CRM системы
					</p>
					<br />

					<p class="r-estimate__text">
						Разрабатываем CRM-системы “под ключ” и согласовываем с
						заказчиком каждый этап работы:
					</p>
					<p class="r-estimate__text r-estimate__text_bd">Этап 1:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Сбор информации, которая будет реализована в
							CRM-системе. Изучение бизнес-процессов заказчика.
							Поиск сильных и уязвимых мест. Глубокий анализ
							разрабатываемой CRM-системы. Онлайн- и
							офлайн-встречи – по желанию заказчика.
							<br />
							<span class="r-estimate__text_accent">
								ВОЗМОЖЕН ВЫЕЗД СПЕЦИАЛИСТОВ-АНАЛИТИКОВ К
								ЗАКАЗЧИКУ ДЛЯ ИЗУЧЕНИЯ НЕОБХОДИМЫХ ПРОЦЕССОВ.
							</span>
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация технического задания, его детальная
							проработка и согласование с заказчиком.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Построение прототипов страниц и функций
							<span class="r-estimate__text_accent">
								CRM-системы</span
							>, представление будущего ресурса в виде блоков и
							пометок, утверждение блоков.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 2:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							UX/UI-анализ, подготовка карты ресурса, анализ
							удобства пользования, построение отчетов.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Подготовка дизайна, определение стилистики, цветов и
							основных акцентов для
							<span class="r-estimate__text_accent">
								выражения пожеланий заказчика</span
							>, использование результатов проведенного UX/UI
							анализа.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация уникального макета CRM-системы,
							представление основных страниц в нескольких видах,
							внесение правок и учёт замечаний, утверждение
							макета.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация и утверждение готового дизайна.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 3:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Постановка задач, определение чётких сроков. Работа
							делится на двухнедельные этапы. На каждом этапе
							реализуется минимальная жизнеспособная версия
							приложения, которую можно протестировать.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация API-интерфейсов ресурса, программирование
							серверной части приложения и базы данных, интеграция
							со сторонними
							<span class="r-estimate__text_accent">
								приложениями (1С, SAP)</span
							>.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация визуальной части ресурса, интеграция с
							API, frontend-разработка.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Тестирование функционала приложения, которое
							производится специалистами отдела
							<span class="r-estimate__text_accent">
								QA (проверка качества)
							</span>
							и заказчиком, если ему это необходимо. Внесение
							правок и учёт замечаний, утверждение реализованного
							функционала.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 4:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Настройка серверов и выгрузки CRM-системы.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Организация отказоустойчивости системы,
							<span class="r-estimate__text_accent">
								копирование данных по расписанию</span
							>.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Передача исходных данных сайта заказчику, обучение
							заказчика и персонала управлению CRM-системой.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Переход в долгосрочную поддержку и сотрудничество.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 5*:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Профессиональная аналитика – наблюдение за
							действиями пользователей, анализ эффективной
							работоспособности ресурса для автоматизации
							процессов и усовершенствования CRM-системы.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Построение
							<span class="r-estimate__text_accent">
								BI-отчётов
							</span>
							для менеджмента.
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
						*этап 5 является дополнительным и не входит в основную
						стоимость.
					</p>
				</template>

				<template v-if="selectedEstimate === 5">
					<p
						class="r-estimate__text r-estimate__text_bd r-estimate__text_accent"
					>
						Брендирование компании или отдельного продукта
					</p>
					<br />

					<p class="r-estimate__text">
						Работа включает в себя следующие этапы:
					</p>
					<p class="r-estimate__text r-estimate__text_bd">Этап 1:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							<span class="r-estimate__text_accent">
								Маркетинговое исследование </span
							>, анализ KPI и целевой аудитории компании и/или
							продукту.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Построение Интеллект-карты – от идеи до цели.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Анализ конкурентов, разработка кейсов с уникальным
							предложением.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Подготовка развернутого отчёта по первому этапу
							(план реализации, техническое задание для
							программистов, контентщиков и дизайнеров).
							Определение возможных стратегий брендирования.
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
							компании и/или продукта, постановка целей и
							определение шагов по реализации стратегии и
							“подогреву лидов”.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Продающий и креативный копирайтинг, формирование
							уникального торгового предложения на основе
							маркетингового исследования.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация технических заданий по первому этапу.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 3:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Подключение аналитики Яндекс.Метрики и Google
							Analytics к веб-ресурсам заказчика.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Оценка выбранной стратегии, корректировка в режиме
							реального времени, добавление новых шагов.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							<span class="r-estimate__text_accent">
								Проведение рекламной кампании
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
					<p
						class="r-estimate__text r-estimate__text_bd r-estimate__text_accent"
					>
						Брендирование компании и/или отдельного продукта
					</p>
					<br />

					<p class="r-estimate__text">
						Каждый шаг мы согласовываем с заказчиком. Наша работа
						включает в себя следующие этапы:
					</p>
					<p class="r-estimate__text r-estimate__text_bd">Этап 1:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Сбор информации, которая будет учитываться при
							подготовке и реализации дизайна. Онлайн- и
							офлайн-встречи – по желанию заказчика.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							<span class="r-estimate__text_accent">
								UX/UI- анализ </span
							>, подготовка карты ресурса (прототип), анализ
							удобства использования, построение отчетов.
						</li>

						<li class="r-estimate__list-item r-estimate__text">
							Подготовка технического задания дизайнеру,
							определение сроков и задач для исполнения.
						</li>
					</ul>
					<br />

					<p class="r-estimate__text r-estimate__text_bd">Этап 2:</p>
					<ul class="r-estimate__list">
						<li class="r-estimate__list-item r-estimate__text">
							Реализация
							<span class="r-estimate__text_accent"
								>трёх концептов</span
							>, предоставление заказчику возможности выбора.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Исполнение макета, внесение правки и учёт замечаний
							заказчика.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Подготовка дизайна, определение стилистики, цветов и
							основных акцентов с учётом пожеланий заказчика.
							Использование результатов проведенного
							UX/UI-анализа.
						</li>
						<li class="r-estimate__list-item r-estimate__text">
							Реализация
							<span class="r-estimate__text_accent"
								>уникального дизайна</span
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
					description: "Веб-сайт",
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
					description: "Дизайн-система",
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
