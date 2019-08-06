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
export default {
  data() {
    return {
      damage: [
        0,
        0,
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
  computed: {
  },
  methods: {
    takeDamage(change) {
      let c = change;
      this.damage = this.damage.map((x) => {
        if (x < c) {
          const delta = c - x;
          c -= delta;
          return x + delta;
        }
        return x;
      });
    },
    healDamage(change) {
      const newPoints = this.damage.filter(x => x !== change);
      while (newPoints.length < this.damage.length) newPoints.push(0);
      this.damage = newPoints;
    },
    clearDamage() {
      const newPoints = this.damage.filter(x => x === 0);
      while (newPoints.length < this.damage.length) newPoints.push(0);
      this.damage = newPoints;
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
  },
};
</script>
