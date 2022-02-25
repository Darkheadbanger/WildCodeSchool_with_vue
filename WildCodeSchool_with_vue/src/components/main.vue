<script setup>
import Form from "./Form.vue";
import Member from "./Member.vue";
import { onMounted } from "vue";
// Je dois passer label dans le component enfant form dans le v-model: "label"
const crewArray = [
  { id: 1, name: "Eleftheria" },
  { id: 2, name: "Davidthos" },
];
/*const label = ref(""); // correpsond a v-model="label"*/
function addMember(memberName) {
  if (memberName.trim() === "") {
    return alert("Renseigner un Argonaute");
  } else {
    // get(obtenir) l'id maximale, puis créer une nouvelle id plus grande de 1+.
    // reduce((acc, currentValues))
    console.log("memnerName", memberName);
    let maxArray = crewArray.reduce((prev, current) => {
      // Si l'id courant est plus grand que l'id précedent on retourne l'id courant (ex: 2 > 1 returne 2)
      if (current.id > prev.id) {
        return current;
      } else {
        return prev;
      }
    });
    let newId = maxArray.id + 1;
    // Ajouter le nouveau crew membre dans le tableau cewArray
    crewArray.push({
      id: newId,
      name: memberName.trim(),
    });

    // Pour effacer l'input si il est remplo
    if (memberName !== "") {
      memberName = "";
    }

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
});
</script>

<template>
  <div>
    <h2>Add an Argonaut</h2>
    <!-- form 2 ici -->
    <Form Argonaute="Nom de l'Argonaute" @add-member="addMember"></Form>

    <!-- Member list -->
    <h2>Membres de l'équipage</h2>
    <ul class="member-list">
      <ul>
        <Member
          v-for="crewMember in crewArray"
          :key="crewMember.id"
          :member="crewMember"
        />
      </ul>
    </ul>
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
