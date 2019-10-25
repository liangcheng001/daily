<template>
  <div id="app">
      <!--<div>-->
        <!--<router-link to="/">首页</router-link>-->
        <!--<router-link to="/write">填写日报</router-link>-->
      <!--</div>-->
      <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
