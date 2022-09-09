<TopAppBar variant="static" style="background: rgba(103,103,120,0.25)">
  <Row>
    <Section>
      <Title>スキル見える化</Title>
    </Section>
    <Section align="end" toolbar>
			{#if !$authStore.isLoggedIn}
      <IconButton on:click={loginWithGoogle} class="material-icons" aria-label="Login"
        >login</IconButton
      >
			{/if}
			{#if $authStore.isLoggedIn}
      <IconButton on:click={logout} aria-label="Logout"
        ><img class="image-icons" src="{user.photoURL}" /></IconButton
      >
			{/if}
    </Section>
  </Row>
</TopAppBar>

<script>
  import { goto } from '$app/navigation';
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';

	import { signInWithPopup, signOut } from 'firebase/auth';
  import { auth, provider } from "../firebase";
  import authStore from '../../stores/authStore';

  let user;
	authStore.subscribe(value => {
		user = value.user;
	});

  async function loginWithGoogle() {
		signInWithPopup(auth, provider)
		  .then((result) => {
		    const user = result.user;

				authStore.set({
					isLoggedIn: user !== null,
					user,
					firebaseControlled: true,
				});
		  }).catch((error) => {
		    console.log(error);
		  });
  }

	async function logout() {
		await signOut(auth);
    await goto("/")
	}
</script>

<style>
  /* Hide everything above this component. */
  :global(app),
  :global(body),
  :global(html) {
    display: block !important;
    height: auto !important;
    width: auto !important;
    position: static !important;
  }

  .image-icons {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
</style>
