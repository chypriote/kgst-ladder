<template>
	<div class="hero-value">
		<header>
			<img :src="require(`~/assets/${type}.png`)" :alt="type" />
			<span>{{ type }}</span>
		</header>
		<div class="display">
			<div class="value-text">{{ value |numeral }}</div>
			<div class="value" :class="`${type}-value`">
				<span v-for="i of displayed" :key="i" class="item" />
			</div>
			<div class="rating"><div class="rate">{{ percent }}</div>/10</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Attribute } from '~/types/constants'

const max_stats = {
	military: 916107663,
	fortune: 833144634,
	provisions: 832416617,
	inspiration: 513908336,
}

export default Vue.extend({
	name: 'HeroValue',
	props: {
		type: {
			type: String as () => Attribute,
			required: true,
		},
		value: {
			type: Number,
			required: true,
		},
	},
	computed: {
		// @ts-ignore
		percent (): number { return Math.round(this.value / max_stats[this.type] * 10) },
		displayed (): number { return Math.max(1, this.percent) },
	},
})
</script>

<style scoped>
.hero-value {
	display: flex;
	flex-direction: column;
	header {
		display: flex;
		align-items: center;
		img {max-height: 1.25rem;margin-right: .5rem;}
		span {
			line-height: 1.5;
			font-size: 1.1rem;
			text-transform: uppercase;
			letter-spacing: 4px;
		}
	}
}
.display {
	display: flex;
	align-items: center;
	.item {
		display: inline-block;
		flex: 0 0 8%;
		margin-right: .5rem;
		opacity: 1;
		background-color: rgb(8, 215, 247);
		background-clip: content-box;
		transform: skewX(-40deg);
	}
	.value {
		flex-grow: 1;
		height: 1.5rem;
		display: flex;
		&.military-value .item {background-color: #a7132e80;}
		&.fortune-value .item {background-color: #ecda0980;}
		&.provisions-value .item {background-color: #2ecc7180;}
		&.inspiration-value .item {background-color: #1073a280;}
	}
	.value-text {
		font-size: 1.3rem;
		color: var(--text-color-muted);
		margin-right: 1rem;
		min-width: 4rem;
	}
	.rating {
		flex: 0 0 10%;
		display: flex;
		margin-left: 1rem;
		color: white;
		text-shadow: 0 0 3px #2f2b27, 0 0 3px rgba(47, 43, 39, .66);
		font-size: 1.5rem;
		letter-spacing: 4px;
		.rate {font-weight: bold;}
	}
}
</style>
