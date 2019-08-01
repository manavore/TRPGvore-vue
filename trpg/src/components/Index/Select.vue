<template>
  <q-select
    v-model="selection"
    :options="this.getCharactersNames || ['']"
    label="Personnage"
    @input="onSelect"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SelectCharacter',
  data() {
    return {
      selection: null,
    };
  },
  mounted() {
    this['user/fetchCharacters']();
  },
  computed: {
    ...mapGetters('user', [
      'getCharactersNames',
    ]),
  },
  methods: {
    ...mapActions([
      'user/fetchCharacters',
      'character/loadCharacter',
    ]),
    async onSelect() {
      await this['character/loadCharacter'](this.selection.value)
        .then(() => {
          this.$router.push('/main');
        });
    },
  },
};
</script>
