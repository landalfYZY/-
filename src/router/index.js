import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/front/main'
import home from '../components/front/home'
import panel from '../components/template/panel'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/panel', name: 'panel', component: panel},
    { path: '/', name: '主页', component: main ,children:[
      {path: '/home', name: '首页', component: home}
    ]}
  ]
})
