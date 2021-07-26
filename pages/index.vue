<template>
	<main>
	</main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	asyncData ({ redirect }) {
		redirect('/power')
	},
})
</script>
