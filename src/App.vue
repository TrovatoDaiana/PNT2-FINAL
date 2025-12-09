<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
	<div id="app-root">
		<Navbar />
		<main>
			<router-view />
		</main>
	</div>
</template>

<style scoped>
main {
	padding: 1rem;
}
</style>
