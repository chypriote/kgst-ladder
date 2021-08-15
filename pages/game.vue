<template>
<div class="container">
	<div class="darker">
		<section class="row">
			<div class="col col-12">
				<div class="section-title">Beasts</div>
			</div>
			<div class="col col-4">

			</div>
			<div class="col col-8">Everything about beasts</div>
		</section>
		<section class="row">
			<div class="col col-12">
				<div class="section-title">Profile Customization</div>
			</div>
			<div class="col col-12">Avatar frame</div>
			<div v-for="frame of frames" :key="`frame-${frame.slug}`" class="col col-1">
				<div class="item frame">
					<img :src="require(`~/assets/user/frames/${frame.picture}`)" :alt="frame.name">
					{{ frame.name }}
				</div>
			</div>
			<div class="col col-12">Chat bubbles</div>
			<div v-for="bubble of bubbles" :key="`bubble-${bubble.slug}`" class="col col-2">
				<div class="item bubble">
					<img :src="require(`~/assets/user/bubbles/${bubble.picture}`)" :alt="bubble.name">
					{{ bubble.name }}
				</div>
			</div>
		</section>
	</div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'Compendium',
	async asyncData ({ $content }): Promise<any> {
		const [frames, bubbles] = await Promise.all([
			$content('frames').limit(100).fetch(),
			$content('bubbles').limit(100).fetch(),
		])
		return { frames, bubbles }
	},
})
</script>

<style scoped>
.item {
	display: flex;
	flex-direction: column;
}
</style>
