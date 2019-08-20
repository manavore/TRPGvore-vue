<template>
  <q-form class="my-card">
    <div class="text-h5">Détails</div>

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
import { mapGetters } from 'vuex';
import { debounce } from 'quasar';
import api from '../../api/api';

export default {
  data() {
    return {
      name: '',
      details: [
      ],
    };
  },
  computed: {
    ...mapGetters('character', [
      'getCharacterId',
    ]),
  },
  async created() {
    this.push = debounce(this.push, 10000);

    try {
      const res = await api.getCharacterP(this.getCharacterId, { withDetailsExt: '1' });

      this.details = res.detailsExt;
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    async push() {
      try {
        await api.patchCharacter(this.getCharacterId, { detailsExt: this.details });

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
