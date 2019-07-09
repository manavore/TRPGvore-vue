<template>
  <div class="attribut">
    <h1>Attributs du personnage</h1>
    <Dice />
  </div>
</template>

<script>
// @ is an alias to /src
import Dice from '@/components/Attributs/Dice.vue';

export default {
  name: 'attribut',
  components: {
    Dice,
  },
};
</script>
