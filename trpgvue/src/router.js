import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/competence',
      name: 'competence',
      component: () => import(/* webpackChunkName: "about" */ './views/Competence.vue'),
    },
    {
      path: '/histoire',
      name: 'histoire',
      component: () => import(/* webpackChunkName: "about" */ './views/Histoire.vue'),
    },
    {
      path: '/equipement',
      name: 'equipement',
      component: () => import(/* webpackChunkName: "about" */ './views/Equipement.vue'),
    },
    {
      path: '/attribut',
      name: 'attribut',
      component: () => import(/* webpackChunkName: "about" */ './views/Attribut.vue'),
    },
  ],
});
