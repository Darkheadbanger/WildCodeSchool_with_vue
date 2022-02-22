<script setup>
// Le script permet d'écrire notre "JS"
// Le fichier HelloWorld.vue va être transferer au fichier App.vue pour qu'il puisse être lu et afficher à la page
// Il y a une fonction nommé defineProps qui contient un objet avec un donnée msg qui lui contient
// le type qui doit être passé ici, chaine de charactères et doir être fournie avec la propriété réquired true
defineProps({
  Argonaute: {
    type: String,
    required: true,
  },
});
import Form from "./Form.vue";
import Member from "./Member.vue";
</script>

<template>
  <div>
    <!-- New member form -->
    <h2>Ajouter un(e) Argonaute</h2>
    <Form Argonaute="Nom de l'Argonaute" />
    <!-- Member list -->
    <h2>Membres de l'équipage</h2>
    <section class="member-list">
      <div v-for="(members, index) in crewArray" :key="index">
        <Member :members="members" />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.member-list {
  color: red;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  .member-item {
    margin: 2em 0 2em 0;
    position: relative;
    line-height: 3em;
    border-radius: 10px;
    color: white;
    box-shadow: #26394d 0px 20px 30px -10px;
    background-color: #f76c6c;
    text-align: center;
    padding: 0em 7em;
  }
}
</style>
