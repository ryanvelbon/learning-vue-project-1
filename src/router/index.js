import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AboutPage from '@/components/AboutPage'
import FruitPage from '@/components/FruitPage'
import CounterPage from '@/components/CounterPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/fruit',
      name: 'FruitPage',
      component: FruitPage
    },
    {
      path: '/counter',
      name: 'CounterPage',
      component: CounterPage
    }
  ]
})
