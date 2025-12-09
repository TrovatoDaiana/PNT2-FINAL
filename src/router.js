import { createRouter, createWebHistory } from 'vue-router'

import Converson from './components/Converson.vue'
import Preguntas from './components/Preguntas.vue'


const routes = [
    //ruta raiz por defecto
  { path: '/', redirect: '/conversor' },

    //rutas activas de los componentes
  { path: '/conversor', component: Converson},
  { path: '/preguntas', component: Preguntas},

  //rutas no definidas o existentes
  { path: '/:pathMatch(.*)*', redirect: '/conversor' }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router