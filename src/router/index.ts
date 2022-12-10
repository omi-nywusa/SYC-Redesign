import type { RouteRecordRaw, Router } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

// set progress bar
NProgress.configure({ easing: 'ease', speed: 200 })

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'BaseLayout',
    component: () => import('@/layout/BaseLayout.vue'),
    redirect: '/home',
    // Home
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/HomePage.vue'),
        meta: {
          title: 'home',
          bodyColor: '#BAF1F9',
        },
      },
      // Schools
      {
        path: '/schools',
        name: 'Schools',
        component: () => import('@/views/Schools/SchoolsPage.vue'),
        meta: {
          title: 'schools',
          bodyColor: '#FFA5E1',
        },
      },
      // School - StateCase
      {
        path: '/schools/stateCase',
        name: 'StateCase',
        component: () => import('@/views/Schools/StateCase.vue'),
        meta: {
          title: 'State Your Case',
          bodyColor: '#FFA483',
          activeNav: 'Schools',
        },
      },
      // School - ResultsPage
      {
        path: '/schools/results',
        name: 'ResultsPage',
        component: () => import('@/views/Schools/ResultsPage.vue'),
        meta: {
          title: 'Results',
          bodyColor: '#BAF1F9',
          activeNav: 'Schools',
        },
      },
      // Resources
      {
        path: '/resources',
        name: 'Resources',
        component: () => import('@/views/ResourcesPage.vue'),
        meta: {
          title: 'resources',
          bodyColor: '#FFA483',
        },
      },
      // Login
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/LoginPage.vue'),
        meta: {
          title: 'login',
          bodyColor: '#BAF1F9',
        },
      },
      // Register
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/RegisterPage.vue'),
        meta: {
          title: 'register',
          bodyColor: '#FFA5E1',
        },
      },
    ],
  },
]

const router: Router = createRouter({
  // history mode
  history: createWebHistory(import.meta.env.VITE_BASE),
  routes,
})

router.beforeEach((to) => {
  // set page title
  document.title = (to.meta.title as string) || import.meta.env.VITE_APP_TITLE
  if (!NProgress.isStarted()) NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
