<template>
  <div>
    <q-card>
      <q-card-section class="bg-negative text-white">
        <div class="text-h5">Santé
          <q-tooltip :delay="700" anchor="top middle" self="bottom middle">
            Exemples: <br />
            Superficielle: petites blessures, récupération naturelle. <br />
            Létale: poignardé, blessure par balle. Requiert un traitement médicale.  <br />
            Aggravé: retombée nucléaire, ou cause surnaturelle. <br />
          </q-tooltip>
        </div>

        <q-btn-group flat>
          <q-btn
            v-for="(value, index) in damage"
            :key="index"
            :icon="iconSelect(value)"
            stretch
          />
        </q-btn-group>
      </q-card-section>

      <q-card-actions
        align="center"
      >
        <q-select
          v-model="selected"
          :options="options"
          label="Blessure"
          style="width: 100%"
          dense
        />

      </q-card-actions>

      <q-card-actions align="right">

        <q-btn
        flat
        @click="clearDamage()"
        :loading="loading"
        >
          Récupérer
          <q-icon
            color="positive"
            right
            name="fas fa-first-aid"
          />
        </q-btn>


        <q-btn
        flat
        @click="healDamage(selected.value)"
        :loading="loading"
        >
          Soigner
          <q-icon
            color="primary"
            right
            name="fas fa-band-aid"
          />
        </q-btn>

        <q-btn
        flat
        @click="takeDamage(selected.value)"
        :loading="loading"
        >
          Infliger
          <q-icon
            color="negative"
            right
            name="fas fa-burn"
          />
        </q-btn>

      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { debounce } from 'quasar';
import api from '../../api/api';

export default {
  data() {
    return {
      loading: false,
      damage: [
        0,
        0,
        0,
        0,
        0,
      ],
      selected: {
        label: 'Superficielle',
        value: 1,
      },
      options: [
        {
          label: 'Superficielle',
          value: 1,
        },
        {
          label: 'létale',
          value: 2,
        },
        {
          label: 'Aggravé',
          value: 3,
        },
      ],
    };
  },
  created() {
    setTimeout(async () => {
      try {
        const res = await api.getCharacterP(this.getCharacterId, { withHealth: '1' });
        this.damage = res.health;
      } catch (err) {
        console.error(err);
      }
    }, 50);

    this.push = debounce(this.push, 3500);
  },
  computed: {
    ...mapGetters('character', [
      'getHealth',
      'getCharacterId',
    ]),
  },
  methods: {
    takeDamage(change) {
      setTimeout(() => {
        let c = change;
        this.damage = this.damage.map((x) => {
          if (x < c) {
            const delta = c - x;
            c -= delta;
            return x + delta;
          }
          return x;
        });
        this.push();
      }, 50);
    },
    healDamage(change) {
      setTimeout(() => {
        const newPoints = this.damage.filter(x => x !== change);
        while (newPoints.length < this.damage.length) newPoints.push(0);
        this.damage = newPoints;
        this.push();
      }, 50);
    },
    clearDamage() {
      setTimeout(() => {
        const newPoints = this.damage.filter(x => x === 0);
        while (newPoints.length < this.damage.length) newPoints.push(0);
        this.damage = newPoints;
        this.push();
        this.loading = false;
      }, 50);
    },
    iconSelect(val) {
      switch (val) {
        case 3:
          return 'fas fa-radiation';
        case 2:
          return 'fas fa-user-injured';
        case 1:
          return 'fas fa-heartbeat';
        case 0:
        default:
          return 'fas fa-heart';
      }
    },
    async push() {
      this.loading = true;

      try {
        await api.patchCharacter(this.getCharacterId, { health: this.damage });

        this.loading = false;
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
