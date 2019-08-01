<template>
  <q-page class="flex flex-center">

    <div
      class="q-pa-md mana-form"
    >

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <h4>Connexion</h4>
        <q-input
          v-model="name"
          label="Nom d'utilisateur"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Ce Champ ne doit pas être vide']"
        />

        <q-input
          :type="isPwd ? 'password' : 'text'"
          v-model="password"
          label="Mot de passe"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Ce Champ ne doit pas être vide']"
        > <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <div>
          <q-btn
            label="Se connecter"
            type="submit"
            unelevated
            :loading="loading"
            color="primary"
          />
          <q-btn
            label="Réinitialiser"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
</div>
  </q-page>
</template>

<style lang="stylus" scoped>
.mana-form
  width: 100%
  max-width: 400px
</style>

<script>
import { mapActions, mapGetters } from 'vuex';


export default {
  data() {
    return {
      name: null,
      password: null,
      isPwd: true,
      accept: false,
      loading: false,
    };
  },
  computed: {
    ...mapGetters('user', [
      'getStatus',
    ]),
  },
  methods: {
    ...mapActions('user', [
      'fetchToken',
    ]),
    async onSubmit() {
      await this.fetchToken({
        name: this.name,
        password: this.password,
      }).then(
        () => {
          if (this.getStatus === 'success') {
            this.$q.notify({
              color: 'green-4', // Todo change color
              textColor: 'white',
              icon: 'fas fa-check-circle',
              message: 'Succés',
            });
            this.$router.push('/');
          } else {
            this.$q.notify({
              color: 'negative', // Todo change color
              textColor: 'white',
              icon: 'fas fa-times-circle',
              message: 'Échec',
            });
          }
        },
      );
    },
    onReset() {
      this.name = null;
      this.password = null;
    },
  },
};
</script>
