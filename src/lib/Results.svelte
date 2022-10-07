<script lang="ts">
	export let userIcon: string;
	export let name: String;
	export let level: String;
	export let email: string;

	import selectedUser from '../stores/selectedUserEmail';
	import { goto } from '$app/navigation';
	import Card, { Content } from '@smui/card';
	import LayoutGrid, { Cell } from '@smui/layout-grid';

	const setUser = (user:string) => {
		$selectedUser = user;
		goto('./user');
	};
</script>

<Card class="card cursor" on:click={() => setUser(email)}>
	<Content>
		<LayoutGrid>
			<Cell span={3} align="middle">
				<img class="image-icon" alt="" src={userIcon} />
			</Cell>
		</LayoutGrid>
		<LayoutGrid>
			<Cell span={3} align="middle">
				{level}
			</Cell>
		</LayoutGrid>
		<LayoutGrid>
			<Cell span={3} align="middle">
				{name}
			</Cell>
		</LayoutGrid>
	</Content>
</Card>

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
