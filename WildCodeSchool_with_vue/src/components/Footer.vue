<script setup>
// Le script permet d'écrire notre "JS"
// Le fichier HelloWorld.vue va être transferer au fichier App.vue pour qu'il puisse être lu et afficher à la page
// Il y a une fonction nommé defineProps qui contient un objet avec un donnée msg qui lui contient
// le type qui doit être passé ici, chaine de charactères et doir être fournie avec la propriété réquired true
defineProps({
  footer: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <footer>
    <p>{{ footer }}</p>
  </footer>
</template>

<style scoped lang="scss">
footer {
  margin-top: 2em;
  text-align: center;
  color: white;
  background: #f76c6c;
  padding: 0.25em 0;
}
</style>
