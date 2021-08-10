<template>
	<div class="container">
		<div class="row">
			<div class="col offset-md-1 col-md-10">
				<div class="card">
					<calendar-table />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import CalendarTable from '~/components/Calendar/CalendarTable.vue'

export default Vue.extend({
	name: 'Calendar',
	components: { CalendarTable },
})
</script>

<style scoped>
.card {
	position: relative;
	transition: transform .6s;
	transform-style: preserve-3d;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .2);
	background: rgb(38, 38, 38);
	color: white;
}
</style>
