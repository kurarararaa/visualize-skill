<script context="module" lang="ts">
	import SkillCardList from '$lib/SkillCardList.svelte';

	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import authStore from '../stores/authStore';

	onMount(async () => {
		if (!$authStore.isLoggedIn) {
			goto("/")
		}
	});
</script>

<SkillCardList />
