<script lang="ts">
	export let userIcon: string;
	export let name: String;
	export let level: String;
</script>

<div class="card">
	<div>
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
<div class="a" />

<style>
	.card {
		background-color: white;
		width: 400pt;
		height: 150pt;
		padding: 20px;
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
