<template>
  <q-page class="flex flex-center">
    <div class="row q-gutter-xl">

      <div class="col-auto mana-box">
        <Dice />
      </div>

      <div class="col-auto mana-box">
        <Description />
      </div>

    </div>
  </q-page>
</template>

<style lang="stylus" scoped>
.mana-box
  width: 100%
  max-width: 350px
</style>

<script>
import Dice from 'components/main/Dice.vue';
import Description from 'components/main/Description.vue';

export default {
  name: 'PageMain',
  components: {
    Dice,
    Description,
  },
};
</script>
