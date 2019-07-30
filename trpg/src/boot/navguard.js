// import something here

// "async" is optional
export default async ({ router, store }) => {
  router.beforeEach((to, from, next) => {
    // Now you need to add your authentication logic here, like calling an API endpoint
    if (to.path !== '/login' && !store.getters['user/isAuthenticated']) {
      next({ path: '/login' });
    }

    next();
  });
};
