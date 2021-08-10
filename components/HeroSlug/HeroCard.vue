<template>
	<div class="hero card">
		<div class="row">
			<div class="col col-4">
				<div class="hero-left">
					<img v-if="hero.picture" :src="hero.picture.formats.medium.url" :alt="hero.name" class="hero-picture" />
					<div class="stars"><span v-for="i of hero.stars" :key="`star-${i}`">⭐</span></div>
					<div class="focuses">
						<div class="focus hint--top" :aria-label="hero.focus">
							<img :src="require(`~/assets/${hero.focus}.png`)" :alt="hero.focus">
						</div>
						<div class="second hint--top" :aria-label="hero.focus">
							<img v-if="hero.second_focus" :src="require(`~/assets/${hero.second_focus}.png`)" :alt="hero.second_focus">
						</div>
					</div>
				</div>
			</div>
			<div class="col col-8 right">
				<div class="hero-stats">
					<h1>{{ hero.name }}</h1>
					<div v-if="hero.hid" class="hero-id">{{ `#${hero.hid}` }}</div>

					<div class="values">
						<hero-value :type="'military'" :value="attributeValue(Attribute.MILITARY)" /> {{ qualityBonus(Attribute.MILITARY) }} {{ bondBonus(Attribute.MILITARY) }} {{ paragonValue(Attribute.MILITARY) }}
						<hero-value :type="'fortune'" :value="attributeValue(Attribute.FORTUNE)" /> {{ qualityBonus(Attribute.FORTUNE) }} {{ bondBonus(Attribute.FORTUNE) }} {{ paragonValue(Attribute.FORTUNE) }}
						<hero-value :type="'provisions'" :value="attributeValue(Attribute.PROVISIONS)" /> {{ qualityBonus(Attribute.PROVISIONS) }} {{ bondBonus(Attribute.PROVISIONS) }} {{ paragonValue(Attribute.PROVISIONS) }}
						<hero-value :type="'inspiration'" :value="attributeValue(Attribute.INSPIRATION)" /> {{ qualityBonus(Attribute.INSPIRATION) }} {{ bondBonus(Attribute.INSPIRATION) }} {{ paragonValue(Attribute.INSPIRATION) }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroValue from '~/components/HeroValue.vue'
import { Hero } from '~/types/Hero'
import { Attribute } from '~/types/constants'
import { Paragon } from '~/types/Paragon'
import { MaidenBond } from '~/types/MaidenBond'

const frame = {
	1: 125000 + 250000 + 400000 + 575000 + 750000,
	2: 125000 + 250000 + 400000 + 575000 + 750000,
	3: 125000 + 250000 + 400000 + 575000 + 750000,
	4: 137500 + 275000 + 475000 + 700000 + 900000,
	5: 150000 + 300000 + 500000 + 725000 + 950000,
	6: 225000 + 450000 + 775000 + 1100000 + 1425000,
}

export default Vue.extend({
	name: 'HeroCard',
	components: { HeroValue },
	props: {
		hero: {
			type: Object as () => Hero,
			required: true,
		},
	},
	data: () => ({ Attribute }),
	methods: {
		qualityBonus (attribute: Attribute): number {
			return this.hero.quality_skills
				.filter((s: Skill) => s.attribute === attribute)
				.reduce((sum: number, s: Skill) => sum + s.stars, 0) * 0.1 * ((400 ^ 2) + 400 + 98)
		},
		maidenBonusValue (attribute: Attribute): number {
			if (!this.hero.maiden) { return 0 }
			return this.hero.maiden.maiden_bonds
				.filter((b: MaidenBond) => b.attribute === attribute || b.second_attribute === attribute)
				.reduce((sum: number, b: MaidenBond) => sum + (b.per_level * b.levels), 0)
		},
		maidenMultiplierValue (attribute: Attribute): number {
			if (!this.hero.maiden) { return 0 }
			return this.hero.maiden.maiden_bonds
				.filter((b: MaidenBond) => b.attribute === attribute || b.second_attribute === attribute)
				.reduce((sum: number, b: MaidenBond) => sum + (b.multiplier_per_level * b.levels), 0)
		},
		bondBonus (attribute: Attribute): number {
			return (this.qualityBonus(attribute) * this.maidenMultiplierValue(attribute)) + this.maidenBonusValue(attribute)
		},
		paragonValue (attribute: Attribute): number {
			const paragons = [...this.hero.paragons, ...this.hero.hero_group?.paragons || []]
			return paragons
				.filter((p: Paragon) => p[attribute] > 0)
				.reduce((sum: number, p: Paragon) => sum + (p[attribute] * p.levels), 0)
		},
		paragonBonus (attribute: Attribute): number {
			return this.qualityBonus(attribute) * this.paragonValue(attribute)
		},
		attributeValue (attribute: Attribute): number {
			return this.qualityBonus(attribute) +
				this.bondBonus(attribute) +
				this.paragonBonus(attribute) +
				this.bondBonus(attribute) * this.paragonValue(attribute) +
				frame[this.hero.stars]
		},
	},
})
</script>

<style scoped>
.hero-left {
	position: relative;
	padding: .5rem 1rem;
	.focuses {
		position: absolute;
		top: 1rem;
		left: 1rem;
		.focus {
			max-height: 2rem;
			max-width: 2rem;
		}
		.second {
			position: absolute;
			top: .75rem;
			right: -1rem;
			max-height: 2rem;
			max-width: 2rem;
		}
	}
}
.stars {
	text-align: center;
	font-size: 1.5rem;
}
.col.right {
	display: flex;
	flex-direction: column;
}
.hero-stats {
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: .5rem 1rem 1rem;
	.hero-id {
		position: absolute;
		top: .5rem;
		right: 1rem;
		font-weight: bold;
		font-size: 1.7rem;
		color: var(--text-color-muted);
	}
}
h1 {
	font-size: 2rem;
	letter-spacing: 4px;
	text-transform: uppercase;
	font-weight: 500;
	line-height: 1.1;
	text-align: center;
	color: inherit;
}
.values {
	display: flex;
	flex-direction: column;
	.hero-value:not(:last-of-type) {margin-bottom: 1rem;}
}
</style>
