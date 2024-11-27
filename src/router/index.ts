import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import ComposicionGo from '../components/ComposicionGo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ComposicionGo,
  },
  {
    path: '/about',
    name: 'About',
    // Lazy loading para mejor rendimiento
    component: () => import('../views/PagesAbouts.vue'),
  },
  {
    path: '/composicion',
    name: 'Composicion',
    // Lazy loading para mejor rendimiento
    component: () => import('../views/ComposicionOption.vue'),
  },
  {
    path: '/view-template',
    name: 'View Template',
    component: () => import('../views/ViewTemplate.vue'),
  },
  {
    path: '/vista-web',
    name: 'Vista Web',
    component: () => import('../views/VistaWeb.vue'),
  },
  {
    path: '/principal',
    name: 'PrinceView',
    component: () => import('../views/PrincengView.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactPage.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue'),
  },

  {
    path: '/prueba-tailwind',
    name: 'Prueba Tailwind',
    component: () => import('../views/PruebaTailwind.vue'),
  },

  // Parent route for handling 404 Not Found
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../modules/common/pages/NoFound404.vue'),

    children: [], // Empty children array to indicate this is a parent route
  },

  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes as RouteRecordRaw[],
})

export default router
