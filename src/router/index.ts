import { createRouter, createWebHistory } from 'vue-router'
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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
