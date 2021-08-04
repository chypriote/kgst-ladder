<template>
	<main id="main">
		<navbar />
		<nuxt />
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
