<template>
	<div class="container">
		<ladder-table :players="players" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Player } from '~/types/Player'
import LadderTable from '~/components/LadderTable.vue'

export default Vue.extend({
	components: { LadderTable },
	async asyncData ({ store }) {
		await store.dispatch('FETCH_HERO_LADDER')
	},
	computed: {
		players (): Player[] { return this.$store.state.players },
	},
})
</script>
