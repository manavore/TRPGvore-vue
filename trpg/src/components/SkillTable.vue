<template>
  <div
    class="q-pa-md q-ma-md"
    style="width:100%;"
  >
    <q-table
      title="Compétence"
      flat
      :data="data"
      :columns="columns"
      row-key="name"
      :selected.sync="selected"
      selection="single"
      :filter="filter"
      :loading="loading"
    >
      <!-- TOP -->
      <template  v-slot:top-right>
        <q-input
          debounce="300"
          color="primary"
          v-model="filter"
          label="Recherche"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:top-left>
        <div class="text-h4">Compétences, Talents, ...</div>

        <!-- Form -->
        <q-form
          @submit="addRow"
        >
          <q-input
            v-model="name"
            label="Nom du talent"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Pas vide']"
          />
          <q-select v-model="typeFormSelect" :options="optionsType" label="Type" />
          <br />
          <q-btn label="Ajouter" type="submit" color="positive" class="on-left no-shadow">
          <q-icon
            right
            name="fas fa-plus"
          />
          </q-btn>
        </q-form>
      </template>

      <template v-slot:bottom>
        <q-btn
          class="on-left"
          flat
          label="Supprimer"
          :disable="loading"
          @click="removeRow"
        >
          <q-icon
            right
            color="negative"
            name="far fa-trash-alt"
          />
        </q-btn>
      </template>

      <!-- Body -->
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-checkbox v-model="props.selected" />
          </q-td>
          <q-td
            key="desc"
            :props="props"
          >
            {{ props.row.name }}
            <q-popup-edit
              v-model="props.row.name"
              title="Modifier le nom"
              @save="push()"
            >
              <q-input
                v-model="props.row.name"
                dense
                autofocus
                counter
                type="textarea"
              />
            </q-popup-edit>
          </q-td>
          <q-td
            key="effect"
            :props="props"
          >
            {{ props.row.effect }}
            <q-popup-edit
              v-model="props.row.effect"
              title="Modifier l'effet"
              @save="push()"
            >
              <q-input
                v-model="props.row.effect"
                dense
                autofocus
                type="textarea"
              />
            </q-popup-edit>
          </q-td>
          <q-td
            key="bonus"
            :props="props"
          >
            {{ props.row.bonus }}
            <q-popup-edit
              v-model="props.row.bonus"
              title="Modifier le bonus"
              @save="push()"
            >
              <q-input
                v-model="props.row.bonus"
                dense
                autofocus
                type="textarea"
              />
            </q-popup-edit>
          </q-td>
          <q-td
            key="type"
            :props="props"
          >
            {{ props.row.type }}
            <q-popup-edit v-model="props.row.type" @save="push()">
              <q-select
                v-model="props.row.type"
                dense
                autofocus
                :options="optionsType"
              />
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { debounce } from 'quasar';

export default {
  data() {
    return {
      name: '',
      loading: false,
      filter: '',
      selected: [],
      typeFormSelect: 'Actif',
      optionsType: ['Actif', 'Passif'],
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Nom',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true,
        },
        {
          name: 'effect', align: 'center', label: 'Effet', field: 'effect', sortable: true,
        },
        {
          name: 'bonus', align: 'center', label: 'Bonus', field: 'bonus', sortable: true,
        },
        {
          name: 'type', label: 'Type', field: 'type', sortable: true,
        },
      ],
      data: [
        {
          name: 'Perception',
          effect: 'Vos sens en éveille, vous tentez de pércevoir autour de vous. INSTINCT',
          bonus: '',
          type: 'Actif',
        },
      ],
    };
  },
  computed: {
    ...mapGetters('character', [
      'getEquipements',
    ]),
  },
  created() {
    // Ugly but only way to avoid binding v-model to store
    // this.data = JSON.parse(JSON.stringify(this.getEquipements));

    this.push = debounce(this.push, 5000);
  },
  methods: {
    ...mapActions('character', [
      'editCharacter',
    ]),
    addRow() {
      this.loading = true;
      setTimeout(() => {
        this.data.push({
          name: this.name, effect: '', bonus: '', type: this.typeFormSelect,
        });
        this.loading = false;
        this.push();
      }, 500);
    },
    removeRow() {
      if (this.selected[0] === undefined) return;
      this.loading = true;

      setTimeout(() => {
        // eslint-disable-next-line no-underscore-dangle
        const index = this.selected[0].__index;
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)];
        this.loading = false;
        this.push();
      }, 500);
    },
    async push() {
      // todo change this
      /*
      await this.editCharacter({
        inventory: {
          equipements: this.data,
        },
      }); */
    },
  },
};
</script>
