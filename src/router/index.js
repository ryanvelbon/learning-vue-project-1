import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AboutPage from '@/components/AboutPage'
import FruitPage from '@/components/FruitPage'
import CounterPage from '@/components/CounterPage'
import RealtimeEcho from '@/components/RealtimeEcho'
import BackgroundColor from '@/components/BackgroundColor'
import ReverseMsg from '@/components/ReverseMsg'
import TextFormat from '@/components/TextFormat'

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
    },
    {
      path: '/realtime-echo',
      name: 'RealtimeEcho',
      component: RealtimeEcho
    },
    {
      path: '/bg-color',
      name: 'BackgroundColor',
      component: BackgroundColor
    },
    {
      path: '/reverse-message',
      name: 'ReverseMsg',
      component: ReverseMsg
    },
    {
      path: '/text-format',
      name: 'TextFormat',
      component: TextFormat
    }
  ]
})
