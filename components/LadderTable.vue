<template>
	<table>
		<thead>
		<tr>
			<td colspan="5">{{ `Last updated ${date(players[0].updated_at)}` }}</td>
		</tr>
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
					<div class="name">
						<span v-if="player.inactive === true" title="Player seems inactive">⏱</span>
						{{ player.name }}
					</div>
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
import { parseISO, format } from 'date-fns'
import { Player } from '~/types/Player'

export default Vue.extend({
	name: 'LadderTable',
	props: {
		players: {
			type: Array as () => Player[],
			required: true,
		},
	},
	methods: {
		date: (value: string): string => format(parseISO(value), 'dd/MM'),
	},
})
</script>

<style scoped>
thead th {
	position: sticky;
	top: 3rem;
	z-index: 2;
	background-color: var(--background-color);
	@media (min-width: 768px) {
		top: 3rem;
	}
}
thead td {
	font-size: .9rem;
	color: #9a9a9a;
	padding-left: 0;
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
