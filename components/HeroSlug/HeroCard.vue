<template>
	<div class="hero card">
		<div class="row">
			<div class="col col-4">
				<div class="hero-left">
					<img v-if="hero.picture" :src="hero.picture.formats.medium.url" :alt="hero.name" class="hero-picture" />
					<div class="stars"><span v-for="i of hero.stars" :key="`star-${i}`">⭐</span></div>
					<div class="focuses">
						<div class="focus hint--top" :aria-label="hero.focus">
							<img :src="require(`~/assets/${hero.focus}.png`)" :alt="hero.focus">
						</div>
						<div class="second hint--top" :aria-label="hero.focus">
							<img v-if="hero.second_focus" :src="require(`~/assets/${hero.second_focus}.png`)" :alt="hero.second_focus">
						</div>
					</div>
				</div>
			</div>
			<div class="col col-8 right">
				<div class="hero-stats">
					<h1>{{ hero.name }}</h1>
					<div v-if="hero.hid" class="hero-id">{{ `#${hero.hid}` }}</div>

					<div class="values">
						<hero-value :type="'military'" :value="10" />
						<hero-value :type="'fortune'" :value="4" />
						<hero-value :type="'provisions'" :value="3" />
						<hero-value :type="'inspiration'" :value="7" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroValue from '~/components/HeroValue.vue'

export default Vue.extend({
	name: 'HeroCard',
	components: { HeroValue },
	props: {
		hero: {
			type: Object,
			required: true,
		},
	},
})
</script>

<style scoped>
.hero-left {
	position: relative;
	padding: .5rem 1rem;
	.focuses {
		position: absolute;
		top: 1rem;
		left: 1rem;
		.focus {
			max-height: 2rem;
			max-width: 2rem;
		}
		.second {
			position: absolute;
			top: .75rem;
			right: -1rem;
			max-height: 2rem;
			max-width: 2rem;
		}
	}
}
.stars {
	text-align: center;
	font-size: 1.5rem;
}
.col.right {
	display: flex;
	flex-direction: column;
}
.hero-stats {
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: .5rem 1rem 1rem;
	.hero-id {
		position: absolute;
		top: .5rem;
		right: 1rem;
		font-weight: bold;
		font-size: 1.7rem;
		color: var(--text-color-muted);
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
.values {
	display: flex;
	flex-direction: column;
	.hero-value:not(:last-of-type) {margin-bottom: 1rem;}
}
</style>
