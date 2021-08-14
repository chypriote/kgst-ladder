<template>
	<div class="container">
		<div class="row">
			<div class="col col-md-4">
				<h3 class="header">Highest VIP</h3>
				<div class="panel">
					<vip-table :players="vip" />
				</div>
			</div>
			<div class="col col-md-4">
				<h3 class="header">Kingdom Power</h3>
				<div class="panel">
					<ladder-table :players="kp" />
				</div>
			</div>
			<div class="col col-md-4">
				<h3 class="header">Top VIP0</h3>
				<div class="panel">
					<vippy-zero-table :players="vip0" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Player } from '~/types/Player'
import LadderTable from '~/components/Leaderboards/LadderTable.vue'
import VipTable from '~/components/Leaderboards/VipTable.vue'
import VippyZeroTable from '~/components/Leaderboards/VippyZeroTable.vue'

export default Vue.extend({
	name: 'Leaderboards',
	components: { VippyZeroTable, VipTable, LadderTable },
	async asyncData ({ $strapi }): Promise<{vip: Player[], kp: Player[], vip0: Player[]}> {
		const [vip, kp, vippyZero] = await Promise.all([
			$strapi.find('players', { _sort: 'vip:desc,power:desc', _limit: 10 }),
			$strapi.find('players', { _sort: 'power:desc', _limit: 10 }),
			$strapi.find('players', { _sort: 'power:desc', vip: 0, _limit: 10 }),
		])
		return { vip, kp, vip0: vippyZero }
	},
})
</script>

<style scoped>
.header {
	background: #616161;
	padding: .5rem 1rem;
	letter-spacing: .2em;
	color: var(--text-color);
	text-align: center;
	margin-bottom: 1rem;
	font-size: 1.2rem;
}
.panel {
	background: #505050;
	box-shadow: 0 6px 14px 0 #0000001c;
	padding: .5rem;
}
</style>
