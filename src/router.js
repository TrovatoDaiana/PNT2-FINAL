import { createRouter, createWebHistory } from 'vue-router'

import Index from './components/index.vue'
import Preguntas from './components/Preguntas.vue'


const routes = [
    //ruta raiz por defecto
  { path: '/', redirect: '/index' },

    //rutas activas de los componentes
  { path: '/index', component: Index},
  { path: '/preguntas', component: Preguntas},

  //rutas no definidas o existentes
  { path: '/:pathMatch(.*)*', redirect: '/index' }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router