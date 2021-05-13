import { createRouter, createWebHistory } from 'vue-router'
import Skoon from '@/views/Skoon.vue'
import Evenement from '@/views/Evenement.vue'
import Profil from '@/views/Profil.vue'
import Connexion from '@/views/Connexion.vue'

const routes = [
  {
    path: '/',
    name: 'Skoon',
    component: Skoon
  },

  {
    path: '/Evenement',
    name: 'Evenement',
    component: Evenement
  },

  {
    path: '/Profil',
    name: 'Profil',
    component: Profil
  },

  {
    path: '/Connexion',
    name: 'Connexion',
    component: Connexion
  },

  /*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" / '../views/About.vue')
  }*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
