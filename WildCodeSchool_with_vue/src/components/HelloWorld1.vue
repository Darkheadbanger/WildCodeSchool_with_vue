<script setup>
// Il y a une fonction nommé defineProps qui contient un objet avec un donnée msg qui lui contient
// le type qui doit être passé ici, chaine de charactères et doir être fournie avec la pr
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="greetings">
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
    text-align: left;
  }
}
</style>
