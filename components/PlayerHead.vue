<template>
	<span class="hint--top" :aria-label="name">
		<img :src="picture" :alt="name" @error="useDefault" />
	</span>
</template>

<script lang="ts">
import Vue from 'vue'

const DEFAULT_PICTURE = require('~/assets/head/1/1.png')

export default Vue.extend({
	name: 'PlayerHead',
	props: {
		type: {
			type: Number,
			required: true,
		},
		id: {
			type: Number,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
	},
	computed: {
		picture: {
			get (): string {
				if (!this.type || !this.id) { return DEFAULT_PICTURE }
				return require(`~/assets/head/${this.type}/${this.id}.png`)
			},
			set (value: string): string { return value },
		},
	},
	methods: {
		useDefault ($event: any) {
			this.picture = DEFAULT_PICTURE
			$event.target.src = DEFAULT_PICTURE
		},
	},
})
</script>

<style scoped>
span {
	background: url("~/assets/head/0.png") no-repeat;
	background-size: contain;
	padding: .125em;
	img {width: 1em;height: 1em;}
}
</style>
