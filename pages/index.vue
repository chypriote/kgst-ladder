<template>
	<div id="index">
		<section class="darker">
			<div class="container">
				<div class="row">
					<h1 class="page-title">Heroes</h1>
					<hero-nav />
					<div class="col">
						<hero-card />
					</div>
				</div>
			</div>
		</section>
		<div class="container">

		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroNav from '~/components/HeroNav.vue'
import HeroCard from '~/components/HeroCard.vue'

export default Vue.extend({
	components: { HeroCard, HeroNav },
	layout: 'default',
})
</script>
<style scoped>
.darker {
	background: rgba(37, 37, 37, .91);
	color: rgba(255, 255, 255, .7);
}
</style>
