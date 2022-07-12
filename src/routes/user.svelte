<script context="module" lang="ts">
	import SkillCardList from '$lib/SkillCardList.svelte';

	export const prerender = true;
	export let user:any;

	// TODO 仮設定、後から消す
	let photoURL= "default.png";

	// 年齢の計算する
	const birthdate = "1996/06/05"; 
	const ageCalculation = ( birthDate:Date , nowDate:Date ) => {
		const birthNumber = birthDate.getFullYear() * 10000 
													+ (birthDate.getMonth() + 1 ) * 100 
													+ birthDate.getDate();
		const nowNumber = nowDate.getFullYear() * 10000 
													+ (nowDate.getMonth() + 1 ) * 100 
													+ nowDate.getDate();

		return Math.floor( (nowNumber - birthNumber) / 10000 );
	}

	const age = ageCalculation( new Date(birthdate) , new Date() );
	const userName = "平野加奈子";
	const userNameRuby = "ひらのかなこ";
	const userNo = "000317";

	const userInfo = {
		// 画面遷移するとログイン情報が消えるため一旦コメントアウト
		userIcon: photoURL,
		age: age,
		birthDate:birthdate,
		userName: userName,
		userNameRuby: userNameRuby,
		userNo: userNo

	}

</script>

<SkillCardList {...userInfo}></SkillCardList>