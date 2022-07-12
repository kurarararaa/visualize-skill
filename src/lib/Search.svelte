<div class="columns margins">
  <div class="center">
    <Textfield
      class="shaped-outlined"
      variant="outlined"
      bind:value={valueA}
      label="#タグやキーワードで検索"
    >
    </Textfield>

    <div class="center">
      <Proficiency></Proficiency>
    </div>
  </div>

</div>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import Proficiency from '$lib/Proficiency.svelte';


  let valueA = '';


</script>

<style>
  .center{
    text-align: center;
  }
  *
    :global(.shaped-outlined
      .mdc-notched-outline
      .mdc-notched-outline__leading) {
    border-radius: 28px 0 0 28px;
    width: 28px;
  }
  *
    :global(.shaped-outlined
      .mdc-notched-outline
      .mdc-notched-outline__trailing) {
    border-radius: 0 28px 28px 0;
  }
  * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch) {
    max-width: calc(100% - 28px * 2);
  }
  *
    :global(.shaped-outlined.mdc-text-field--with-leading-icon:not(.mdc-text-field--label-floating)
      .mdc-floating-label) {
    left: 16px;
  }
  * :global(.shaped-outlined + .mdc-text-field-helper-line) {
    padding-left: 32px;
    padding-right: 28px;
  }
</style>
