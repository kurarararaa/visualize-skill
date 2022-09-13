<script lang="ts">
	export let userIcon: string;
	export let name: String;
	export let level: String;
	export let email: string;

	import selectedUser from '../stores/selectedUserEmail';
	import { goto } from '$app/navigation';

	const setUser = (user:string) => {
		$selectedUser = user;
		goto('./user');
	};
</script>

<div class="container">
	<div class="card cursor" on:click={() => setUser(email)}>
		<div class="flex">
			<div>
				<img class="image-icon" alt="" src={userIcon} />
			</div>
			<div class="skill-area">
				<p class="skill">
					{level}
				</p>
			</div>
		</div>
		<div class="name-area">
			<span class="name">
				{name}
			</span>
		</div>
	</div>
</div>

<br />

<style>
	.container {
		display: flex;
		justify-content: center;
	}
	.card {
		background-color: white;
		width: 400pt;
		height: 150pt;
		padding: 20px;
	}
	.cursor {
		cursor: pointer;
	}
	.flex {
		display: flex;
	}
	.skill-area {
		position: relative;
	}
	.skill {
		position: absolute;
		bottom: 0;
		font-size: 20pt;
		margin-bottom: 0px;
	}
	.name-area {
		font-size: 30pt;
	}
	.name {
		padding-left: 15px;
	}
	.image-icon {
		height: 130px;
		width: 130px;
		border-radius: 50%;
		border: 2px solid gray;
	}
</style>
