<script context="module" lang="ts">
	export const prerender = true;
	export let returnInputValue: String;
</script>

<script lang="ts">
	import Search from '$lib/Search.svelte';
	import Results from '$lib/Results.svelte';
	import skills from '../stores/skillsStore';
	import users from '../stores/usersStore';
	import selectedUser from '../stores/selectedUserEmail';
	import { goto } from '$app/navigation';
	import User from './user.svelte';

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

	function skillMethod(event) {
		resultList = [];

		let skills = [];
		let ranks = [];

		searchSkill = event.detail.value.inputValue;
		searchLevel = event.detail.value.selectedLevel;

		viewUsers.forEach((userInfo) => {
			skills = userInfo.skills;
			ranks = userInfo.ranks;

			if(searchLevel == ''){

				let index = skills.findIndex((elem) => elem === searchSkill);

				if (index >= 0) {
					resultList.push({
						userIcon: 'default.png',
						name: userInfo.name,
						email: userInfo.email,
						skill: userInfo.skills[index],
						level: userInfo.ranks[index]
					});
				}
			} else {
				let skillIndex = skills.findIndex((elem) => elem === searchSkill);

				if (searchLevel.includes(ranks[skillIndex])){
					resultList.push({
						userIcon: 'default.png',
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
	
	const setUser = (user: any) => {
			$selectedUser = user;
			goto('./user');
		};
</script>

<div class="center">
	<Search on:skillMethod={skillMethod} />
	{#each resultList as result}
		<div on:click={() => setUser(result.email)}>
			<Results {...result} />
		</div>
	{/each}
</div>

<style>
	.center {
		text-align: center;
	}
</style>
