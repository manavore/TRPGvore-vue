<template>
  <q-select v-model="selection" :options="this.getCharactersNames" label="Personnage" />
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
  created() {
    this.fetchCharacters();
  },
  computed: {
    ...mapGetters('user', [
      'getCharactersNames',
    ]),
  },
  methods: {
    ...mapActions('user', [
      'fetchCharacters',
    ]),
  },
};
</script>
