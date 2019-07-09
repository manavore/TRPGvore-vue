<template>
  <div class="general">
    <h1>Attributs du personnage</h1>
    <el-row :gutter="20" type="flex" class="row-bg">

      <el-col :span="8">
        <Dice />
      </el-col>

      <el-col :span="8">
        <Caracteristiques />
      </el-col>

      <el-col :span="8">
        <Sante />
      </el-col>

    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Dice from '@/components/Attributs/Dice.vue';
import Caracteristiques from '@/components/Attributs/Caracteristiques.vue';
import Sante from '@/components/Attributs/Sante.vue';

export default {
  name: 'general',
  components: {
    Dice,
    Caracteristiques,
    Sante,
  },
};
</script>
