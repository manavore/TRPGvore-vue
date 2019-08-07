<template>
  <q-page class="flex flex-top justify-center">
    <InventoryTable />
  </q-page>
</template>

<style lang="stylus" scoped></style>


<script>
import InventoryTable from 'components/inventory/InventoryTable.vue';

export default {
  name: 'PageInventory',
  components: {
    InventoryTable,
  },
};
</script>
