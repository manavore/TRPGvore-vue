<template>
  <div
    class="q-pa-md q-ma-md"
    style="width:100%;"
  >
    <q-table
      title="Inventaire"
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
        <div class="text-h4">Inventaire</div>

        <!-- Form -->
        <q-form
          @submit="addRow"
        >
          <q-input
            v-model="name"
            label="Nom de l'objet"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Pas vide']"
          />
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
            key="quantity"
            :props="props"
          >
            {{ props.row.quantity }}
            <q-popup-edit v-model="props.row.quantity" @save="push()">
              <q-input
                v-model="props.row.quantity"
                dense
                autofocus
                type="number"
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
import api from '../../api/api';

export default {
  data() {
    return {
      name: '',
      loading: false,
      filter: '',
      selected: [],
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
          name: 'quantity', label: 'Quantité (unités)', field: 'quantity', sortable: true,
        },
      ],
      data: [
        {
          name: 'Clés de chez soi',
          effect: 'Ouvre la porte',
          bonus: 'Détente et repos',
          quantity: 1,
        },
      ],
    };
  },
  computed: {
    ...mapGetters('character', [
      'getEquipements',
      'getCharacterId',
    ]),
  },
  created() {
    setTimeout(async () => {
      try {
        const res = await api.getCharacterP(this.getCharacterId, { withInventory: '1' });
        this.data = res.inventory.equipements;
      } catch (err) {
        console.error(err);
      }
    }, 50);

    this.push = debounce(this.push, 3500);
  },
  methods: {
    ...mapActions('character', [
      'editCharacter',
    ]),
    addRow() {
      this.loading = true;
      setTimeout(() => {
        this.data.push({
          name: this.name, effect: '', bonus: '', quantity: 1,
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
      try {
        await api.patchCharacter(this.getCharacterId,
          {
            inventory: {
              equipements: this.data,
            },
          });

        this.$q.notify({
          color: 'positive',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Sauvegardé',
        });
      } catch (err) {
        console.error(err);

        this.$q.notify({
          color: 'negative',
          textColor: 'white',
          icon: 'fas fa-times-circle',
          message: 'Échec',
        });
      }
    },
  },
};
</script>
