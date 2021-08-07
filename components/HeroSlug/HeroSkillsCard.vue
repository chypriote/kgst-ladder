<template>
	<div class="card hero-skills">
		<header><h2>Skills</h2></header>
		<div class="content">
			<div class="section-title">Quality</div>
			<div class="quality-skills">
				<quality-skill v-for="skill of orderedSkills" :key="skill.id" :skill="skill" />
			</div>
			<div class="section-title">Paragons</div>
			<div class="paragons">
				<paragon v-for="paragon of orderedParagon" :key="paragon.id" :paragon="paragon" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { orderBy } from 'lodash-es'
import { Attribute } from '~/types/constants'
import QualitySkill from '~/components/HeroSlug/QualitySkill.vue'
import Paragon from '~/components/HeroSlug/Paragon.vue'

export default Vue.extend({
	name: 'HeroSkillsCard',
	components: { Paragon, QualitySkill },
	props: {
		hero: {
			type: Object,
			required: true,
		},
	},
	computed: {
		orderedSkills () {
			const attributes = Object.values(Attribute)
			return orderBy(this.hero.quality_skills,
				['unlockable', a => attributes.indexOf(a.attribute), 'stars'],
				['desc', 'asc', 'desc']
			)
		},
		quality () {
			return this.hero.quality_skills.reduce((sum, s) => sum + s.stars, 0)
		},
		orderedParagon () {
			const paragons = this.hero.paragons
			this.hero.hero_group.paragons.forEach(p => paragons.push(p))
			return paragons
		},
	},
})
</script>

<style scoped>
header {
	padding: .5rem 0;
}
h2 {
	font-size: 1.5rem;
	letter-spacing: 4px;
	text-transform: uppercase;
	font-weight: 500;
	line-height: 1.1;
	text-align: center;
}
.section-title {
	text-transform: uppercase;
	font-size: 1.2rem;
	letter-spacing: .13em;
	text-shadow: 0 1px 3px rgba(0, 0, 0, .36);
	font-weight: bold;
	margin: 1rem 0 .5rem;
}
.content {
	padding: 0 1rem .5rem;
}
.quality-skills {
	display: flex;
	flex-wrap: wrap;
	.quality-skill {
		flex: 0 1 25%;
	}
}
</style>
