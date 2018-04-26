import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/todo/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Todo
    }
  ]
})
