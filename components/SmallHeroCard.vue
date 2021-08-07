<template>
	<nuxt-link :to="`/heroes/${hero.slug}`" class="hero-card" :class="`--${hero.focus}`">
		<header :title="hero.name">{{ hero.name }}</header>
		<div class="content">
			<img v-if="hero.picture" :src="hero.picture.formats.small.url" :alt="hero.name" />
		</div>
		<footer>
			<div class="stars"><span v-for="i of hero.stars" :key="`star-${i}`">⭐</span></div>
			<div class="details">
				<div class="focuses">
					<div class="focus hint--top" :aria-label="hero.focus">
						<img :src="require(`~/assets/${hero.focus}.png`)" :alt="hero.focus">
					</div>
					<div class="second hint--top" :aria-label="hero.focus">
						<img v-if="hero.second_focus" :src="require(`~/assets/${hero.second_focus}.png`)" :alt="hero.second_focus">
					</div>
				</div>
			</div>
		</footer>
	</nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'SmallHeroCard',
	props: {
		hero: {
			type: Object,
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
	flex: 0 0 10%;
	cursor: pointer;
	&.--balanced {background: radial-gradient(#dededecc, #959ca680);}
	&.--military {background: radial-gradient(#ffa2a2cc, #a7132e80);}
	&.--fortune {background: radial-gradient(#fdff9bcc, #ecda0980);}
	&.--provisions {background: radial-gradient(#a9f712cc, #2ecc7180);}
	&.--inspiration {background: radial-gradient(#70c0f7cc, #1073a280);}
	.content {
		padding: .25rem .1rem 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	header {
		color: #f7f7f7;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-size: .75rem;
		text-align: center;
		padding: .25rem .5rem;
		background: rgba(0, 0, 0, .12);
		word-break: break-all;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		height: 1rem;
		position: relative;
	}
	footer {
		background: rgba(0, 0, 0, .12);
		padding: .25rem .5rem;
		text-align: center;
		.stars {font-size: .75rem;padding-bottom: .25rem;}
		.focuses {
			position: relative;
			.focus {
				max-height: 1rem;
				max-width: 1rem;
			}
			.second {
				position: absolute;
				top: .75rem;
				right: -1rem;
				max-height: .75rem;
				max-width: .75rem;
			}
		}
	}
	img {
		height: auto;
		max-height: 8rem;
		width: 100%;
		filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, .5));
	}
	&:hover {
		box-shadow: 0 3px 5px -1px #00000042;
	}
}
</style>
