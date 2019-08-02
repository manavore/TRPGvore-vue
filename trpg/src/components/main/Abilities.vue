<template>
  <div class="row q-gutter-sm justify-center">
    <q-card
      class="col-12 col-md-auto col-sm-auto col-xs-6 .mana-box"
      v-for="abi in abilities"
      :key="abi.name"
    >
      <q-card-section class="bg-primary text-white text-center">
        <div class="text-h7">{{ abi.name }}</div>
        <div class="text-h6">{{ abi.score }}</div>
        <div class="text-h5">{{ modifier(abi.score) }}</div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn-group spread>
          <q-btn
            flat
            color="primary"
            dense
            icon="fas fa-minus-square"
          />
          <q-btn
            flat
            color="primary"
            dense
            icon="fas fa-plus-square"
          />
        </q-btn-group>
      </q-card-actions>
    </q-card>
    </div>
</template>

<style lang="stylus" scoped>
.mana-box
  max-width: 65px
</style>


<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      abilities: [],
    };
  },
  created() {
    // Ugly but only way to avoid binding v-model to store
    this.abilities = JSON.parse(JSON.stringify(this.getCharacterAbilities));
  },
  computed: {
    ...mapGetters('character', [
      'getCharacterAbilities',
    ]),
  },
  methods: {
    calcModifier(val) {
      return Math.floor((val - 10) / 2);
    },
    modifier(val) {
      const v = this.calcModifier(val);
      return v > -1 ? `+${v}` : v;
    },
  },
};
</script>
