<template>
	<table>
		<thead>
		<tr>
			<th class="rank">Rank</th>
			<th class="player">Player</th>
			<th class="stat">KP</th>
		</tr>
		</thead>
		<tbody>
		<tr v-for="(player, index) of players" :key="player.id">
			<td class="rank-cell">
				<sup>#</sup> {{ index + 1 }}
			</td>
			<td>
				<div class="player-cell">
					<div class="player-picture">
						<player-head :id="player.headId" :type="player.headType" :name="player.name" />
					</div>
					<div class="player-details">
						<div class="name">
							{{ player.name }}
						</div>
						<div class="details">{{ `S${player.server}` }} <template v-if="player.alliance">{{ ` - ${player.alliance.name}` }}</template></div>
					</div>
				</div>
			</td>
			<td class="kp">{{ player.power |numeral }}</td>
		</tr>
		</tbody>
	</table>
</template>

<script lang="ts">
import Vue from 'vue'
import { Player } from '~/types/Player'
import PlayerHead from '~/components/PlayerHead.vue'

export default Vue.extend({
	name: 'VippyZeroTable',
	components: { PlayerHead },
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
	padding: 2px 1px;
	border-color: #434343;
	vertical-align: middle;
	text-transform: uppercase;
	letter-spacing: .1em;
	font-size: .8rem;
	color: var(--text-color);
	font-weight: bold;
	&.player {text-align: center;}
	&.stat {text-align: center;}
}
.rank-cell {
	margin: 0;
	position: relative;
	font-size: 1.2rem;
	vertical-align: middle;
	text-align: center;
	sup {
		font-size: .75em;
		top: 1.2em;
		position: absolute;
		right: 2.25em;
	}
}
.player-cell {
	display: flex;
	align-items: center;
	.player-picture {
		font-size: 2rem;
		margin-right: .75rem;
		flex-shrink: 0;
	}
}
.player-details {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	&:hover {overflow: visible;}
	.details {
		color: var(--text-color-muted);
		font-size: .8rem;
		margin-top: .25rem;
	}
}
</style>
