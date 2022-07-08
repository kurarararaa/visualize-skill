<div>
  <div class="card-display"> 
    <div class="card-container">
      <Card style="margin-bottom: 25px;">
        <Content style="width=95%; border-bottom: 1px dashed grey; margin: 0px 3% 25px 3%;"> 
          <div>
            <ImageList class="my-image-list-standard">
              <Item>
                <ImageAspectContainer>
                  <Image
                    src="..\static\favicon.png"
                  />
                </ImageAspectContainer>
              </Item>
            </ImageList>
          </div>
          <div>
            やまだはなこ
          </div>
          <div>
            山田花子
          </div>
          <div>
            No.000317
          </div>
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
  import SkillCard from '$lib/SkillCard.svelte';
  import ImageList, {
    Item,
    ImageAspectContainer,
    Image,
    Supporting,
    Label,
  } from '@smui/image-list';

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
</script>

<style>
 .cardlist-row {
  margin: 0px 5% 25px 5%;
 }
 </style>