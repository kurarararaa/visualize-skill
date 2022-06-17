<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/header/Header.svelte';
	import '../app.css';

	import { initializeApp } from 'firebase/app';
	import { getAuth, onAuthStateChanged } from "firebase/auth";
	import authStore from '../stores/authStore';

	onMount(() => {
		const firebaseConfig = {
		  apiKey: "AIzaSyCGW0BqhQ0sFwB4WnkJAWiLga1lCGt9imw",
		  authDomain: "to-visualize.firebaseapp.com",
		  projectId: "to-visualize",
		  storageBucket: "to-visualize.appspot.com",
		  messagingSenderId: "831052216957",
		  appId: "1:831052216957:web:541150a91416db4c69cf14"
		};

		initializeApp(firebaseConfig);

		const auth = getAuth();
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
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
