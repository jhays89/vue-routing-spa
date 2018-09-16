<template>
  <div id="app">
    <app-header></app-header>
    <hr>
    <router-view></router-view> <!--always rendered - acts as RenderBody() in ASPNET MVC-->
    <router-view name="header-bottom"></router-view> <!--conditional component - can be used for dynamic page layouts-->
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  components: {
    'app-header': Header
  }
}
</script>

