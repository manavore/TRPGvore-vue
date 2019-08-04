<template>
  <div>
    <q-card>
      <q-card-section class="bg-negative text-white">
        <div class="text-h5">Santé</div>

        <q-btn-group flat>
          <q-btn
            v-for="(value, index) in points"
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

        <q-btn flat>
          <q-icon
            color="primary"
            left
            name="fas fa-band-aid"
          />
          Soigner
        </q-btn>

        <q-btn flat>
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
      points: [
        3,
        2,
        1,
        0,
        0,
        0,
        0,
      ],
      selected: null,
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
  methods: {
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
