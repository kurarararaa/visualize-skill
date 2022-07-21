<script lang="ts">
	import Chip, { Set, Text } from '@smui/chips';

	let choices = ['★', '★★', '★★★'];
	let selected = ['★', '★', '★'];
</script>

<div class="center">
	<Set chips={choices} let:chip filter bind:selected>
		<Chip {chip} touch>
			<Text>{chip}</Text>
		</Chip>
	</Set>
</div>

<style>
	.center {
		display: flex;
		justify-content: center;
	}
</style>
