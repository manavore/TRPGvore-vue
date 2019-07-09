<template>
  <div id="app">
    <el-row>
      <el-col :span="4">
        <Lateralbar />
      </el-col>
      <el-col :span="20">
        <router-view />
      </el-col>
    </el-row>

  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import Lateralbar from '@/components/LateralBar.vue';

export default {
  name: 'App',
  components: {
    Lateralbar,
  },
};
</script>
