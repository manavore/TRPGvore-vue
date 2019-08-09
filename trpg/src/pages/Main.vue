<template>
  <q-page class="flex flex-top row q-gutter-sm justify-around" style="padding-top:20px">

      <div class="col-md-2 col-sm-5 col-xs-11">
        <Description />
      </div>

      <div class="col-md-2 col-sm-5 col-xs-11">
        <DetailsExt />
      </div>

      <div class="col-md-8 col-sm-11 col-xs-11 mana-box">
        <Background />
      </div>
  </q-page>
</template>

<style lang="stylus" scoped>
.mana-box
  width: 100%
  max-width: 450px
</style>

<script>
import Description from 'components/main/Description.vue';
import Background from 'components/main/Background.vue';
import DetailsExt from 'components/main/DetailsExt.vue';


export default {
  name: 'PageMain',
  components: {
    Description,
    Background,
    DetailsExt,
  },
};
</script>
