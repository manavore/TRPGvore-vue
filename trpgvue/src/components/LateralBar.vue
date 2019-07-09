<template>
  <div class="Lateralbar">
<el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span>Attributs</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Compétences</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span>Équipement</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span>Histoires</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>

  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  name: 'Lateralbar',
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
