<template>
	<table>
		<thead>
		<tr>
			<th></th>
			<th class="player">Player</th>
			<th class="stat">VIP</th>
			<th class="stat">KP</th>
			<th class="stat">Heroes</th>
		</tr>
		</thead>
		<tbody>
		<tr v-for="(player, index) of players" :key="player.id">
			<td class="rank">{{ index + 1 }}</td>
			<td>
				<div class="player-details">
					<div class="name">{{ player.name }}</div>
					<div class="details">{{ `S${player.server}` }} <template v-if="player.alliance">{{ ` - ${player.alliance.name}` }}</template></div>
				</div>
			</td>
			<td>{{ player.vip }}</td>
			<td>{{ player.power |numeral }}</td>
			<td>{{ player.heroes }}</td>
		</tr>
		</tbody>
	</table>
</template>

<script lang="ts">
import Vue from 'vue'
import { Player } from '~/types/Player'

export default Vue.extend({
	name: 'LadderTable',
	props: {
		players: {
			type: Array as () => Player[],
			required: true,
		},
	},
})
</script>

<style scoped>
thead th {
	position: sticky;
	top: 3rem;
	z-index: 2;
	background-color: var(--background-color);
}
tbody td {
	vertical-align: middle;
}
.rank {text-align: center;}
.player-details {
	display: flex;
	flex-direction: column;
	.details {
		color: var(--text-color-muted);
		font-size: .8rem;
		margin-top: .25rem;
	}
}
</style>
