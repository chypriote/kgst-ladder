<template>
	<div id="events">
		<div class="darker">
			<div class="container">
				<div class="row">
					<h1 class="page-title">Events</h1>
					<section class="col col-6">
						<h2 class="section-title">Ongoing events</h2>
						<div v-for="event of ongoing" :key="event.id" class="task">
							<div class="event-name">{{ event.name }} {{ event.event_type.id }}</div>
							<div class="event-picture">
								<img v-if="event.event_type && event.event_type.picture" :src="event.event_type.picture.url" :alt="event.name" />
								<img v-else src="~/assets/events/7_280.png" :alt="event.name" />
							</div>
						</div>
					</section>
					<section class="col col-6">blabla</section>

				</div>
			</div>
		</div>
		<div class="container">
		<div class="row">
			<div class="col col-12">
				<h2 class="section-title">List of events</h2>
			</div>
			<div v-for="event of events" :key="event.id" class="col col-4">
				<img v-if="event.picture" :src="event.picture.url" :alt="event.name" style="max-height: 8	rem;" />
				{{ event.name }}
			</div>
		</div>
	</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import { format } from 'date-fns'
import { uniqBy } from 'lodash-es'

export default Vue.extend({
	name: 'Events',
	async asyncData ({ $strapi }: Context): Promise<{ ongoing: any[], content: any[] }> {
		const today = format(new Date(), 'yyyy-MM-dd')
		const [ongoing, events] = await Promise.all([
			$strapi.find('events', { _limit: 500, start_lte: today, end_gte: today }),
			$strapi.find('event-types', { _limit: 500 }),
		])

		return {
			ongoing: uniqBy(ongoing, e => e.event_type.id),
			events,
		}
	},
})
</script>

<style scoped>
.page-title {
	margin: 1rem 0 2rem;
}
</style>
