<template>
  <div>
    <div class="text-h5">Histoire du personnage</div>
    <br />
    <p class="text-weight-light">
      Si le background est long, il est recommandé dans le stocker
      dans un outil plus adapté (tel que GDocs).
    </p>
      <q-input
        v-model="text"
        autogrow
        label="Histoire du personnage"
      />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    };
  },
};
</script>
