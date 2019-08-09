<template>
  <q-page class="flex flex-top justify-center">
    <SkillTable />
  </q-page>
</template>

<script>
import SkillTable from 'components/SkillTable.vue';

export default {
  name: 'PageSkil',
  components: {
    SkillTable,
  },
};
</script>
