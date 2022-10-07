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

<div class="card">
	<Card class="card cursor" style="width:300px" on:click={() => setUser(email)}>
		<Content>
			<LayoutGrid>
				<Cell span={10} align="middle">
					<img class="image-icon" alt="" src={userIcon} />
				</Cell>
			</LayoutGrid>
			<LayoutGrid>
				<Cell span={10} align="middle">
					{level}
				</Cell>
			</LayoutGrid>
			<LayoutGrid>
				<Cell span={10} align="middle">
					{name}
				</Cell>
			</LayoutGrid>
		</Content>
	</Card>
</div>

<style>
	.card {
		width: calc((100% - 30px * 1) / 3);
	}
	.image-icon {
		height: 130px;
		width: 130px;
		border-radius: 50%;
		border: 2px solid gray;
	}
</style>
