<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Search from '$lib/Search.svelte';
</script>

<div class="center">
	<Search></Search>
</div>

<style>
	.center{
		text-align: center;
	}
</style>