<template>
  <q-form class="my-card">
    <div class="text-h5">Description</div>

    <q-input
      v-model="name"
      label="Nom du personnage"
      unelevated
      maxlength=30
      class="q-ma-sm"
      @blur="push({ name })"
    />

    <q-input
      v-for="obj in details"
      v-bind:key="obj.field"
      v-model="obj.description"
      :label="obj.field"
      unelevated
      maxlength=30
      class="q-ma-sm"
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
    async push(change) {
      try {
        await this.editCharacter(change);

        this.$q.notify({
          color: 'positive',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Sauvegardé',
        });
      } catch (err) {
        console.error(err);

        this.$q.notify({
          color: 'negative',
          textColor: 'white',
          icon: 'fas fa-times-circle',
          message: 'Échec',
        });
      }
    },
  },
};
</script>
