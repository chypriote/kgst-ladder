<template>
	<nav class="navbar">
		<nuxt-link to="/power">Power</nuxt-link>
		<nuxt-link to="/heroes">Heroes</nuxt-link>
		<nuxt-link to="/vip">VIP</nuxt-link>
		<nuxt-link to="/vip0">VIP0</nuxt-link>
	</nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'Navbar',
})
</script>

<style scoped>
.navbar {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding: .5rem 1.5rem;
	z-index: 20;
	height: 3rem;
	background-color: #fff;
	box-sizing: border-box;
	border-bottom: 1px solid #eee;
	display: flex;
	align-items: center;
}
a {
	text-decoration: none;
	text-transform: uppercase;
	flex-grow: 1;
	transition: all 200ms ease-in-out;
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	&.nuxt-link-active, &:hover {
		background-color: var(--text-color-primary);
		color: white;
	}
}
</style>
