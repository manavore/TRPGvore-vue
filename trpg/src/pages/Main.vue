<template>
  <q-page class="flex flex-top row q-gutter-xl justify-around" style="padding-top:20px">

      <div class="col-md-2 col-sm-2">
        <Dice />
        <DiceSummary />
      </div>

      <div class="col-md-7 col-sm-7 mana-box q-gutter-sm">
        <Health />
        <Abilities />
      </div>

      <div class="col-md-3 col-sm-3 mana-box">
        <Description />
      </div>
  </q-page>
</template>

<style lang="stylus" scoped>
.mana-box
  width: 100%
  max-width: 450px
</style>

<script>
import Dice from 'components/main/Dice.vue';
import Description from 'components/main/Description.vue';
import Health from 'components/main/Health.vue';
import Abilities from 'components/main/Abilities.vue';
import DiceSummary from 'components/main/DiceSummary.vue';

export default {
  name: 'PageMain',
  components: {
    Dice,
    Description,
    Abilities,
    DiceSummary,
    Health,
  },
};
</script>
