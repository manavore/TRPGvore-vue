<template>
  <div class="Lateralbar">
<el-container>
  Manavore Tabletop RPG
</el-container>
        <el-menu
        default-active="2"
        class="el-menu-vertical"
        @open="handleOpen"
        @close="handleClose">

          <router-link to="/general">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span>General</span>
            </el-menu-item>
          </router-link>

          <router-link to="/competence">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span>Compétences</span>
            </el-menu-item>
          </router-link>

          <router-link to="/equipement">
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span>Équipement</span>
            </el-menu-item>
          </router-link>

          <router-link to="/histoire">
            <el-menu-item index="4">
              <i class="el-icon-menu"></i>
              <span>Histoires</span>
            </el-menu-item>
          </router-link>

        </el-menu>

  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-item a:link, a:visited{
  text-decoration: none;
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
