<template>
	<div class="maiden card">
		<div class="row">
			<div class="col col-12">
				<h1>{{ maiden.name }}</h1>
				<div v-if="maiden.mid" class="maiden-id">{{ `#${maiden.mid}` }}</div>
			</div>
			<div class="col col-6">
				<div class="maiden-left">
					<img v-if="maiden.picture" :src="maiden.picture.formats.medium.url" :alt="maiden.name" class="maiden-picture" />
				</div>
			</div>
			<div class="col col-6">
				<div class="maiden-right naughty" :class="{'--clear': view_naughty}" @click="view_naughty = !view_naughty">
					<div class="view-naughty">View Naughty</div>
					<img v-if="maiden.naughty_picture" :src="maiden.naughty_picture.formats.medium.url" :alt="maiden.name" class="maiden-picture" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Maiden } from '~/types/Maiden'

export default Vue.extend({
	name: 'MaidenCard',
	props: {
		maiden: {
			type: Object as () => Maiden,
			required: true,
		},
	},
	data: () => ({
		view_naughty: false,
	}),
})
</script>

<style scoped>
.maiden-left {
	position: relative;
}
.naughty {
	cursor: pointer;
	position: relative;
	img {filter: blur(10px);transition: filter 200ms ease-in-out;}
	&.--clear img {filter: none;}
	&.--clear .view-naughty {display: none;}
	.view-naughty {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		text-align: center;
		z-index: 2;
		color: var(--state-primary-35);
		font-size: 1.5rem;
		text-transform: uppercase;
		letter-spacing: 4px;
		transition: color 200ms ease-in-out, font-size 200ms ease-in-out;
		font-weight: bold;
		&:hover {color: #fff;font-size: 2rem;}
	}
}
h1 {
	font-size: 2rem;
	letter-spacing: 4px;
	text-transform: uppercase;
	font-weight: 500;
	line-height: 1.1;
	text-align: center;
	color: inherit;
}
</style>
