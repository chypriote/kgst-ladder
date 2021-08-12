<template>
	<div class="maiden card">
		<header><h2>Hero</h2></header>
		<div class="picture">
			<img v-if="hero.picture" :src="hero.picture.formats.medium.url" :alt="hero.name" />
		</div>
		<footer>
			<nuxt-link :to="`/heroes/${hero.name}`">{{ hero.name }}</nuxt-link>
		</footer>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Hero } from '~/types/Hero'

export default Vue.extend({
	name: 'HeroMaidenCard',
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
.picture {
	padding: 0 1rem;
}
footer {
	text-align: center;
	padding: .5rem 1rem;
	text-transform: uppercase;
}
</style>
