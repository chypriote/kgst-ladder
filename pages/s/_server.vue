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
	async asyncData ({ store, params }) {
		await store.dispatch('FETCH_SERVER_LADDER', params.server)
	},
	computed: {
		players (): Player[] { return this.$store.state.players },
	},
})
</script>
