import Vue from 'vue'
import Router from 'vue-router'
import Vnc from '@/components/Vnc'
import Upload from '@/components/Upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vnc',
      component: Vnc
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    }
  ]
})
