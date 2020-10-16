import Vue from 'vue'; // Vue package
import VueRouter from 'vue-router'; // VueRouter package
import Home from '../pages/Home.vue'; // Homepage
import Contact from '../pages/Contact.vue'; // Contact page
import About from '../pages/About.vue'; // About page

Vue.use(VueRouter); // Integrating vue-router with vue package

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/about',
    component: About,
    name: 'About'
  },
  {
    path: '/contact',
    component: Contact,
    name: 'Contact'
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
