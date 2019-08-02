<template>
  <q-layout view="hHh lpR lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="drawer = !drawer"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Manavore RPG Manager
        </q-toolbar-title>

        <div>
          <Corner />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      v-if="this['user/isAuthenticated']"
      content-class="bg-grey-2"
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
    >
      <q-list
        padding
        class="menu-list"
      >
        <q-item
          clickable
          v-ripple
          :to="{ name: 'home' }"
        >
          <q-item-section avatar>
            <q-icon name="fab fa-fort-awesome" />
          </q-item-section>

          <q-item-section>
            Mes personnages
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item
          clickable
          v-ripple
          :disable="!this['character/isCharacterSelected']"
          :to="{ path: '/main' }"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-address-card" />
          </q-item-section>

          <q-item-section>
            Général
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :disable="!this['character/isCharacterSelected']"
          :to="{ path: '/inventory' }"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-briefcase" />
          </q-item-section>

          <q-item-section>
            Inventaire
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :disable="!this['character/isCharacterSelected']"
          :to="{ path: '/skill' }"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-book-dead" />
          </q-item-section>

          <q-item-section>
            Compétences
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :disable="!this['character/isCharacterSelected']"
          :to="{ path: '/story' }"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-scroll" />
          </q-item-section>

          <q-item-section>
            Histoires
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item
          clickable
          v-ripple
          :to="{ path: '/login' }"
          @click="disconnect"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-sign-out-alt" />
          </q-item-section>

          <q-item-section>
            Se déconnecter
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';
import { mapGetters, mapActions } from 'vuex';
import Corner from 'components/Corner.vue';

export default {
  name: 'MyLayout',
  components: {
    Corner,
  },
  data() {
    return {
      drawer: true,
      miniState: true,
    };
  },
  computed: {
    ...mapGetters([
      'user/isAuthenticated',
      'character/isCharacterSelected',
    ]),
  },
  methods: {
    openURL,
    ...mapActions('user', [
      'disconnect',
    ]),
  },
};
</script>

<style>
</style>
