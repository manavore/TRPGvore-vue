<template>
  <div class="dice">
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <span>Dé</span>
      </div>
      todo lancer le dé, afficher le score, etc.
    </el-card>
  </div>
</template>


<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>

<script>
export default {
  name: 'Dice',
};
</script>
