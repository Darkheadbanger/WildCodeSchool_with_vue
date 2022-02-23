<script setup>
import Form from "./Form.vue";
import Member from "./Member.vue";
import { defineProps, onMounted, ref } from "vue";
defineProps({});
// Je dois passer label dans le component enfant form dans le v-model: "label"
const crewArray = [
  {
    id: 1,
    name: "Eleftheria",
  },
  {
    id: 2,
    name: "Davidthos",
  },
]; 
const label = ref(""); // correpsond a v-model="label"
function getData() {
  console.log("passed 1");
  if (label.value.trim() === "") {
    console.log("passed 2");
    return;
  } else {
    console.log("passe 3");
    console.log({ crewArray });
    console.log("value", label);
    console.log("label values", label.value);
    crewArray.unshift(label.value.trim());
    if (label.value.trim() !== "") {
      label.value = "";
    }
  }

  if (JSON.parse(localStorage.getItem("crew-member")) === null) {
    localStorage.setItem("crew-member", JSON.stringify(crewArray));
  } else {
    localStorage.setItem("crew-member", JSON.stringify(crewArray));
  }
}
onMounted(() => {
  if (localStorage.getItem("crew-member") !== null) {
    let pushCrew = crewArray.unshift(localStorage.getItem("crew-member"));
    console.log(pushCrew);
  }
  if (localStorage.getItem("crew-member") === null) {
    localStorage.setItem("crew-member", JSON.stringify(crewArray));
  }
  // addrCew();
});
</script>

<template>
  <div>
    <!-- New member form -->
    <h2>Ajouter un(e) Argonaute</h2>
    <!-- Form component enfant -->
    <!-- v-label="label" et v-bind ou :label="label" pour créer une propre pour que cela sois transferable à l'enfant -->
    <!--       :label="label"
 -->
    <Form Argonaute="Nom de l'Argonaute" v-model="label" @on-click="getData" />
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
