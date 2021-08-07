<template>
	<div class="maiden card">
		<template v-if="maiden">
			<header><h2>Maiden</h2></header>
			<div class="picture">
				<img v-if="maiden.picture" :src="maiden.picture.formats.medium.url" :alt="maiden.name" />
			</div>
			<footer>
				<nuxt-link :to="`/maiden/${maiden.name}`">{{ maiden.name }}</nuxt-link>
			</footer>
		</template>
		<div v-else class="no-maiden">
			No Maiden
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'HeroMaidenCard',
	props: {
		maiden: {
			type: Object,
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
	margin-top: -2rem;
}
footer {
	text-align: center;
	padding: .5rem 1rem;
	text-transform: uppercase;
}
.no-maiden {
	padding: .5rem 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 7rem;
}
</style>
