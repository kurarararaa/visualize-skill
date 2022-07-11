<script context="module" lang="ts">
	import SkillCardList from '$lib/SkillCardList.svelte';
	import { db } from "$lib/firebase";
	import { collection, getDocs } from "firebase/firestore";
	import authStore from '../stores/authStore';
	export const prerender = true;

	let userInfo;
	const fetchUsers = async function() {
		// TODO 実際はここで人単位で検索予定
		const snapshot = await getDocs(collection(db, 'users'))
		snapshot.docs.map((doc) => userInfo.push(doc.data()))
	}

	let user: any;
  authStore.subscribe(value => {
    user = value.user;
  });
	// TODO 仮設定、後から消す
	let photoURL= "favicon.png";

	const prop = {
		// 画面遷移するとログイン情報が消えるため一旦コメントアウト
		// userIcon: user.photoURL,
		userIcon: photoURL,
		userInfo: userInfo
	}
</script>

{#await fetchUsers()}{/await}
<SkillCardList {...prop}></SkillCardList>