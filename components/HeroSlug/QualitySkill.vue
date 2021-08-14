<template>
	<div class="quality-skill" :class="{'--unlockable': skill.unlockable}">
		<div v-if="skill.unlockable" class="unlockable hint--top" :aria-label="skill.skins[0].name">🔒</div>
		<header>{{ skill.name }}</header>
		<div class="details">
			<img :src="require(`~/assets/attributes/${skill.attribute}.png`)" :alt="skill.attribute">
			<div class="stars"><span v-for="i of skill.stars" :key="`star-${i}`">⭐</span></div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'QualitySkill',
	props: {
		skill: {
			type: Object,
			required: true,
		},
	},
})
</script>

<style scoped>
.quality-skill {
	display: flex;
	border-radius: 2px;
	padding: .25rem .5rem;
	border: 1px solid rgba(255, 255, 255, .06);
	box-shadow: 0 1px 6px -1px rgba(0, 0, 0, .35);
	background: rgb(46, 46, 46);
	flex-direction: column;
	position: relative;
}
.unlockable {
	top: 0;
	right: 0;
	background: rgb(180 36 36) no-repeat;
	background-size: auto 86%;
	padding: .125rem .25rem;
	color: #fff;
	font-weight: bold;
	letter-spacing: 4px;
	font-size: 9px;
	position: absolute;
	z-index: 9;
}
header {
	font-size: .9rem;
	margin-bottom: .5rem;
}
.details {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	img {max-height: 2rem;}
	.stars {font-size: .8rem;height: 1rem;}
}
</style>
