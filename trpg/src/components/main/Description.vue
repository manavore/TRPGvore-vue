<template>
  <q-form class="my-card">
    <div class="text-h5">Description</div>

    <q-input
      v-model="name"
      label="Nom du personnage"
      unelevated
      maxlength=30
      @blur="push({ name })"
    />

    <q-input
      v-for="obj in details"
      v-bind:key="obj.field"
      v-model="obj.description"
      :label="obj.field"
      unelevated
      maxlength=30
      @blur="push({ details })"
    />
  </q-form>
</template>

<style lang="stylus" scoped>
</style>

<script>
import { mapGetters, mapActions } from 'vuex';
import { debounce } from 'quasar';

export default {
  data() {
    return {
      name: '',
      details: [],
    };
  },
  computed: {
    ...mapGetters('character', [
      'getCharacterName',
      'getCharacterDetails',
    ]),
  },
  created() {
    this.name = this.getCharacterName;
    this.push = debounce(this.push, 10000);

    // Ugly but only way to avoid binding v-model to store
    this.details = JSON.parse(JSON.stringify(this.getCharacterDetails));
  },
  methods: {
    ...mapActions('character', [
      'editCharacter',
    ]),
    push(change) {
      this.editCharacter(change);
    },
  },
};
</script>
