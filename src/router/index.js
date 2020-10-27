import Vue from 'vue'; // Vue package
import VueRouter from 'vue-router'; // VueRouter package

import Home from '../pages/Home.vue'; // Homepage
import Contact from '../pages/Contact.vue'; // Contact page
import About from '../pages/About.vue'; // About page
import Results from '../pages/Results.vue';

/*
vue-router 
  -- router-view
  -- router-link
*/

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
  },
  {
    path: '/results',
    component: Results,
    name: 'Results'
  }
];

const router = new VueRouter({
  mode: 'history', // mode: 'default'
  routes
});

export default router;
