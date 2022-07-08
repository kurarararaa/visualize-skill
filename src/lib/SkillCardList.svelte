<div>
  <div class="card-display"> 
    <div class="card-container">
      <Card style="margin-bottom: 25px;">
        <Content style="width=95%; border-bottom: 1px dashed grey; margin: 0px 3% 25px 3%;"> 
          <LayoutGrid>
            <Cell span={4}>
              <img class="image-icon" src="{user.photoURL}" />
            </Cell>
            <Cell span={4}>
              <div>
                やまだはなこ
              </div>
              <div class="name-text">
                山田花子
              </div>
              <div>
                No.000317
              </div>
            </Cell>
            <Cell span={4}>
              <div>
                30歳
              </div>
              <div>
                1990.7.7生
              </div>
            </Cell>
          </LayoutGrid>
        </Content>

        <div> 
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
    Actions,
    ActionIcons,
  } from '@smui/card';
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import SkillCard from '$lib/SkillCard.svelte';
  import ImageList, {
    Item,
    ImageAspectContainer,
    Image,
    Supporting,
    Label,
  } from '@smui/image-list';
  import authStore from '../stores/authStore';

  let skills = [
    { name: 'Java', level: '★★☆', msg:'ある程度できる'},
    { name: 'Vue', level: '★★★', msg:'人に教えられる人に教えられる人に教えられる人に教えられる人に教えられる人に教えられる' },
    { name: 'Typescript', level: '★☆☆', msg:'初心者です' },
    { name: 'Java', level: '★★☆', msg:'ある程度できる'},
    { name: 'Vue', level: '★★★', msg:'人に教えられる人に教えられる人に教えられる人に教えられる人に教えられる人に教えられる' },
    { name: 'Typescript', level: '★☆☆', msg:'初心者です' },
    { name: 'Java', level: '★★☆', msg:'ある程度できる'},
    { name: 'Vue', level: '★★★', msg:'人に教えられる人に教えられる人に教えられる人に教えられる人に教えられる人に教えられる' },
    { name: 'Typescript', level: '★☆☆', msg:'初心者です' }
  ];  

let user;
authStore.subscribe(value => {
  user = value.user;
});
</script>

<style>
 .cardlist-row {
  margin: 0px 5% 25px 5%;
 }
 .name-text {
  font-size: xx-large;
}
.image-icon {
  border-radius: 50%;
  border: 1px solid gray;
}
 </style>