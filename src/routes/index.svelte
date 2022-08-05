<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import { onAuthStateChanged } from "firebase/auth";
	import { auth, db } from "$lib/firebase";
	import authStore from '../stores/authStore';
	import skills from '../stores/skillsStore';
	import users from '../stores/usersStore';
	import { collection, getDocs } from "firebase/firestore";

	onMount(() => {
		onAuthStateChanged(auth, (user) => {
		  if (user) {
		    authStore.set({
					isLoggedIn: true,
					user,
				});
		  } else {
		    authStore.set({
					isLoggedIn: false,
					user: undefined,
				});
		  }
		});
	});

	const fetch = async function() {
		await fetchSkills()
		await fetchUsers()
		console.log($skills)
		goto("/top")
	}

	const fetchSkills = async function() {
		const snapshot = await getDocs(collection(db, 'skills'))
		snapshot.docs.map((doc) => $skills = [...$skills, doc.data()])
	}
	const fetchUsers = async function() {
		const snapshot = await getDocs(collection(db, 'users'))
		snapshot.docs.map((doc) => {
			let data = doc.data()
			data.id = doc.id
			$users = [...$users, data]
		})
	}
</script>

{#if $authStore.isLoggedIn}
	{#await fetch()}{/await}
{/if}

<svelte:head>
	<title>スキル見える化</title>
	<meta name="description" content="要員のスキルを見える化するよ！" />
</svelte:head>

<section>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
