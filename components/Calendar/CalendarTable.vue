<template>
	<div class="calendar">
		<div v-for="week of calendar" :key="`week-${week}`" class="week">
			<div v-for="day of week" :key="`day-${day}-${week}`" class="day" :class="{
				'--muted': !day.sameMonth,
				'--highlighted': day.today,
			}">
				{{ format(day.date, 'dd/MM') }}
				<template v-for="event of events">
					<div v-if="(isBefore(event.start, day.date) || isSameDay(event.start, day.date))
					&& (isAfter(event.end, day.date) || isSameDay(event.end, day.date))" :key="event.name" class="event">
						{{ event.name }}
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { range } from 'lodash-es'
import {
	addDays,
	format,
	getDaysInMonth,
	isAfter,
	isBefore,
	isSameDay,
	isSameMonth,
	isToday,
	startOfMonth,
	startOfWeek
} from 'date-fns'

interface IDay {
	date: Date
	today: boolean
	sameMonth: boolean
}
export default Vue.extend({
	name: 'Calendar',
	data: () => ({
		isBefore,
		isSameDay,
		isAfter,
		format,
	}),
	computed: {
		calendar () {
			const calendar:IDay[][] = []
			const today = new Date()
			const rows = range(Math.ceil(getDaysInMonth(today) / 7) + 1)
			const cols = range(7)
			let current = startOfWeek(startOfMonth(today), { weekStartsOn: 1 })

			rows.forEach(() => {
				const week: IDay[] = []
				cols.forEach(() => {
					week.push({
						date: current,
						today: isToday(current),
						sameMonth: isSameMonth(current, today),
					})
					current = addDays(current, 1)
				})
				calendar.push(week)
			})
			console.log(calendar)
			return calendar
		},
		events () {
			return [
				{ name: 'Test', start: new Date('2021-08-06'), end: new Date('2021-08-10') },
				{ name: 'Toast', start: new Date('2021-08-14'), end: new Date('2021-08-18') },
			]
		},
	},
})
</script>

<style scoped>
.week {
	border: 1px solid black;
	min-height: 6rem;
	padding: .25rem;
	display: flex;
}
.day {
	border: 1px solid red;
	min-height: 3rem;
	flex: 1;
	&.--muted {border-color: var(--text-color-muted);}
	&.--highlighted {background-color: darkgreen;}
}
.event {
	width: calc(100% + 2px);
	height: 1rem;
	background-color: lightblue;
	margin-left: -1px;
	z-index: 2;
}
</style>
