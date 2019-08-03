<template>
    <q-page class="flex flex-center">
      <DiceSummary />
    </q-page>
</template>

<script>
import DiceSummary from 'components/main/DiceSummary.vue';

export default {
  name: 'PageInventory',
  components: {
    DiceSummary,
  },
};
</script>
