<template>
  <q-card class="my-card">
    <q-card-section class="bg-primary text-white">
      <div class="text-h5">Dé</div>
      score:
      <div class="text-h4">{{ this.getValue }}</div>
    </q-card-section>

    <q-card-actions align="right">
      <q-toggle v-model="displaySelect" @input="resetParams" />
      <q-btn flat @click="roll()" label="Lancer" :loading="loading">
        <q-icon right size="1.5em" name="fas fa-dice-d20" />
      </q-btn>
    </q-card-actions>

      <q-card-actions align="left" v-show="displaySelect" >
      <q-select v-model="number" :options="optionsNumber" label="Nombre" style="width:100%" />
    </q-card-actions>

    <q-card-actions align="left" v-show="displaySelect">
      <q-select v-model="kind" :options="optionsKind" label="Type" style="width:100%" />
    </q-card-actions>

  </q-card>
</template>

<style lang="stylus" scoped>
</style>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      loading: false,
      displaySelect: false,
      number: 1,
      optionsNumber: [
        1, 2, 3, 4, 5, 6,
      ],
      kind: 20,
      optionsKind: [
        4, 6, 8, 10, 20, 100,
      ],
    };
  },
  created() {
    this.newDice();
  },
  computed: {
    ...mapGetters('dice', [
      'getValue',
    ]),
  },
  methods: {
    ...mapActions('dice', [
      'newDice',
      'rollDie',
    ]),
    roll() {
      this.loading = true;
      setTimeout(async () => {
        await this.rollDie({ number: this.number, kind: this.kind });
        this.loading = false;
      }, 500);
    },
    resetParams() {
      this.number = 1;
      this.kind = 20;
    },
  },
};
</script>
