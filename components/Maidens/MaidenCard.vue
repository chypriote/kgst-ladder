<template>
	<nuxt-link :to="`/maidens/${maiden.slug}`" class="maiden-card">
		<div class="content">
			<img v-if="maiden.picture" :src="maiden.picture.formats.small.url" :alt="maiden.name" class="maiden-picture" />
		</div>
		<footer :title="maiden.name">{{ maiden.name }}</footer>
	</nuxt-link>
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
})
</script>

<style scoped>
.maiden-card {
	position: relative;
	border-radius: 2px;
	overflow: hidden;
	flex: 0 0 15.5555555%;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	border: 2px solid hsla(0, 0%, 100%, .4);
	transition: background-color 200ms ease-in-out;
	.content {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
		padding: .25rem .25rem 0;
		margin-top: -1rem;
	}
	footer {
		background: rgba(40, 53, 79, .9);
		height: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.3rem;
		line-height: .9em;
		text-transform: uppercase;
		color: white;
		font-weight: bold;
		text-align: center;
		padding: .5rem .5rem;
		transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
	}
	&:hover {
		background-color: rgba(0, 0, 0, .5);
		footer {background-color: #fff;color: #1a325e;}
	}
}
</style>
