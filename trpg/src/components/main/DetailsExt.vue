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
      @blur="push({ detailsExt: details })"
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
        {
          field: 'Expression',
          description: '',
        },
        {
          field: 'Croyances',
          description: '',
        },
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
    async push(change) {
      try {
        await api.patchCharacter(this.getCharacterId, change);
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
