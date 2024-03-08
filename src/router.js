import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './components/view/HomePage.vue';


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    
  ],
});

export default router;
