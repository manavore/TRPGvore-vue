<template>
  <div class="caracteristiques">
    <el-card
      class="box-card"
      shadow="hover"
    >
      <div
        slot="header"
        class="clearfix"
      >
        <span>Caractéristiques</span>
      </div>
     Force Endurance Habileté Agilité Instinct Intelligence Empathie Volonté
    </el-card>
  </div>
</template>


<style lang="scss" scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
}
</style>

<script>
export default {
  name: 'Caracteristiques',
};
</script>
