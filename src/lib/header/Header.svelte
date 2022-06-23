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
      <IconButton on:click={logout} class="material-icons" aria-label="Logout"
        >logout</IconButton
      >
			{/if}
    </Section>
  </Row>
</TopAppBar>

<script>
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

  async function loginWithGoogle() {
		signInWithPopup(auth, provider)
		  .then((result) => {
		    const user = result.user;

				authState.set({
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
</style>
