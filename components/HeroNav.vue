<template>
	<div class="hero">
		<nuxt-link to="to" class="item active">hero</nuxt-link>
		<nuxt-link to="to" class="item">hero</nuxt-link>
		<nuxt-link to="to" class="item">hero</nuxt-link>
		<nuxt-link to="to" class="item">hero</nuxt-link>
		<nuxt-link to="to" class="item">hero</nuxt-link>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'HeroNav',
})
</script>

<style scoped>
.hero {
	display: flex;
	justify-content: center;
	margin-bottom: .5rem;
}
.item {
	max-width: 8rem;
	display: flex;
	flex: 1;
	text-align: center;
	margin: .25rem;
	justify-content: center;
	flex-direction: column;
	text-transform: uppercase;
	letter-spacing: .1em;
	height: 5rem;
	border: none;
	background: var(--state-primary-35);
	padding: 5px 5px 1px;
	color: #fff;
	transition: all 200ms ease-in-out;
	&:hover, &.active {
		background: var(--state-primary);
		text-shadow: 0 0 5px rgba(0, 0, 0, .4);
	}
}
</style>
