<Set chips={choices} let:chip filter bind:selected>
  <Chip {chip} touch>
    <Text>{chip}</Text>
  </Chip>
</Set>

<script lang="ts">
  import Chip, { Set, Text } from '@smui/chips';

  let choices = ['★', '★★', '★★★'];
  let selected = ['★', '★', '★'];
</script>

