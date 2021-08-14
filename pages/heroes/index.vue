<template>
	<div id="index">
		<div class="darker">
			<div class="container">
				<div class="row">
					<h1 class="page-title">Heroes</h1>
					<section class="col col-12">
						<p>Heroes are the main source of power for your kingdom. Every hero has four attributes, Military, Fortune, Provisions and Inspiration. They are the resources makers. Conglomeration of exceptional talent that abide to your rule which in return cost you a lot of gold to maintain. Either to own few with good development or become collector of heroes all depend on depth of your resources in game and real life. The bunch of them will become main source on your kingdom power.</p>
						<p>There are several ways you can increase your heroes power :</p>
					</section>
					<section class="col col-6">
						<h4 class="section-title">Level</h4>
						<p>Each hero can be developed by spending gold on them with every certain amount of gold spent will make them level-up.
							When they reach development limit it will require investiture to unlock to next nobility level which increase their level limit and also their quality skill limit.
							The current level cap can be maximized up to level 500. It will require more than 3B gold and tons of investiture material to bring a hero to their maximum level.
							Starting from level 400 new item is required for each level-up on varying amount.
							It will require more than 3k [Lazurite] to upgrade heroes from level 400 to 500.
						</p>
						<p>By turning on the 10-level toggle the level-up boost for heroes (*3) will be disabled.</p>
						<p>This action add count to any mission type, such as daily and weekly, that require to level-up heroes and increase level limit.</p>
					</section>
					<section class="col col-6">
						<h4 class="section-title">Quality</h4>
						<p>Hero quality score are the sum of all quality skills hero currently have[2]. This score is determining factor for many other parameter of heroes. Heroes with good initial quality value is preferably more sounds for long-term development compared to the lesser heroes, as such gain access to this kind of hero recommended to be planned earlier on.</p>
						<p>Quality skills can be upgraded directly using manuscripts, quality scroll, or quality skill exp. It can also be raised indirectly with council rank and treasure.</p>
						<p>This action add count to any mission type, such as daily and weekly, that require to upgrade heroes quality skills and increase quality score.</p>
					</section>
					<section class="col col-6">
						<h4 class="section-title">Frame enhancement</h4>
						<p>Hero with sufficient amount of fragment can be enhanced to receive bonus attribute score depend on level of enhancement and their overall quality (indicated by hero star value). It list value for enhancement to bronze / silver / gold / emerald / diamond as shown below:</p>

						<ul>
							<li>3-star +125k / +250k / +400k / +575k / +750k</li>
							<li>4-star +137,5k / +275k / +475k / +700k / +900k</li>
							<li>5-star +150k / +300k / +500k / +725k / +950k</li>
							<li>6-star +225k / +450k / +775k / +1,1m / +1,425m</li>
							<li>1-star and 2-star heroes share the same bonus attribute value from enhancement with 3-star heroes.</li>
						</ul>
						<p>The bonus spread evenly to every attribute type.</p>
					</section>
					<section class="col col-6">
						<h4 class="section-title">Beasts</h4>
						<p></p>
					</section>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<hero-nav />
			</div>
			<div class="row">
				<div class="col">
					<div class="heroes">
						<hero-card v-for="hero of heroes" :key="hero.id" :hero="hero" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Hero } from '~/types/Hero'
import HeroNav from '~/components/HeroNav.vue'
import HeroCard from '~/components/Heroes/HeroCard.vue'

export default Vue.extend({
	components: { HeroCard, HeroNav },
	layout: 'default',
	async asyncData ({ $strapi }): Promise<{ heroes: Hero[] }> {
		const heroes = await $strapi.find('heroes', { _sort: 'hid:asc', _limit: 500 })
		return { heroes }
	},
})
</script>
<style scoped>
.darker {
	background: rgba(37, 37, 37, .91);
	color: rgba(255, 255, 255, .7);
}
.page-title {
	margin: 1rem 0 2rem;
}
.row {padding-bottom: 1rem;}
section {
	margin-top: .5rem;
	p {margin: 0 0 .5rem;padding: .5rem 0;text-align: justify;}
	.section-title {
		text-transform: uppercase;
		font-size: 1.2rem;
		color: rgba(255, 255, 255, .8);
		letter-spacing: 4px;
		text-shadow: 0 1px 3px #0000005c;
		font-weight: bold;
	}
}
.heroes {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	.hero-card {margin: .25rem;}
}
</style>
