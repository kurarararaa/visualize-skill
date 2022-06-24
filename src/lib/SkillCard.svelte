<div class="skill-card-row">
  <LayoutGrid>
      <Cell span={2}>
        <div class="skill-card-cell skill-card-text">{name}</div>
      </Cell>
      <Cell span={2}>
        <div class="skill-card-cell skill-card-text">{level}</div>
      </Cell>
      <Cell span={8}>
        <div class="paper-container">
          <Paper style="background: rgba(103,103,120,0)" elevation={0}>
            <Content>
            {msg}
            </Content>
          </Paper>
        </div>
      </Cell>
  </LayoutGrid>
</div>

<script lang="ts">
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import Paper, { Title, Content } from '@smui/paper';

  export let name:String
  export let level:String
  export let msg:String
</script>

<style>
 .skill-card-cell {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--mdc-theme-on-secondary, black);
  }
.skill-card-row {
  border: solid;
}
.skill-card-text {
  font-size: x-large;
}
</style>
