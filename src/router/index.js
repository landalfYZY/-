import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/front/main'
import home from '../components/front/home'
import panel from '../components/template/panel'
import bmain from '../components/back/main'
import taskAdd from '../components/back/taskAdd'
import bregister from '../components/back/register'
import company from '../components/back/company'
import uapply from '../components/front/register'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/panel', name: 'panel', component: panel},
    { path: '/', name: '主页', component: main ,children:[
      {path: '/home', name: '首页', component: home},
      {path: '/uapply', name: '注册', component: uapply}
    ]},
    {path: '/bregister', name: '公司注册', component: bregister},
    {path:'/bmain',name:'后台主页',component:bmain,children:[
      {path: '/taskAdd', name: '新增任务', component: taskAdd},
      {path: '/company', name: '公司列表', component: company}
    ]}
  ]
})
