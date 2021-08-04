<template>
	<nav class="navbar container">
		<div class="menu menu-left">
			<nuxt-link to="/power" title="Highest Kingdom Power" class="menu-item left">
				<img src="https://static.wikia.nocookie.net/kings-throne-game-of-lust/images/9/9d/HeroIcon.png" alt="Heroes" />
				Heroes
			</nuxt-link>
			<nuxt-link to="/maidens" title="Most heroes" class="menu-item left">
				<img src="https://static.wikia.nocookie.net/kings-throne-game-of-lust/images/a/a0/MaidenIcon.png" alt="Maidens" />
				Maidens
			</nuxt-link>
			<nuxt-link to="/vip" title="Highest VIP" class="menu-item left">
				<img src="https://static.wikia.nocookie.net/kings-throne-game-of-lust/images/f/fb/LoginIcon.png" alt="Events" />
				Events
			</nuxt-link>
			<nuxt-link to="/vip" title="Highest VIP" class="menu-item left">
				<img src="https://static.wikia.nocookie.net/kings-throne-game-of-lust/images/f/fb/LoginIcon.png" alt="Events" />
				Challenges
			</nuxt-link>
			<nuxt-link to="/vip" title="Highest VIP" class="menu-item left">
				<img src="https://static.wikia.nocookie.net/kings-throne-game-of-lust/images/1/19/TreasureIcon.png" alt="Events" />
				Items
			</nuxt-link>
		</div>
		<div class="logo">
			<nuxt-link to="/">
				<img src="https://assets.thesilphroad.com/img/snoo_sr_icon.png" alt="Hme" />
			</nuxt-link>
		</div>
		<div class="menu menu-right">
			<nuxt-link to="/power" title="Highest Kingdom Power" class="menu-item right">
				<img src="https://assets.thesilphroad.com/img/pogo-assets/shiny-icon.png" alt="text" />
				Drop Rates
			</nuxt-link>
			<nuxt-link to="/heroes" title="Most heroes" class="menu-item right">
				<img src="https://static.wikia.nocookie.net/kings-throne-game-of-lust/images/4/4e/EquipmentIcon.png" alt="Power" />
				Power Calculator
			</nuxt-link>
			<nuxt-link to="/vip" title="Highest VIP" class="menu-item right">
				<img src="https://assets.thesilphroad.com/img/pogo-assets/shiny-icon.png" alt="text" />
				Heroes comparison
			</nuxt-link>
			<nuxt-link to="/vip0" title="Most powerful VIP0" class="menu-item right">
				<img src="https://assets.thesilphroad.com/img/pogo-assets/shiny-icon.png" alt="text" />
				Leaderboards
			</nuxt-link>
		</div>
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
	position: relative;
	z-index: 1000;
	margin: 3rem auto 2rem;
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
}
.menu {
	display: flex;
	flex: 1;
	height: 100%;
	&.menu-left {background: #3a3a3a;margin-right: 1rem;}
	&.menu-right {background: var(--state-primary-35);margin-left: 1rem;}
}
.menu-item {
	position: relative;
	flex: 1;
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
	text-transform: uppercase;
	letter-spacing: .15em;
	text-align: center;
	line-height: 1.1em;
	text-decoration: none;
	font-size: .7rem;
	padding: .25rem .5rem;
	background: transparent;
	color: #e8e8e8;
	text-shadow: 0 1px 3px rgba(0, 0, 0, .53);
	opacity: .9;
	transition: all 200ms ease-in-out;
	img {
		max-height: 2.5rem;
		opacity: 1;
		filter: invert(0) drop-shadow(1px 1px 1px #434343ad) grayscale(1);
		margin: 0 auto .5rem;
	}
	&:hover {
		opacity: .85;
		background: rgba(0, 0, 0, .13);
		outline: 0;
		img {filter: grayscale(0);}
	}
	&.left {
		&:last-of-type {margin-right: 1rem;}
		&:not(:last-of-type) {border-right: 1px solid rgba(0, 0, 0, .18);}
	}
	&.right {
		&:first-of-type {margin-left: 1rem;}
		&:not(:last-of-type) {border-right: 1px solid rgba(0, 0, 0, .18);}
	}
}
.logo {
	position: absolute;
	img {
		height: 7rem;
		cursor: pointer;
		filter: invert(0) drop-shadow(1px 1px 1px #434343ad);
		opacity: .9;
		&:hover {opacity: 1;position: relative;top: -1.5px;}
	}
}
</style>
