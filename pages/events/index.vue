<template>
	<div class="container">
		<div class="darker">
			<div class="row">
				<h1 class="page-title">Events</h1>
				<section class="col col-6">blabla</section>
				<section class="col col-6">blabla</section>

				<div class="col">
					<div v-for="event of content" :key="event.id" class="card">
						<img :src="require(`~/assets/events/${event.picture}`)" :alt="event.name" />
						{{ event }}
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col col-4 offset-2">
					<div class="event-group">
						<header><h3>Ongoing events</h3></header>
						<div v-for="event of ongoing" :key="event.id" class="task">
							<div class="event-name">{{ event.name }}</div>
							<div class="event-picture">
								<img v-if="event.picture" :src="require(`~/assets/events/${event.picture}`)" :alt="event.name" />
								<img v-else src="~/assets/events/7_280.png" :alt="event.name" />
							</div>
						</div>
					</div>
				</div>
				<div class="col col-4">
					<h3>Recent events</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { format } from 'date-fns'

export default Vue.extend({
	name: 'Events',
	async asyncData ({ $strapi, $content }): Promise<{ongoing: any[], content: any[]}> {
		const today = format(new Date(), 'yyyy-MM-dd')
		const ongoingEvents = await $strapi.find('events', { _limit: 500, start_lte: today, end_gte: today })
		const content = await $content('events').fetch()

		const ongoing = []

		for (const item of ongoingEvents) {
			const ex = await $content('events').where({ eid: item.eid }).fetch()
			ongoing.push(ex.length ? { ...item, ...ex[0] } : item)
		}

		return { ongoing, content }
	},
})
</script>

<style scoped>
.darker {
	background: rgba(37, 37, 37, .91);
	color: rgba(255, 255, 255, .7);
}
.page-title {
	margin: 1rem 0 2rem;
}
.card {
	position: relative;
	transition: transform .6s;
	transform-style: preserve-3d;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .2);
	background: rgb(38, 38, 38);
	color: white;
}
.event-group {
	display: flex;
	flex-direction: column;
	header {
		color: #fff;
		letter-spacing: .4em;
		font-size: 15px;
		padding: 10px;
		margin: 0;
		border-radius: 5px 5px 0 0;
		overflow: hidden;
		position: relative;
		background: #e0641b;
	}
	.task {
		border-radius: 2px;
		margin: 2px 0;
		padding: 3px 1px 3px 15px;
		display: flex;
		align-items: center;
		text-transform: uppercase;
		letter-spacing: .15em;
		font-size: 9px;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
		background: rgba(255, 255, 255, .0784313725490196) linear-gradient(to right, #e0641b, #e0641b, rgba(255, 255, 255, .078));
	}
	.event-name {
		margin: 0;
		text-align: left;
		font-size: 1rem;
		letter-spacing: .13em;
		color: #efebe0;
		text-shadow: 0 0 5px #00000052;
		flex: 1;
		line-height: 1.2em;
		padding: 4px 0;
	}
	.event-picture {
		img {max-height: 3rem;}
	}
}
</style>
