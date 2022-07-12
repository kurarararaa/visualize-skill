<div>
  <div class="card-display"> 
    <div class="card-container">
      <Card style="margin: 25px 0px;">
        <Content style="width=95%; border-bottom: 1px dashed grey; margin: 0px 3%"> 
          <LayoutGrid>
            <Cell span={3} align="middle">
              <img class="image-icon" alt="" src="{userIcon}" />
            </Cell>
            <Cell span={3} align="middle">
              <div>
                {userNameRuby}
              </div>
              <div class="name-text">
                {userName}
              </div>
              <div style="font-size: large;">
                No.{userNo}
              </div>
            </Cell>
            <Cell span={6} align="bottom" style="text-align: right; font-size: large;">
              <div>
                {age} 歳
              </div>
              <div>
                {birthDate} 生
              </div>
            </Cell>
          </LayoutGrid>
        </Content>

        <div class="card-list"> 
          <!-- カードリスト -->
          {#each skills as skill}
            <div  class="cardlist-row">
              <SkillCard {...skill}/>
            </div>
          {/each}
        </div> 
      </Card>
    
    </div>
  </div>
</div>

<script lang="ts">
   import Card, {
    Content,
  } from '@smui/card';
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import SkillCard from '$lib/SkillCard.svelte';

  export let userIcon:string;
  export let age:number;
  export let birthDate:String;
  export let userName:String;
  export let userNameRuby:String;
  export let userNo:String;

  // TODO スキルを整形する
  let skills = [
    { name: 'Java', level: '★★☆', msg:'ある程度できる'},
    { name: 'Vue', level: '★★★', msg:'人に教えられる人に教えられる人に教えられる人に教えられる人に教えられる人に教えられる' },
    { name: 'Typescript', level: '★☆☆', msg:'初心者です' }
  ];  
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