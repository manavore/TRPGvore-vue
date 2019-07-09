<template>
  <div class="sante">
    <el-card
      class="box-card"
      shadow="hover"
    >
      <div
        slot="header"
        class="clearfix"
      >
        <span>Santé</span>
      </div>
      <font-awesome-icon icon="burn" />
      <font-awesome-icon icon="heart-broken" />
      <font-awesome-icon icon="heart" />
      <font-awesome-icon icon="heart" />
      <font-awesome-icon icon="heart" />

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
  min-width: 100px;
}
</style>

<script>
export default {
  name: 'Sante',
};
</script>
