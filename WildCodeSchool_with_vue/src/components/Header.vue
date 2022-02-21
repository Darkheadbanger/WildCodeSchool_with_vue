<script setup>
// Le script permet d'écrire notre "JS"
// Le fichier HelloWorld.vue va être transferer au fichier App.vue pour qu'il puisse être lu et afficher à la page
// Il y a une fonction nommé defineProps qui contient un objet avec un donnée msg qui lui contient
// le type qui doit être passé ici, chaine de charactères et doir être fournie avec la propriété réquired true
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header>
    <h1>
      <img
        src="./public/imgs/Wild-Code-School-logo.png"
        alt="Wild Code School logo"
      />
      {{ title }}
    </h1>
  </header>
</template>

<style scoped lang="scss">
header {
  background: $background-header;
  text-align: center;
  padding: 2em;

  img {
    max-width: 96px;
  }

  h1 {
    font-size: 2.5em;
  }
}
</style>
