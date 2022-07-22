<script context="module" lang="ts">
	export const prerender = true;
	export let submitValue: String;
</script>

<script lang="ts">
	import Search from '$lib/Search.svelte';
	import Results from '$lib/Results.svelte';
	import skills from '../stores/skillsStore';
	import users from '../stores/usersStore';
	import Proficiency from '$lib/Proficiency.svelte';
	import selectedUser from '../stores/selectedUserEmail';
	import { goto } from '$app/navigation';
	import User from './user.svelte';

	let viewSkills;
	let viewUsers:any = [];

	skills.subscribe((value) => {
		console.log(value);
		viewSkills = value;
	});

	users.subscribe((value) => {
		console.log(value);
		viewUsers = value;
	});

	// function search(){

	// }
	// 検索ワード
	let searchSkill = 'Java'; // 後で置き換え
	let searchLevel = '★'; // 後で置き換え
	let resultList: any = [];

	console.log(submitValue);

	viewUsers.forEach((userInfo) => {
		// console.log(userInfo);
		let skills = userInfo.skills;

		// スキルと
		if (searchSkill === '') {
		}
		let index = skills.findIndex((elem) => elem === searchSkill);

		// if(index === '-1'){
		// 	continue;
		// }

		console.log(index);

		resultList.push({
			userIcon: 'default.png',
			name: userInfo.name,
			email: userInfo.email,
			skill: userInfo.skills[index],
			level: userInfo.ranks[index]
		});
	});

	console.log(resultList);



	const setUser = (user: any) => {
		$selectedUser = user;
		goto('./user');
	}
	


</script>

<div class="center">
	<Search />
	<Proficiency />
	{#each resultList as result}
	<div on:click={() => setUser(result.email)}>
		<Results {...result}></Results>
	</div>
	{/each}
</div>

<style>
	.center {
		text-align: center;
	}
</style>
