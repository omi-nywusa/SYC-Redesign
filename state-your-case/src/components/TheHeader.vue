<template>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="logo" />
        </router-link>
        <!-- logo text -->
        <router-link to="/">
          <div class="header__logo-text">
            <h2>State Your CASE</h2>
          </div>
        </router-link>
      </div>
      <div class="header__menu">
        <router-link
          v-for="(nav, index) in navList"
          :key="index"
          :class="{
            'header__menu-item--active': nowRouteName == nav.routerName,
          }"
          :to="nav.path"
          class="header__menu-item"
          >{{ nav.name }}</router-link
        >
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const route = useRoute()
const nowRouteName = computed(() => {
  if (route.meta.activeNav) {
    return route.meta.activeNav
  }
  return route.name
})

const navList = [
  {
    name: 'Home',
    path: '/',
    routerName: 'Home',
  },
  {
    name: 'Schools',
    path: '/schools',
    routerName: 'Schools',
  },
  {
    name: 'Resources',
    path: '/resources',
    routerName: 'Resources',
  },
  {
    name: 'Login',
    path: '/login',
    routerName: 'Login',
  },
  {
    name: 'Sign Up',
    path: '/register',
    routerName: 'Register',
  },
]
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: #ffffff;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 22px 0 10px;
    height: 100px;
    .header__logo {
      display: flex;
      align-items: center;
      img {
        width: 89px;
        height: 89px;
      }
      a {
        text-decoration: none;
        color: #4e4e4e;
      }
      &-text {
        margin-left: 16px;
        h2 {
          font-size: 25px;
          line-height: 31px;
          font-weight: 500;
        }
      }
    }
    .header__menu {
      display: flex;
      margin-top: 15px;
      &-item {
        margin-left: 42px;
        font-family: 'Archivo';
        text-decoration: none;
        font-size: 20px;
        line-height: 22px;
        font-weight: 500;
        color: #4e4e4e;
        &::after {
          content: '';
          display: block;
          // margin: 0 auto;
          margin-top: 12px;
          width: 0;
          height: 4px;
          background-color: #f68358;
          transition: width 0.3s;
          position: relative;
          left: -10%;
        }
        &:hover::after {
          width: 120%;
        }
        &--active {
          color: #f68358;
          &::after {
            width: 120%;
          }
        }
      }
    }
  }
}
</style>
