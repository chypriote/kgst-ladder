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
						<hero-skins-card v-if="hero.skins.length" :hero="hero" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import HeroCard from '~/components/HeroSlug/HeroCard.vue'
import HeroMaidenCard from '~/components/HeroSlug/HeroMaidenCard.vue'
import HeroSkillsCard from '~/components/HeroSlug/HeroSkillsCard.vue'
import { Hero } from '~/types/Hero'
import HeroSkinsCard from '~/components/HeroSlug/HeroSkinsCard.vue'

interface IData { hero: Hero }
export default Vue.extend({
	name: 'HeroSlug',
	components: { HeroSkinsCard, HeroSkillsCard, HeroMaidenCard, HeroCard },
	async asyncData ({ $strapi, params }: Context): Promise<IData> {
		const hero = await $strapi.findOne('heroes', params.slug)
		return { hero }
	},
})
</script>

<style scoped>
.card {
	&.hero {margin-bottom: 2rem;}
	&.maiden {margin-bottom: 2rem;}
	&.hero-skills {margin-bottom: 2rem;}
	&.hero-skins {margin-bottom: 2rem;}
}
</style>
