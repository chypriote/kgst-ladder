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
	justify-content: space-between;
	align-items: center;
}
a {
	text-decoration: none;
	text-transform: uppercase;
}
</style>
