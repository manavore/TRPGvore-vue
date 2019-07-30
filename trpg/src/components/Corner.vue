<template>
  <div>
    Connecté en tant que: {{ getUserName }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('user', [
      'getUserName',
    ]),
  },
};
</script>
