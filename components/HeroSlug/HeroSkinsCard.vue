<template>
	<div class="hero-skins card">
		<header><h2>Skins</h2></header>
		<div class="skins row">
			<div v-for="skin of hero.skins" :key="skin.id" class="col col-3 skin">
				<img v-if="skin.picture" :src="skin.picture.formats.medium.url" :alt="skin.name" />
				{{ skin.name }}
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Hero } from '~/types/Hero'

export default Vue.extend({
	name: 'HeroSkinsCard',
	props: {
		hero: {
			type: Object as () => Hero,
			required: true,
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
	color: inherit;
}
.skins {
	display: flex;
}
</style>
