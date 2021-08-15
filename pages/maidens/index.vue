<template>
	<div id="index">
		<div class="container">
			<div class="row">
				<div class="col">
					<h1 class="page-title">Maidens</h1>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<div class="maidens">
						<maiden-card v-for="maiden of maidens" :key="maiden.id" :maiden="maiden" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import MaidenCard from '~/components/Maidens/MaidenCard.vue'
import { Maiden } from '~/types/Maiden'

export default Vue.extend({
	name: 'MaidensIndex',
	components: { MaidenCard },
	layout: 'default',
	async asyncData ({ $strapi }: Context): Promise<{ maidens: Maiden[] }> {
		const maidens = await $strapi.find('maidens', { _sort: 'name:asc', _limit: 500 })
		return { maidens }
	},
})
</script>

<style scoped>
.page-title {margin: 1rem 0 2rem;}
.maidens {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	.maiden-card {margin: .25rem;}
}
</style>
