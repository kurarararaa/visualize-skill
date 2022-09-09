<script lang="ts">
	import { skills } from '$lib/skillsData.js';
	import Skill from '$lib/Skill.svelte';
	import { createEventDispatcher } from 'svelte';
	import Chip, { Set, Text } from '@smui/chips';

	const dispatch = createEventDispatcher();

	/* FILTERING skills DATA BASED ON INPUT */
	let filteredSkills:any = [];
	// $: console.log(filteredSkills)

	const filterSkills = () => {
		let storageArr:any = [];
		if (inputValue) {
			skills.forEach((skill) => {
				if (skill.toLowerCase().startsWith(inputValue.toLowerCase())) {
					storageArr = [...storageArr, makeMatchBold(skill)];
				}
			});
		}
		filteredSkills = storageArr;
	};

	/* HANDLING THE INPUT */
	let searchInput:any = ''; // use with bind:this to focus element
	let inputValue = '';

	$: if (!inputValue) {
		filteredSkills = [];
		hiLiteIndex = 0;
	}

	const setInputVal = (skillName:any) => {
		inputValue = removeBold(skillName);
		filteredSkills = [];
		hiLiteIndex = 0;
		// document.getElementById('skill-input').focus();
	};

	const submitValue = () => {
		if (inputValue) {
			console.log(`${inputValue} is submitted!`);
		} else {
			alert("スキル名を入力してください。");
		}
	};

	const makeMatchBold = (str:any) => {
		// replace part of (skill name === inputValue) with strong tags
		let matched = str.substring(0, inputValue.length);
		let makeBold = `<strong>${matched}</strong>`;
		let boldedMatch = str.replace(matched, makeBold);
		return boldedMatch;
	};

	const removeBold = (str:any) => {
		//replace < and > all characters between
		return str.replace(/<(.)*?>/g, '');
		// return str.replace(/<(strong)>/g, "").replace(/<\/(strong)>/g, "");
	};

	/* NAVIGATING OVER THE LIST OF SKILLS W HIGHLIGHTING */
	let hiLiteIndex:number = 0;
	//$: console.log(hiLiteIndex);
	$: hiLitedskill = filteredSkills[hiLiteIndex];

	const navigateList = (e:any) => {
		if (e.key === 'ArrowDown' && hiLiteIndex <= filteredSkills.length - 1) {
			hiLiteIndex === null ? (hiLiteIndex = 0) : (hiLiteIndex += 1);
		} else if (e.key === 'ArrowUp' && hiLiteIndex !== null) {
			hiLiteIndex === 0 ? (hiLiteIndex = filteredSkills.length - 1) : (hiLiteIndex -= 1);
		} else if (e.key === 'Enter') {
			setInputVal(filteredSkills[hiLiteIndex]);
		} else {
			return;
		}
	};

	let choices = ['★', '★★', '★★★'];
	let selectedLevel:any = ['★★'];

	const editProfile = () => {
		dispatch('skillMethod', { value: { inputValue: inputValue, selectedLevel: selectedLevel } });
	};
</script>

<svelte:window on:keydown={navigateList} />

<form autocomplete="off" on:submit|preventDefault={submitValue}>
	<div class="flex center">
		<div class="autocomplete">
			<input
				id="skill-input"
				type="text"
				placeholder="Search Skill Names"
				bind:this={searchInput}
				bind:value={inputValue}
				on:input={filterSkills}
			/>
		</div>

		<div class="submit-button">
			<input type="submit" on:click={() => editProfile()} />
		</div>
	</div>

	<!-- FILTERED LIST OF SKILLS -->
	{#if filteredSkills.length > 0}
		<div class="center suggest">
			<ul id="autocomplete-items-list">
				{#each filteredSkills as skill, i}
					<Skill
						itemLabel={skill}
						highlighted={i === hiLiteIndex}
						on:click={() => setInputVal(skill)}
					/>
				{/each}
			</ul>
		</div>
	{/if}

	<div class="center">
		<Set chips={choices} let:chip filter bind:selected = {selectedLevel}>
			<Chip {chip} touch>
				<Text>{chip}</Text>
			</Chip>
		</Set>
	</div>
</form>

<style>
	.flex {
		display: flex;
	}
	.center {
		display: flex;
		justify-content: center;
	}
	.suggest {
		margin-right: 80px;
	}
	div.autocomplete {
		/*the container must be positioned relative:*/
		position: relative;
		display: inline-block;
		width: 300px;
	}
	input {
		border: 1px solid transparent;
		background-color: #f1f1f1;
		padding: 10px;
		font-size: 16px;
		margin: 0;
	}
	input[type='text'] {
		background-color: #f1f1f1;
		width: 100%;
	}
	input[type='submit'] {
		background-color: DodgerBlue;
		color: #fff;
		margin-left: 25px;
		height: 40px;
	}

	#autocomplete-items-list {
		position: relative;
		margin: 0;
		padding: 0;
		top: 0;
		width: 297px;
		border: 1px solid #ddd;
		background-color: #ddd;
	}
</style>
