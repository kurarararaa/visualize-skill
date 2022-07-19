<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Search from '$lib/Search.svelte';
	import Results from '$lib/Results.svelte';
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

	// 検索ワード
	let searchSkill = 'Java';	// 後で置き換え
	let searchLevel = '★'	// 後で置き換え
	let resultList:any = [];

	viewUsers.forEach(userInfo => {
		// console.log(userInfo);
		// let index = userInfo.findIndex(userInfo.skills === searchSkill);
		let index = 1;	// 仮置き

		console.log(index);

		resultList.push({
			name: userInfo.name,
			skill: userInfo.skills[index],
			level: userInfo.ranks[index]
		})
	});


	console.log(resultList);


	


</script>

<div class="center">
	<Search></Search>
	{#each resultList as result}
		<Results {...result}></Results>
	{/each}
</div>

<style>
	.center{
		text-align: center;
	}
</style>
