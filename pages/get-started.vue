<template>
	<div class="darker">
		<div class="container">
			<div class="row">
				<div class="col col-12">
					<h1 class="page-title">Get Started</h1>
				</div>
				<div class="col col-6">
					<p>So you got lured into this game by the obnoxious ads and the lusty maidens. It's okay, we all did. But the reason we stayed, and we hope you will too, is because of the underlying min-maxing game that has a lot more depth that what you would expect. </p>
					<p>The quantity of mechanics available might seem overwhelming, but we hope this website can help you understand how the game plays, and make the most educated decisions you can.</p>
					<p>The first step in your journey will be deciding what type of player you want to be, and what kind of money you are willing to spend:</p>
					<ul>
						<li class="player-type">
							<span class="bold">Whale</span>: Heavy spender, you are in it to win everything and are not afraid to spend your money doing it. (Did we tell you that we are looking for <nuxt-link to="/donations">donations</nuxt-link> to help run this site ?)
							<div class="subtitle">Our guides will help you dominate your servers cluster, and win the sought after Emperor of Champions title.</div>
						</li>
						<li class="player-type">
							<span class="bold">Regular Spender</span>: Spending a few dollars a day is not a problem. You want to make sure where you spend is efficient.
							<div class="subtitle">Efficiency is everything</div>
						</li>
						<li class="player-type">
							<span class="bold">Low VIP/Free to play</span>: You will spend on convenience/utility, but not much more.
							<div class="subtitle">Perfectly fine, </div>
						</li>
						<li class="player-type">
							<span class="bold">VIP 0</span>: You're playing the long game,
							<div class="subtitle"></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'GetStarted',
})
</script>
