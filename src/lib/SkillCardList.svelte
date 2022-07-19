<div>
  <div class="card-display"> 
    <div class="card-container">
      {#await getUserInfo()}
      {:then user}
      <Card style="margin: 25px 0px;">
        <Content style="width=95%; border-bottom: 1px dashed grey; margin: 0px 3%"> 
          <LayoutGrid>
            <Cell span={3} align="middle">
              <img class="image-icon" alt="" src="{user.userIcon}" />
            </Cell>
            <Cell span={3} align="middle">
              <div>
                {user.userNameRuby}
              </div>
              <div class="name-text">
                {user.userName}
              </div>
              <div style="font-size: large;">
                No.{user.userNo}
              </div>
            </Cell>
            <Cell span={6} align="bottom" style="text-align: right; font-size: large;">
              <div>
                {user.age} 歳
              </div>
              <div>
                {user.birthDate} 生
              </div>
            </Cell>
          </LayoutGrid>
        </Content>

        <div class="card-list"> 
          <!-- カードリスト -->
          {#each user.skills as skill}
            <div  class="cardlist-row">
              <SkillCard {...skill}/>
            </div>
          {/each}
        </div> 
      </Card>
      {/await}
    </div>
  </div>
</div>

<script lang="ts">
   import Card, {
    Content,
  } from '@smui/card';
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import SkillCard from '$lib/SkillCard.svelte';
  import selectedUser from "../stores/selectedUser";

  let skills:any = [];
  let user:any;

  // 年齢の計算する
  const ageCalculation = (birthDate: Date, nowDate: Date) => {
    const birthNumber =
      birthDate.getFullYear() * 10000 + (birthDate.getMonth() + 1) * 100 + birthDate.getDate();
    const nowNumber =
      nowDate.getFullYear() * 10000 + (nowDate.getMonth() + 1) * 100 + nowDate.getDate();

    return Math.floor((nowNumber - birthNumber) / 10000);
  };

  const getUserInfo = async function() {
    await selectedUser.subscribe((value) => user = value)
    user.skills.forEach((val: any, index: any) => {
    skills.push({
      name: val,
      level: user.ranks[index],
      msg:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    })
  })

  return {
    userIcon: 'default.png', // TODO 仮設定、後から画像アップロードできるようにしたい
    age: ageCalculation(new Date('1996/06/05'), new Date()),
    birthDate: '1996/06/05',
    userName: user.name,
    userNameRuby: 'xxxxxxx',
    userNo: 'xxxxxx',
    skills: skills
  };
  }

  
</script>

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