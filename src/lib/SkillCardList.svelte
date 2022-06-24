<div>
  <div class="card-display"> 
    <div class="card-container">
      <Card style="margin-bottom: 25px;">
        <Content> 
          <div>
          やまだはなこ
        </div>
        <div>
          山田花子
        </div>
        <div>
          No.000317
        </div>
        </Content>
        <Actions>
          <ActionIcons>
              30歳
            </ActionIcons>
          </Actions>
        <Actions>
          <ActionIcons>
            1990.01.25 生
          </ActionIcons>
        </Actions>
      </Card>
    </div>
  </div>
  <!-- カードリスト -->
  {#each skills as skill}
    <div  class="cardlist-row">
      <SkillCard {...skill}/>
    </div>
  {/each}
</div>

<script lang="ts">
   import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
  import SkillCard from '$lib/SkillCard.svelte';

  let skills = [
		{ name: 'Java', level: '★★☆', msg:'ある程度できる'},
		{ name: 'Vue', level: '★★★', msg:'人に教えられる人に教えられる人に教えられる人に教えられる人に教えられる人に教えられる' },
		{ name: 'Typescript', level: '★☆☆', msg:'初心者です' }
	];
</script>

<style>
 .cardlist-row {
    margin-bottom: 25px;
 }
 </style>