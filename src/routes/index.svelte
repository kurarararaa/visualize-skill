<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';

	import { onMount } from 'svelte';
	import { onAuthStateChanged } from "firebase/auth";
	import { auth, db } from "$lib/firebase";
	import authStore from '../stores/authStore';
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

	const fetchSkills = async function() {
		const snapshot = await getDocs(collection(db, 'skills'))
		// snapshot.docs.map((doc) => console.log(doc.data()))
	}
</script>

{#await fetchSkills()}{/await}

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
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
