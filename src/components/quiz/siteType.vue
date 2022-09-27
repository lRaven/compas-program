<template>
	<label class="site-type">
		<input
			type="radio"
			:name="siteTypeGroupName"
			:checked="modelValue === siteType"
			class="site-type__radio"
			@change="this.$emit('update:modelValue', siteType)"
		/>

		<div class="site-type__content">
			<p class="site-type__description">
				{{
					siteType === 1
						? "Многостраничный сайт"
						: siteType === 2
						? "Лендинг"
						: siteType === 3
						? "Интернет магазин"
						: ""
				}}
			</p>

			<div class="site-type__pc">
				<div class="site-type__circles">
					<span
						class="site-type__circle site-type__circle_close"
					></span>
					<span
						class="site-type__circle site-type__circle_expand"
					></span>
					<span
						class="site-type__circle site-type__circle_collapse"
					></span>
				</div>

				<div
					class="site-type__pc-template"
					:class="
						siteType === 1
							? 'multipage'
							: siteType === 2
							? 'landing'
							: siteType === 3
							? 'store'
							: ''
					"
				>
					<span class="site-type__pc-decorative"></span>
					<span
						class="site-type__pc-decorative"
						v-if="siteType !== 2"
					></span>
					<span
						class="site-type__pc-decorative"
						v-if="siteType !== 2"
					></span>
					<span
						class="site-type__pc-decorative"
						v-if="siteType !== 2"
					></span>
				</div>
			</div>
		</div>
	</label>
</template>

<script>
	export default {
		name: "siteType",
		props: {
			siteTypeGroupName: {
				value: [Number, String],
				required: true,
			},
			siteType: {
				value: Number,
				default: 1,
			},
			modelValue: [Number, String],
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.site-type {
		&__radio {
			display: none;
			&:checked {
				+ .site-type__content {
					.site-type {
						&__description {
							color: $black;
						}

						&__pc {
							background-color: $black;
							&-decorative {
								background-color: $accent;
							}
						}

						&__circle {
							&_close {
								background-color: $red;
								border-color: $red;
							}
							&_expand {
								background-color: $yellow;
								border-color: $yellow;
							}
							&_collapse {
								background-color: $white;
								border-color: $white;
							}
						}
					}
				}
			}
		}

		&__content {
			cursor: pointer;
			user-select: none;
			&:hover {
				.site-type {
					&__description {
						color: $black;
					}

					&__pc {
						background-color: $black;
						&-decorative {
							background-color: $accent;
						}
					}

					&__circle {
						&_close {
							background-color: $red;
							border-color: $red;
						}
						&_expand {
							background-color: $yellow;
							border-color: $yellow;
						}
						&_collapse {
							background-color: $white;
							border-color: $white;
						}
					}
				}
			}
		}
		&__description {
			margin-bottom: 1.5rem;
			color: $gray;
			transition: all 0.3s ease;
		}

		&__pc {
			position: relative;
			border: 0.1rem solid $black;
			padding: 2.5rem 1.5rem 1.5rem 1.5rem;
			border-radius: 2.4rem;
			transition: all 0.3s ease;

			&-template {
				height: 27rem;
				&.multipage {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					grid-template-rows: 2fr 0.7fr;
					grid-gap: 1.4rem;
				}
				&.landing {
				}
				&.store {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					grid-template-rows: 3fr 1fr 1fr;
					grid-gap: 1.4rem;
					.site-type__pc-decorative {
						&:nth-child(2) {
							grid-column: 2/3;
							grid-row: 1/4;
						}
					}
				}
			}
			&-decorative {
				border: 0.1rem solid $black;
				border-radius: 2.4rem;
				height: 100%;
				display: block;
				transition: all 0.3s ease;
			}
		}
		&__circles {
			position: absolute;
			left: 3.2rem;
			top: 0.9rem;
			display: flex;
			align-items: center;
			gap: 1rem;
		}
		&__circle {
			width: 0.9rem;
			height: 0.9rem;
			border-radius: 50%;
			border: 0.1rem solid $black;
			transition: all 0.3s ease;
			&_close {
			}
			&_expand {
			}
			&_collapse {
			}
		}
	}
</style>
