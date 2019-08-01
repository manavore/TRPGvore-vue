<template>
  <q-form class="my-card">
    <div class="text-h5">Description</div>

    <q-input
      v-model="character.name"
      label="Nom du personnage"
      unelevated
      maxlength=30
      @blur="edit({ name: character.name })"
    />

    <q-input
      v-for="obj in character.details"
      v-bind:key="obj.field"
      v-model="obj.description"
      :label="obj.field"
      unelevated
      maxlength=30
      @blur="edit({ details: character.details })"
    />
  </q-form>
</template>

<style lang="stylus" scoped>
</style>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      character: {},
    };
  },
  computed: {
    ...mapGetters('character', [
      'getCharacter',
    ]),
  },
  created() {
    // Pfahaha this is ugly but only way to avoid binding v-model to store
    this.character = JSON.parse(JSON.stringify(this.getCharacter));
  },
  methods: {
    ...mapActions('character', [
      'editCharacter',
    ]),
    edit(change) {
      this.editCharacter(change);
    },
  },
};
</script>
