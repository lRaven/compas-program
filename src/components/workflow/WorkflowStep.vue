<template>
	<div class="workflow-step">
		<p class="workflow-step__counter">0.{{ step.id }}</p>
		<div class="workflow-step__name">
			<h3 class="workflow-step__name-1">{{ step.title }}</h3>
			<h3 class="workflow-step__name-2">{{ step.title }}</h3>
		</div>
		<p class="workflow-step__description">
			{{ step.description }}
		</p>
	</div>
</template>

<script>
	export default {
		name: 'WorkflowStep',
		props: {
			step: {
				value: Object,
				required: true,
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.workflow-step {
		display: grid;
		grid-template-columns: 0.5fr 27rem 2fr;
		grid-gap: 0 8rem;
		align-items: center;
		grid-column: 1/4;
		padding: 4rem 0;
		border-bottom: 0.2rem solid #ebebeb;
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
			padding: 1rem 0;
		}
		@media (max-width: 540px) {
			grid-gap: 2rem 2.5rem;
		}

		&__counter {
			color: $gray;
			font-size: $text-m;
		}
		&__name {
			position: relative;
			display: flex;
			overflow: hidden;
			&:hover {
				.workflow-step__name {
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
		&__description {
			color: $gray;
			font-size: $text-l;
			white-space: pre-wrap;
			@media (max-width: 767px) {
				grid-column: 2/3;
			}
			@media (max-width: 540px) {
				font-size: $text-m;
			}
		}
	}
</style>
