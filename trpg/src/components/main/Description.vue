<template>
  <q-form class="my-card">
    <div class="text-h5">Description</div>

    <q-input
      v-model="name"
      label="Nom du personnage"
      unelevated
      maxlength=30
      class="q-ma-sm"
      @blur="editCharacter({ name })"
    />

    <q-input
      v-for="obj in details"
      v-bind:key="obj.field"
      v-model="obj.description"
      :label="obj.field"
      unelevated
      maxlength=30
      class="q-ma-sm"
      @blur="push()"
    />
  </q-form>
</template>

<style lang="stylus" scoped>
</style>

<script>
import { mapGetters, mapActions } from 'vuex';
import { debounce } from 'quasar';
import api from '../../api/api';

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
      'getCharacterId',
    ]),
  },
  created() {
    this.name = this.getCharacterName;
    this.push = debounce(this.push, 3500);

    setTimeout(async () => {
      try {
        const res = await api.getCharacterP(this.getCharacterId, { withDetails: '1' });
        this.details = res.details;
      } catch (err) {
        console.error(err);
      }
    }, 50);
  },
  methods: {
    ...mapActions('character', [
      'editCharacter',
    ]),
    async push() {
      try {
        await api.patchCharacter(this.getCharacterId, { details: this.details });

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
