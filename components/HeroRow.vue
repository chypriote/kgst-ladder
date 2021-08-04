<template>
	<div class="row" :class="{'--dark': dark}">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'HeroRow',
	props: {
		dark: {
			type: Boolean,
			default: false,
		},
	},
})
</script>

<style scoped>
.--dark {
	margin: 1rem 0 0;
	padding: 0 1rem;
	text-align: center;
	color: var(--inv-text-color);
	background: var(--inv-background-color);
}
</style>
