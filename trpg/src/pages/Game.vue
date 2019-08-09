<template>
  <q-page class="flex flex-top row q-gutter-xl justify-around" style="padding-top:20px">

      <div class="col-md-2 col-sm-2">
        <Dice />
        <DiceSummary />
      </div>

      <div class="col-md-6 col-sm-6 mana-box q-gutter-sm">
        <Abilities />
      </div>

      <div class="col-md-4 col-sm-4 mana-box">
        <Health />
      </div>
  </q-page>
</template>

<style lang="stylus" scoped>
.mana-box
  width: 100%
  max-width: 390px
</style>

<script>
import Dice from 'components/game/Dice.vue';
import Health from 'components/game/Health.vue';
import Abilities from 'components/game/Abilities.vue';
import DiceSummary from 'components/game/DiceSummary.vue';

export default {
  name: 'PageGame',
  components: {
    Dice,
    Abilities,
    DiceSummary,
    Health,
  },
};
</script>
