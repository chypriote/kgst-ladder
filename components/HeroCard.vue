<template>
	<div class="hero-card">
		<div class="hero-details">
			<div class="hero-name">Sir Oliver</div>
			<figure>
				<img src="https://res.cloudinary.com/valoskins/image/upload/v1613997249/kingsthrone/small_Sir_Oliver_20fc3e8300.png" alt="Oliver" class="hero-picture" />
			</figure>
			<aside class="hero-stats">
				<div class="focus">Milit</div>
				<div class="stats">
					<div class="stat">
						<img src="https://kingsthrone.chypriote.com/_nuxt/img/military.caafb5e.png" alt=""> 5
					</div>
					<div class="stat">
						<img src="https://kingsthrone.chypriote.com/_nuxt/img/military.caafb5e.png" alt=""> 5
					</div>
					<div class="stat">
						<img src="https://kingsthrone.chypriote.com/_nuxt/img/military.caafb5e.png" alt=""> 5
					</div>
					<div class="stat">
						<img src="https://kingsthrone.chypriote.com/_nuxt/img/military.caafb5e.png" alt=""> 5
					</div>
				</div>
			</aside>
		</div>
		<div class="hero-skills">

		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'HeroCard',
})
</script>

<style scoped>
.hero-card {
	height: 100%;
	max-width: 350px;
	background: #68487d94;
}
.hero-details {
	display: flex;
	position: relative;
	flex-wrap: wrap;
	align-items: center;
	.hero-name {
		z-index: 2;
		background: linear-gradient(180deg, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4), rgba(0, 0, 0, .2), rgba(0, 0, 0, 0));
		padding: 7px 5px 3px;
		color: white;
		text-shadow: 0 0 3px #00000040;
		font-weight: bold;
		letter-spacing: 4px;
		width: 100%;
		line-height: 20px;
	}
	.hero-picture {
		justify-content: space-around;
		text-transform: uppercase;
		font-size: 15px;
		padding: 0;
		width: 120px;
		height: auto;
		min-width: 120px;
		display: flex;
		align-items: center;
		filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, .5));
		flex: 0 0 auto;
		z-index: 0;
		background: transparent no-repeat 50% 100%;
		background-size: contain;
	}
	.hero-stats {
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.focus {
		text-align: left;
		font-size: 11px;
		margin: 3px 0 3px;
		padding: 3px 6px 5px;
		border-radius: 2px;
		letter-spacing: 4px;
		text-shadow: 0 0 10px rgba(0, 0, 0, .32);
		font-weight: 500;
		line-height: 1.1;
		background: #68487d;
		color: #fff;
	}
	.stats {
		flex: 1 1 auto;
		display: flex;
		flex-wrap: wrap;
		.stat {
			flex: 1 1 50%;
			display: flex;
			align-items: center;
			height: 2rem;
			color: white;
			text-shadow: 0 0 10px rgba(0, 0, 0, .2);
			background: linear-gradient(45deg, #0000001f, transparent, transparent);
			img {max-height: 1.5rem;margin-right: .5rem;}
		}
	}
}
</style>
