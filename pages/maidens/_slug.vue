<template>
	<div class="container">
		<div class="row">
			<div class="col offset-md-1 col-md-10">
				<maiden-card :maiden="maiden" />
				<div class="row">
					<div class="col col-4">
						<maiden-hero-card :hero="maiden.hero" />
					</div>
					<div class="col col-8">
						<maiden-skins-card v-if="maiden.skins.length" :maiden="maiden" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import MaidenCard from '~/components/MaidenSlug/MaidenCard.vue'
import MaidenSkinsCard from '~/components/MaidenSlug/MaidenSkinsCard.vue'
import MaidenHeroCard from '~/components/MaidenSlug/MaidenHeroCard.vue'

export default Vue.extend({
	name: 'MaidensSlug',
	components: { MaidenSkinsCard, MaidenHeroCard, MaidenCard },
	async asyncData ({ $strapi, params }: Context): Promise<object> {
		const maiden = await $strapi.findOne('maidens', params.slug)
		return { maiden }
	},
})
</script>

<style scoped>
.card {
	&.maiden {margin-bottom: 2rem;}
	&.hero {margin-bottom: 2rem;}
	&.maiden-skills {margin-bottom: 2rem;}
	&.maiden-skins {margin-bottom: 2rem;}
}
</style>
