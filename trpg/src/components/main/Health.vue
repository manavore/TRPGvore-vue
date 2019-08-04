<template>
  <div>
    <q-card>
      <q-card-section class="bg-negative text-white">
        <div class="text-h5">Santé</div>

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
          <q-icon
            color="positive"
            left
            name="fas fa-first-aid"
          />
          Récupération
        </q-btn>


        <q-btn
        flat
        @click="healDamage(selected.value)"
        >
          <q-icon
            color="primary"
            left
            name="fas fa-band-aid"
          />
          Soigner
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
        3,
        2,
        1,
        0,
        0,
        0,
        0,
      ],
      selected: {
        label: 'Légère',
        value: 1,
      },
      options: [
        {
          label: 'Légère',
          value: 1,
        },
        {
          label: 'Léthale',
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
      this.takeDamage(change - 1);
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
