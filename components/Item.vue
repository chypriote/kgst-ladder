<template>
	<div class="item">
		<span class="hint--top" :aria-label="item.name">
			<img v-if="item.picture" :src="item.picture.url" :alt="item.name" />
		</span>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Item } from '~/types/Item'

export default Vue.extend({
	name: 'Item',
	props: {
		item: {
			type: Object as () => Item,
			required: true,
		},
	},
})
</script>

<style scoped>
.item {
	display: inline-block;
	background: url("~/assets/itembg.png") no-repeat;
	background-size: contain;
	padding: .25rem;
}
img {
	width: auto;
	max-height: 100%;
}
</style>
