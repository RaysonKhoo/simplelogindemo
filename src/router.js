import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './components/view/HomePage.vue';
import LoginPage from './components/view/LoginPage.vue';
import DashboardPage from './components/view/DashboardView.vue';
import RegisterPage from './components/view/RegisterPage.vue';

Vue.use(Router);
function isUserLoggedIn() {
  // Replace this with your actual authentication logic
  // For example, you can check a token in sessionStorage
  return sessionStorage.getItem('isAuthenticated') === 'true';
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: DashboardPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/Register',
      name: 'Register',
      component: RegisterPage,
    }
    
  ],
})
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isUserLoggedIn()) {
    // Redirect to login if not authenticated
    next('/login');
  }  else if (to.name === 'Login' && isUserLoggedIn()) {
    // If user is already logged in, redirect to dashboard
    next('/dashboard');
  } else {
    // Proceed to the route
    next();
  }
});

export default router;
