<template>
	<div class="container-fluid">
		<hero-row>
			Hello les copains
		</hero-row>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroRow from '~/components/HeroRow.vue'

export default Vue.extend({
	components: { HeroRow },
	layout: 'default',
})
</script>
