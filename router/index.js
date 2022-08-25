import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import('../views/Login.vue')
    }
  },
  {
    path:'/appointment',
    name:'get-an-appointment',
    component:function () {
      return import('../views/Appointment.vue')
    }
  },
  {
    path:'/appointment',
    name:'patient-list',
    component:function () {
      return import('../components/PatientList.vue')
    }
  },{
    path:'/faq',
  name:'faq',
  component:function () {
    return import('../views/Faq.vue')
  }
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
