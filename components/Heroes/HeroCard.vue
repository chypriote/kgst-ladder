<template>
	<nuxt-link :to="`/heroes/${hero.slug}`" class="hero-card" :class="`--${hero.focus}`">
		<div class="content">
			<img v-if="hero.picture" :src="hero.picture.formats.small.url" :alt="hero.name" class="hero-picture" />
		</div>
		<footer :title="hero.name">
			{{ hero.name }}
			<div class="stars"><span v-for="i of hero.stars" :key="`star-${i}`">⭐</span></div>
		</footer>
		<div class="focuses">
			<div class="focus hint--top" :aria-label="hero.focus">
				<img :src="require(`~/assets/attributes/${hero.focus}.png`)" :alt="hero.focus">
			</div>
			<div class="second hint--top" :aria-label="hero.focus">
				<img v-if="hero.second_focus" :src="require(`~/assets/attributes/${hero.second_focus}.png`)" :alt="hero.second_focus">
			</div>
		</div>
	</nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
import { Hero } from '~/types/Hero'

export default Vue.extend({
	name: 'SmallHeroCard',
	props: {
		hero: {
			type: Object as () => Hero,
			required: true,
		},
	},
})
</script>

<style scoped>
.hero-card {
	position: relative;
	border-radius: 2px;
	overflow: hidden;
	flex: 0 0 13%;
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
		height: 9rem;
	}
	footer {
		background: rgba(37, 37, 37, .91);
		color: #fff;
		height: 3rem;
		line-height: .9em;
		text-transform: uppercase;
		font-weight: bold;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: .5rem .5rem;
		transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
		text-overflow: ellipsis;
		overflow: hidden;
		position: relative;
		.stars {font-size: .75rem;padding-top: .25rem;}
	}
	.focuses {
		position: absolute;
		top: .25rem;
		left: .5rem;
		.focus {
			max-height: 1.5rem;
			max-width: 1.5rem;
		}
		.second {
			position: absolute;
			top: .3rem;
			right: -.5rem;
			max-height: 1rem;
			max-width: 1rem;
		}
	}
	.hero-picture {
		width: 100%;
		filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, .5));
	}
	&:hover {
		background-color: rgba(0, 0, 0, .5);
		footer, header {color: rgba(37, 37, 37, .91);background-color: #fff;}
	}
}
</style>
