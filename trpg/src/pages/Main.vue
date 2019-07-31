<template>
    <q-page class="flex flex-center">

      <Dice />
    </q-page>
</template>

<script>
import Dice from 'components/main/Dice.vue';

export default {
  name: 'PageMain',
  components: {
    Dice,
  },
};
</script>
