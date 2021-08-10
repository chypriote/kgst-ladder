<template>
	<div class="maiden-bond">
		<div class="bond-attributes">
			<img :src="require(`~/assets/${bond.attribute}.png`)" :alt="bond.attribute">
			<img v-if="bond.second_attribute" :src="require(`~/assets/${bond.second_attribute}.png`)" :alt="bond.second_attribute">
		</div>
		<div class="bond-details">
			<div class="bond-value">
				<template v-if="isMultiplier">{{ `${perLevel}% /level` }}</template>
				<template v-else>{{ `${perLevel} /level` }}</template>
			</div>
			<div v-if="bond.unlock" class="bond-unlock">{{ `Unlocks with ${bond.unlock} intimacy` }}</div>
		</div>
		<div class="max">
			<template v-if="isMultiplier">{{ `${perLevel * bond.levels}%` }}</template>
			<template v-else>{{ (perLevel * bond.levels) |numeral }}</template>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MaidenBond } from '~/types/MaidenBond'

export default Vue.extend({
	name: 'MaidenBond',
	props: {
		bond: {
			type: Object as () => MaidenBond,
			required: true,
		},
	},
	computed: {
		isMultiplier (): boolean { return !!this.bond.multiplier_per_level },
		perLevel (): number { return this.bond.per_level ?? this.bond.multiplier_per_level },
	},
})
</script>

<style scoped>
img {
	max-height: 1.5rem;
	& + img {margin-left: -.5rem;}
}
.maiden-bond {
	display: flex;
	align-items: center;
	border-radius: 2px;
	padding: .25rem .5rem;
	border: 1px solid rgba(255, 255, 255, .06);
	box-shadow: 0 1px 6px -1px rgba(0, 0, 0, .35);
	background: rgb(46, 46, 46);
	position: relative;
	&:not(:last-of-type) {margin-bottom: .25rem;}
}
.bond-attributes {
	margin-right: .5rem;
	min-width: 3rem;
	text-align: center;
}
.bond-details {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	.bond-unlock {
		color: var(--text-color-muted);
		font-size: .75rem;
	}
}
</style>
