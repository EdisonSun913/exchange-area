<template>
  <div id="app">
      <v-header title="交流区"></v-header>
      <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
    data () {
        return {   

        }
    },
    components: {
      'v-header': Header
    }
}
</script>

<style>
html,body,h1,h2,h3,h4,h5,h6,p,ul,ol,li,input{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
}
</style>
