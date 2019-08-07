<template>
  <div class="q-pa-md" style="width: 100%; max-width: 400px">
    <q-list bordered separator>
      <q-item-label header>Historique des lancés</q-item-label>

      <q-item  v-for="d in dice" :key="d._id" v-ripple>
        <q-item-section bottom>
          <q-item-label>{{ d.value }}</q-item-label>
          <q-item-label caption>{{ d.owner !== null? d.owner.name : '' }}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          {{ d.updatedAt !== null? calcTime(d.updatedAt) : '' }}
        </q-item-section>
      </q-item>

    </q-list>
  </div>
</template>

<script>
import * as moment from 'moment';
import api from '../../api/api';

export default {
  data() {
    return {
      dice: [
        {
          value: [
            5,
          ],
          owner: {
            name: 'a',
          },
          _id: '5d419b5024f36248acc1e609',
          updatedAt: '2019-08-03T12:57:04.051Z',
        },
        {
          value: [
            20,
          ],
          owner: {
            name: 'b',
          },
          _id: '5d419b5824f36248acc1e60a',
          updatedAt: '2019-08-03T12:57:04.051Z',
        },
      ],
    };
  },
  async created() {
    this.dice = await api.getAllDie();
    this.timer();
  },
  methods: {
    calcTime(timestamp) {
      const d = moment().diff(timestamp);

      return moment.duration(d).locale('fr').humanize();
    },
    async timer() {
      this.dice = await api.getAllDie();
      setTimeout(() => this.timer(), 3000);
    },
  },
};
</script>
