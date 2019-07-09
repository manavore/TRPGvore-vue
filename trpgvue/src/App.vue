<template>
  <div id="app">

<el-container>
  <el-aside>
    <Lateralbar />
  </el-aside>
  <el-container>
    <el-header>En-tête à compléter</el-header>
    <el-main><router-view /></el-main>
  </el-container>
</el-container>

  </div>
</template>

<style lang="scss">
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

    .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 60px;
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
