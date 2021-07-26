<template>
	<nav class="navbar">
		<nuxt-link to="/power" title="Highest Kingdom Power">
			<span class="desktop">Kingdom Power</span>
			<span class="mobile">Power</span>
		</nuxt-link>
		<nuxt-link to="/heroes" title="Most heroes">
			<span class="desktop">Most Heroes</span>
			<span class="mobile">Heroes</span>
		</nuxt-link>
		<nuxt-link to="/vip" title="Highest VIP">
			<span class="desktop">Highest VIP</span>
			<span class="mobile">VIP</span>
		</nuxt-link>
		<nuxt-link to="/vip0" title="Most powerful VIP0">
			<span class="desktop">VIP0 Only</span>
			<span class="mobile">VIP0</span>
		</nuxt-link>
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
	color: black;
	&.nuxt-link-active, &:hover {
		background-color: var(--text-color-primary);
		color: white;
	}
}
.desktop {display: none;}
.mobile {display: block;}

@media (min-width: 768px) {
	.desktop {display: block;}
	.mobile {display: none;}
}
</style>
