
import Startview from './views/start'
import Ordering from './views/Ordering'
import Choose_burger from './views/choose_burger'
import Menu_burger from './views/menu_burger'
import Checkout from './views/checkout'
import Kitchen from './views/Kitchen'
import Kitchen_staff from './views/kitchen_staff'
import Stockview from './views/stockview'
import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/start',
      meta: {
        title: 'Babes and Burgers <3',
      },
      name: 'start view',
      component: Startview
    },
    {
      path: '/order',
      meta: {
        title: 'Babes and Burgers <3',
      },
      name: 'order view',
      component: Ordering
    },
    {
      path: '/choose_burger',
      meta: {
        title: 'Babes and Burgers <3',
      },
      name: 'choose_burger',
      component: Choose_burger
    },
    {
      path: '/menu_burger',
      meta: {
        title: 'Babes and Burgers <3',
      },
      name: 'menu_burger',
      // route level code-splitting
      // this generates a separate chunk (read.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Menu_burger
    },
    {
      path: '/checkout',
      meta: {
        title: 'Babes and Burgers <3',
      },
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/kitchen',
      meta: {
        title: 'B&B Staff view <3',
      },
      name: 'kitchen',
      component: Kitchen
    },
    {
      path: '/kitchen_staff',
      meta: {
        title: 'B&B Staff view - Kitchen <3',
      },
      name: 'kitchen_staff',
      component: Kitchen_staff
    },
    {
      path: '/stockview',
      meta: {
        title: 'B&B Staff view - STOCK',
      },
      name: 'stockview',
      component: Stockview
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;
