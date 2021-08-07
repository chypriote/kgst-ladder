<template>
	<div class="paragon">
		<header>{{ paragon.name }}</header>
		<div class="details">
			<div class="attributes">
				<div v-if="paragon.military" class="attribute military">
					<img :src="require(`~/assets/military.png`)" alt="Military">
					<div class="value">{{ paragon.military }} % (MAX {{ paragon.military * paragon.levels }}%)</div>
				</div>
				<div v-if="paragon.fortune" class="attribute fortune">
					<img :src="require(`~/assets/fortune.png`)" alt="Fortune">
					<div class="value">{{ paragon.fortune }} % (MAX {{ paragon.fortune * paragon.levels }}%)</div>
				</div>
				<div v-if="paragon.provisions" class="attribute provisions">
					<img :src="require(`~/assets/provisions.png`)" alt="Provisions">
					<div class="value">{{ paragon.provisions }} % (MAX {{ paragon.provisions * paragon.levels }}%)</div>
				</div>
				<div v-if="paragon.inspiration" class="attribute inspiration">
					<img :src="require(`~/assets/inspiration.png`)" alt="Inspiration">
					<div class="value">{{ paragon.inspiration }} % (MAX {{ paragon.inspiration * paragon.levels }}%)</div>
				</div>
			</div>
			<div class="costs">
				<template v-if="paragon.item">
					<div>{{ paragon.cost }}x <span class="item">{{ paragon.item.name }}</span></div>
					<div>per level</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'Paragon',
	props: {
		paragon: {
			type: Object,
			required: true,
		},
	},
})
</script>

<style scoped>
.paragon {
	position: relative;
	display: flex;
	flex-direction: column;
	padding: .25rem .5rem;
	margin: .25rem;
	background: rgb(46, 46, 46);
	border: 1px solid rgba(255, 255, 255, .06);
	border-radius: 2px;
	box-shadow: 0 1px 6px -1px rgba(0, 0, 0, .35);
	&.--unlockable::before {
		content: "🔒";
		top: 0;
		right: 0;
		background: rgb(180 36 36) no-repeat;
		background-size: auto 86%;
		padding: .125rem .25rem;
		color: #fff;
		font-weight: bold;
		letter-spacing: .09em;
		font-size: 9px;
		position: absolute;
		z-index: 9;
	}
}
header {
	font-size: 1.1rem;
	margin-bottom: .75rem;
}
.details {
	display: flex;
	width: 100%;
}
.attributes {
	display: flex;
	flex-wrap: wrap;
	flex: 2;
}
.attribute {
	flex: 0 1 50%;
	display: flex;
	align-items: center;
	margin-bottom: .25rem;
	.value {height: 1.2rem;}
	img {max-height: 1.5rem;margin-right: .5rem;}
}
.costs {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
}
</style>
