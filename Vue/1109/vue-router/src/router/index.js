import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloView from '@/views/HelloView'
import LoginView from '@/views/LoginView'
import NotFound404 from '@/views/NotFound404'
import DogView from '@/views/DogView'

Vue.use(VueRouter)

const isLoggedIn = true

const routes = [
  {
    //django의 url 역할을 해주는 각 component를 정해진 주소로 보내주는것
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // lazy loading 방식 처음에 한번에 로딩하지 않고 사용자가 해당 페이지에 접속할 때 로딩이 된다. 
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/hello/:userName',
    name:'hello',
    component: HelloView,
  },
  {
    path: '/login',
    name:'login',
    component: LoginView,
    beforeEnter(to, from ,next) {
      if(isLoggedIn === true) {
        console.log('이미 로그인 되어있음')
        next({name:'home'})
      }
      else{
        next()
      }
    }
  },
  {
    path:'/404',
    name:'NotFound404',
    component:NotFound404,
  },
  {
    path:'/dog/:breed',
    name: 'dog',
    component: DogView,
  },
  {
    path:'*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   // 로그인 여부
//   const isLoggedIn = false

//   //로그인이 필요한 페이지
//   const authPages = ['hello']
  
//   const isAuthRequired = authPages.includes(to.name)

//   if (isAuthRequired && !isLoggedIn){
//     console.log("login으로 이동")
//     next( { name: 'login'} )
//   }
//   else{
//     console.log("to로 이동")
//     next()
//   }
// })




export default router
