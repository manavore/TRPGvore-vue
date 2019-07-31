<template>
  <div class="q-mr-md" v-if="isAuthenticated">
      Connecté: <b> {{ getUserName }} </b>
      <q-btn
        color="white"
        flat
        size="sm"
        icon-right="fas fa-sign-out-alt"
        label=""
        @click="logout"
      />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('user', [
      'getUserName',
      'isAuthenticated',
    ]),
  },
  methods: {
    ...mapActions('user', [
      'disconnect',
    ]),
    logout() {
      this.disconnect()
        .then(() => {
          this.$router.push('/login');
        });
    },
  },
};
</script>
