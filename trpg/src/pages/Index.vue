<template>
  <q-page class="flex flex-center">
    <div
      class="q-pa-md q-ma-md"
      style=""
    >

      <div class="row q-gutter-lg">
        <div
          class="col mana-box"
        >
            <h4>Nouveau personnage</h4>

            <q-form
              @reset="onReset"
              @submit="onSubmit"
              class="q-gutter-md"
            >
              <q-input
                v-model="name"
                hint="Nom du personnage"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Ce Champ ne doit pas être vide']"
              />

              <div>
                <q-btn
                  label="Ajouter"
                  type="submit"
                  unelevated
                  :loading="loading"
                  color="primary"
                />
                <q-btn
                  label="Effacer"
                  type="reset"
                  color="primary"
                  flat
                  class="q-ml-sm"
                />
              </div>
            </q-form>

        </div>

      <div class="col-auto flex flex-center">
        <h4> OU </h4>
      </div>

        <div class="col mana-box"
        >
          <h4>Choisir un personnage</h4>
          <SelectPersonnage />
        </div>

      </div>

    </div>
  </q-page>
</template>

<style lang="stylus" scoped>
.mana-box
  width: 100%
  min-width: 360px
</style>


<script>
import { mapGetters, mapActions } from 'vuex';
import SelectPersonnage from 'components/Index/Select.vue';

export default {
  name: 'PageIndex',
  components: {
    SelectPersonnage,
  },
  data() {
    return {
      name: null,
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
      'newCharacter',
    ]),
    async onSubmit() {
      console.log(this.name);
      await this.newCharacter(this.name);
    },
    onReset() {
      this.name = null;
      this.password = null;
    },
  },
};
</script>
