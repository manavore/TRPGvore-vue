<template>
  <q-page class="flex flex-top justify-center">
    <div class="q-pa-md q-ma-md" style="width:">
      <q-table
        title="Inventaire"
        :data="data"
        :columns="columns"
        row-key="name"
        :selected.sync="selected"
        selection="single"
        hide-bottom
        :filter="filter"
      >
<!-- TOP -->
        <template v-slot:top>
          <div class="text-h5">Inventaire</div>
          <q-space />
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
              <q-popup-edit v-model="props.row.quantity">
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
  </q-page>
</template>

<style lang="stylus" scoped></style>


<script>
export default {
  name: 'PageInventory',
  components: {
  },
  data() {
    return {
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
          name: 'Minuscule pistolet au laser impressionant',
          effect: 'Carbonise les ennemis',
          bonus: '+5 aux tirs, dégâts aggravés',
          quantity: 1,
        },
        {
          name: 'Clé visqueuse métamorphe',
          effect: 'Se glisse partout',
          bonus: '+10 au crochetage',
          quantity: 1,
        },
        {
          name: 'Grenades à graviton',
          effect: 'Attire les ennemis',
          bonus: '',
          quantity: 4,
        },
      ],
    };
  },
};
</script>
