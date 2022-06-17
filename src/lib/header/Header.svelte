<TopAppBar variant="static" style="background: rgba(103,103,120,0.25)">
  <Row>
    <Section>
      <Title>スキル見える化</Title>
    </Section>
    <Section align="end" toolbar>
			{#if !isLoggedIn}
      <IconButton on:click={loginWithGoogle} class="material-icons" aria-label="Login"
        >login</IconButton
      >
			{/if}
			{#if isLoggedIn}
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

	let isLoggedIn = false

  async function loginWithGoogle() {
    isLoggedIn = true
		console.log('login')
  }

	async function logout() {
		isLoggedIn = false
		console.log('logout')
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
