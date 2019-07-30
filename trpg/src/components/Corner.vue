<template>
  <div class="q-mr-md" v-if="isAuthenticated">
      Connecté en tant que: <b> {{ getUserName }} </b>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('user', [
      'getUserName',
      'isAuthenticated',
    ]),
  },
};
</script>
