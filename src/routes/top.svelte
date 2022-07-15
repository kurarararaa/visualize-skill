<script context="module" lang="ts">
	export const prerender = true;
	import Results from '$lib/Results.svelte';
</script>

<script lang="ts">
	import Search from '$lib/Search.svelte';
	import skills from '../stores/skillsStore';
	import users from '../stores/usersStore';

	let viewSkills;
	let viewUsers;

	skills.subscribe(value => {
		console.log(value);
		viewSkills = value;
	});

	users.subscribe(value => {
		console.log(value);
		viewUsers = value;
	});
</script>

<div class="center">
	<Search></Search>
</div>

<style>
	.center{
		text-align: center;
	}
</style>
