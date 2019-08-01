<template>
  <q-card class="my-card">
    <q-card-section class="bg-primary text-white">
      <div class="text-h5">Dé</div>
      score:
      <div class="text-h4">{{ this.getValue }}</div>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-btn flat @click="this.rollDie">
        Roll
        <q-icon right size="1.5em" name="fas fa-dice-d20" />
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<style lang="stylus" scoped>
</style>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
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
  },
};
</script>
