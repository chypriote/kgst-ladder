<template>
	<main id="main">
		<navbar />
		<div class="wrapper">
			<nuxt />
		</div>
	</main>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/Navbar.vue'

export default Vue.extend({
	name: 'DefaultLayout',
	components: { Navbar },
})
</script>

<style scoped>
.wrapper {
	padding-top: 3rem;
}
</style>
