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
        <div class="text-h4">{{ modifier(abi.score) }}</div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn-group spread flat>
          <q-btn
            flat
            color="primary"
            dense
            icon="fas fa-minus"
            :disable="lowerBound(abi.score)"
            @click="--abi.score; push()"
          />
          <q-btn
            flat
            color="primary"
            dense
            icon="fas fa-plus"
            :disable="upperBound(abi.score)"
            @click="++abi.score; push()"
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
import { debounce } from 'quasar';
import api from '../../api/api';

export default {
  data() {
    return {
      abilities: [
        {
          name: 'Force',
          score: 11,
        },
        {
          name: 'Endurance',
          score: 11,
        },
        {
          name: 'Agilité',
          score: 11,
        },
        {
          name: 'Précision',
          score: 11,
        },
        {
          name: 'Instinct',
          score: 11,
        },
        {
          name: 'Intelligence',
          score: 11,
        },
        {
          name: 'Empathie',
          score: 11,
        },
        {
          name: 'Volonté',
          score: 11,
        },
        {
          name: 'Arcane',
          score: 1,
        },
      ],
    };
  },
  created() {
    setTimeout(async () => {
      try {
        const res = await api.getCharacterP(this.getCharacterId, { withAbilities: '1' });
        this.abilities = res.abilities;
      } catch (err) {
        console.error(err);
      }
    }, 50);

    this.push = debounce(this.push, 3500);
  },
  computed: {
    ...mapGetters('character', [
      'getCharacterId',
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
    lowerBound(val) {
      return val <= 1;
    },
    upperBound(val) {
      return val >= 30;
    },
    async push() {
      try {
        await api.patchCharacter(this.getCharacterId, { abilities: this.abilities });
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
