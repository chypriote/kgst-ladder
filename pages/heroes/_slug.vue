<template>
	<div class="container">
		<div class="row">
			<div class="col offset-md-1 col-md-10">
				<hero-card :hero="hero" />
				<div class="row">
					<div class="col col-4">
						<hero-maiden-card :maiden="hero.maiden" />
					</div>
					<div class="col col-8">
						<hero-skills-card :hero="hero" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroCard from '~/components/HeroSlug/HeroCard.vue'
import HeroMaidenCard from '~/components/HeroSlug/HeroMaidenCard.vue'
import HeroSkillsCard from '~/components/HeroSlug/HeroSkillsCard.vue'

export default Vue.extend({
	name: 'HeroSlug',
	components: { HeroSkillsCard, HeroMaidenCard, HeroCard },
	async asyncData ({ $strapi, params }) {
		const hero = await $strapi.findOne('heroes', params.slug)
		return { hero }
	},
})
</script>

<style scoped>
.card {
	position: relative;
	transition: transform .6s;
	transform-style: preserve-3d;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .2);
	background: rgb(38, 38, 38);
	color: white;
	overflow: hidden;
	&.hero {margin-bottom: 2rem;}
}
</style>
