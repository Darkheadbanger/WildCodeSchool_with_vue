<script setup>
// vue-router est la fichier index.js ou se trouve le fichier HomeView.vue
// qui comprte le fichier TheWelcome.vue
// import { RouterLink, RouterView } from "vue-router";
// Le fichier HelloWorld
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";

// import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <div>
    <header>
      <!-- <img
        src="./assets/Wild-Code-School-logo.png"
        alt="Wild Code School logo"
      /> -->
      <Header title=" Les Argonautes" />
    </header>
    <main>
      <Main />
    </main>
    <Footer footer="Réalisé par Jason en Anthestérion de l'an 515 avant JC" />
  </div>
</template>

<style lang="scss">
/* Style pour le CSS, je vais utiliser scss avec lang="scss" pas de scope ici
Parcontre on peut utiliser le scope en dehors de App.vue par exemple dans components pu views
*/
// @import "@/assets/base.css";

/* Button add */
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  box-sizing: border-box;
  margin: 0;
  font-family: "Roboto", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto", sans-serif;
  text-align: center;
}

textarea {
  font-family: "Roboto", sans-serif;
}
header {
  background: #f4f4f4;
  text-align: center;
  padding: 2em;
}
main {
  max-width: 960px;
  margin: 0 auto;
}
/* Jusqu'ici */
</style>
