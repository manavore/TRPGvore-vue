const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '/login',
        component: () => import('pages/Login.vue'),
      },
      {
        path: '/',
        name: 'home',
        component: () => import('pages/Index.vue'),
      },
      {
        path: '/main',
        component: () => import('pages/Main.vue'),
      },
      {
        path: '/skill',
        component: () => import('pages/Skill.vue'),
      },
      {
        path: '/inventory',
        component: () => import('pages/Inventory.vue'),
      },
      {
        path: '/story',
        component: () => import('pages/Story.vue'),
      },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
