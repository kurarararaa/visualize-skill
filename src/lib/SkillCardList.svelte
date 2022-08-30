<script lang="ts">
	import Card, { Content } from '@smui/card';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import SkillCard from '$lib/SkillCard.svelte';
	import selectedUserEmail from '../stores/selectedUserEmail';
	import usersStore from '../stores/usersStore';
	import Dialog, { Title, Actions } from '@smui/dialog';
	import IconButton from '@smui/icon-button';
	import Button, { Label } from '@smui/button';
	import Fab, { Icon } from '@smui/fab';
	import Textfield from '@smui/textfield';
	import { db } from '$lib/firebase';
	import { updateDoc, doc } from 'firebase/firestore';

	let userAll: any = [];
	let userInfo: any;
	let userDocId: string = '';
	let isOpenEditProfile = false;
	let isOpenEditSkill = false;

	let editSkillName: string = '';
	let editRank: string = '';
	let editMsg: string = '';
	let editUserName: string = '';
	let editBirthDate: string = '';
	let editUserNameRuby: string = '';
	let editUserNo: string = '';

	// 年齢の計算する
	const ageCalculation = (birthDate: Date, nowDate: Date) => {
		const birthNumber =
			birthDate.getFullYear() * 10000 + (birthDate.getMonth() + 1) * 100 + birthDate.getDate();
		const nowNumber =
			nowDate.getFullYear() * 10000 + (nowDate.getMonth() + 1) * 100 + nowDate.getDate();

		return Math.floor((nowNumber - birthNumber) / 10000);
	};

	usersStore.subscribe((users) => {
		users.map((value) => {
			userAll.push(value);
		});
	});

	const getUserInfo = async function () {
		let skills: any[] = [];
		let user: any;

		user = userAll.filter((user: any) => {
			if (user.email === $selectedUserEmail) return true;
		});

		if (user.length == 1) {
			user[0].skills.forEach((val: string, index: any) => {
				skills.push({
					name: val,
					level: user[0].ranks[index],
					msg: '補足があれば右上の編集ボタンから編集してください。'
				});
			});

			userDocId = user[0].id;
			userInfo = {
				userIcon: 'default.png', // TODO 仮設定、後から画像アップロードできるようにしたい
				age:
					'birthDate' in user[0] ? ageCalculation(new Date(user[0].birthDate), new Date()) : '--',
				birthDate: 'birthDate' in user[0] ? user[0].birthDate : '----/--/--',
				userName: user[0].name,
				userNameRuby: 'userNameRuby' in user[0] ? user[0].userNameRuby : 'xxxxxxx',
				userNo: 'userNo' in user[0] ? user[0].userNo : 'xxxxxxx',
				skills: skills
			};
			return userInfo;
		}
	};

	function editSkill(index: number) {
		isOpenEditSkill = true;
		console.log(index);
		editSkillName = userInfo.skills[index].name;
		editRank = userInfo.skills[index].level;
		editMsg = userInfo.skills[index].msg;
	}

	function closeSkillHandler() {
		isOpenEditSkill = false;
	}

	const editProfile = () => {
		isOpenEditProfile = true;
		editUserName = userInfo.userName;
		editBirthDate = userInfo.birthDate;
		editUserNameRuby = userInfo.userNameRuby;
		editUserNo = userInfo.userNo;
	};

	function closeProfileHandler() {
		isOpenEditProfile = false;
	}

	async function updateProfile() {
		// birthdayは空かどうかチェックを行って、age更新とDB更新する必要がある
		const userRef = doc(db, 'users', userDocId);
		updateDoc(userRef, { 
      name: editUserName, 
      userNameRuby: editUserNameRuby,
      userNo: editUserNo,
      birthDate: editBirthDate
     });

		userInfo.name = editUserName;
		userInfo.userNameRuby = editUserNameRuby;
		userInfo.userNo = editUserNo;
		userInfo.birthDate = editBirthDate;

		userInfo.age = ageCalculation(new Date(editBirthDate), new Date());
		// ここで更新処理を行う 更新ができたらそこから値とればいいはず？ UserInfoいらない？
	}
</script>

