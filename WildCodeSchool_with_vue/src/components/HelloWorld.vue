<script setup>
// Le script permet d'écrire notre "JS"
// Le fichier HelloWorld.vue va être transferer au fichier App.vue pour qu'il puisse être lu et afficher à la page
// Il y a une fonction nommé defineProps qui contient un objet avec un donnée msg qui lui contient
// le type qui doit être passé ici, chaine de charactères et doir être fournie avec la propriété réquired true
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="greetings">
    <!-- le prop se met ici dans la classe green -->
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
