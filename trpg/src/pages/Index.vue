<template>
  <q-page class="flex flex-center">
    <h4>Nouveau personnage</h4>
    <div class="q-pa-md" style="max-width: 400px">

      <q-form
        class="q-gutter-md"
      >
        <q-input
          v-model="name"
          hint="Nom du personnage"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Ce Champ ne doit pas être vide']"
        />

        <div>
          <q-btn label="Ajouter" type="submit" unelevated :loading="loading" color="primary"/>
        </div>
      </q-form>

    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      name: null,
      loading: false,
    };
  },
  methods: {

  },
};
</script>