<div>
	<div class="card-display">
		<div class="card-container">
			{#await getUserInfo() then}
				<Card style="margin: 20px 0px;">
					<Content style="width=95%; border-bottom: 1px dashed grey; margin: 0px 10px;">
						<LayoutGrid>
							<Cell span={3} align="middle">
								<img class="image-icon" alt="" src={userInfo.userIcon} />
							</Cell>
							<Cell span={3} align="middle">
								<div>
									{userInfo.userNameRuby}
								</div>
								<div class="name-text">
									{userInfo.userName}
								</div>
								<div style="font-size: large;">
									No.{userInfo.userNo}
								</div>
							</Cell>
							<Cell span={4} align="bottom" style="text-align: right; font-size: large;">
								<div>
									{userInfo.age} 歳
								</div>
								<div>
									{userInfo.birthDate} 生
								</div>
							</Cell>
							<Cell span={2} align="top">
								<div class="flexy" style="text-align: right;">
									<div class="margins" on:click={() => editProfile()}>
										<Fab mini color="secondary">
											<Icon class="material-icons">edit</Icon>
										</Fab>
									</div>
								</div>
							</Cell>
						</LayoutGrid>
					</Content>

					<div class="card-list">
						<!-- カードリスト -->
						{#each userInfo.skills as skill, i}
							<div class="cardlist-row">
								<!-- <div class="cardlist-row" on:click={() => editSkill(i)}> -->
								<SkillCard {...skill} />
							</div>
						{/each}
					</div>
				</Card>

				<!-- <div class="card-container">
        表示できません。
      </div> -->
			{/await}
		</div>
	</div>
</div>

<Dialog
	bind:open={isOpenEditProfile}
	aria-labelledby="simple-title"
	aria-describedby="simple-content"
	on:SMUIDialog:closed={closeProfileHandler}
>
	<Title id="simple-title">プロフィール編集</Title>
	<!-- <IconButton action="close" class="material-icons">close</IconButton> -->
	<Content id="simple-content" style="width: 300px; margin: 0px 15px;">
		<div style="margin-top: 30px;">
			<Textfield
				class="shaped-outlined"
				variant="outlined"
				bind:value={editUserName}
				label="名前"
			/>
		</div>
		<div style="margin-top: 30px;">
			<Textfield
				class="shaped-outlined"
				variant="outlined"
				bind:value={editUserNameRuby}
				label="ふりがな"
			/>
		</div>
		<div style="margin-top: 30px;">
			<Textfield
				class="shaped-outlined"
				variant="outlined"
				bind:value={editUserNo}
				label="社員番号"
			/>
		</div>
		<div style="margin-top: 30px; margin-bottom: 20px;">
			<Textfield
				class="shaped-outlined"
				variant="outlined"
				bind:value={editBirthDate}
				label="生年月日"
				type="date"
			>
			</Textfield>
		</div>
		<!-- <Button on:click={() => (isOpenEditSkill = true)}>
      <Label>Open Confirmation Dialog</Label>
    </Button> -->
	</Content>
	<Actions>
		<Button on:click={() => updateProfile()}>
			<Label>編集</Label>
		</Button>
	</Actions>
</Dialog>

<Dialog
	bind:open={isOpenEditSkill}
	aria-labelledby="simple-title"
	aria-describedby="simple-content"
	on:SMUIDialog:closed={closeSkillHandler}
>
	<Title id="simple-title">{editSkillName}</Title>
	<IconButton action="close" class="material-icons">close</IconButton>
	<Content id="simple-content">
		og body text?
		<!-- <Button on:click={() => (isOpenEditSkill = true)}>
      <Label>Open Confirmation Dialog</Label>
    </Button> -->
	</Content>
	<Actions>
		<Button>
			<Label>編集</Label>
		</Button>
	</Actions>
</Dialog>

<style>
	.cardlist-row {
		margin: 25px 5% 0px 5%;
	}
	.name-text {
		font-size: xx-large;
		padding-bottom: 5px;
	}
	.image-icon {
		height: 130px;
		width: 130px;
		border-radius: 50%;
		border: 2px solid gray;
	}
	.card-list {
		margin-bottom: 25px;
		overflow-y: scroll;
		height: 600px;
	}
</style>
