<script context="module" lang="ts">
	export const prerender = true;
	export let returnInputValue: String;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Search from '$lib/Search.svelte';
	import Results from '$lib/Results.svelte';
	import skills from '../stores/skillsStore';
	import users from '../stores/usersStore';
	import authStore from '../stores/authStore';

	onMount(async () => {
		if (!$authStore.isLoggedIn) {
			goto("/")
		}
	});

	let viewSkills;
	let viewUsers: any = [];

	skills.subscribe((value) => {
		console.log(value);
		viewSkills = value;
	});

	users.subscribe((value) => {
		console.log(value);
		viewUsers = value;
	});

	// 検索ワード
	let searchSkill = '';
	let searchLevel: any = [];
	let resultList: any = [];

	function skillMethod(event:any) {
		resultList = [];

		let skills = [];
		let ranks = [];

		searchSkill = event.detail.value.inputValue;
		searchLevel = event.detail.value.selectedLevel;

		viewUsers.forEach((userInfo:any) => {
			skills = userInfo.skills;
			ranks = userInfo.ranks;
			let userIcon = 'default.png';

			if(userInfo.userIcon) {
				userIcon = userInfo.userIcon;
			}

			if(searchLevel == ''){

				let index = skills.findIndex((elem:any) => elem === searchSkill);

				if (index >= 0) {
					resultList.push({
						userIcon: userIcon,
						name: userInfo.name,
						email: userInfo.email,
						skill: userInfo.skills[index],
						level: userInfo.ranks[index]
					});
				}
			} else {
				let skillIndex = skills.findIndex((elem:any) => elem === searchSkill);

				if (searchLevel.includes(ranks[skillIndex])){
					resultList.push({
						userIcon: userIcon,
						name: userInfo.name,
						email: userInfo.email,
						skill: userInfo.skills[skillIndex],
						level: userInfo.ranks[skillIndex]
					});
				}
			}
		});

		console.log(resultList);

	}
	
</script>

<div class="center">
	<Search on:skillMethod={skillMethod} />
	{#each resultList as result}
		<div>
			<Results {...result} />
		</div>
	{/each}
</div>

<style>
	.center {
		text-align: center;
	}
</style>
