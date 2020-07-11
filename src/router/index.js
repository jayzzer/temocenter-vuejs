import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  if (!localStorage.getItem('isAuth')) {
    next();
    return;
  }
  next('/');
};

const ifAuthenticated = (to, from, next) => {
  if (localStorage.getItem('isAuth')) {
    next();
    return;
  }
  next('/login');
};

const routes = [
  // {
  //   path: '*',
  //   name: 'NotFound',
  //   component:,
  //   meta: {
  //     title: 'Страница не найдена',
  //   },
  // }
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: ifAuthenticated,
    meta: {
      title: 'Главная',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: ifNotAuthenticated,
    meta: {
      title: 'Вход',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
