
import Startview from './views/start.vue'
import Kitchen from './views/Kitchen.vue'
import Stockview from './views/stockview.vue'
import Vue from 'vue'
import Router from 'vue-router'
import Ordering from './views/Ordering.vue'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      meta: {
        title: 'Babes and Burgers <3',
      },
      name: 'ordering',
      component: Ordering
    },
    {
      path: '/start',
      meta: {
        title: 'Babes and Burgers <3',
      },
      name: 'start view',
      component: Startview
    },
    {
      path: '/kitchen',
      meta: {
        title: 'B&B Staff view',
      },
      name: 'kitchen',
      // route level code-splitting
      // this generates a separate chunk (read.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Kitchen
    },
    {
      path: '/stock',
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
