<script setup>
// On récupère le fichier TheWelcome.vue
// La fichier HomeView.vue va être transféré à routeur index.js
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <!-- On range dans le HTML main -->
  <main>
    <TheWelcome />
  </main>
</template>
