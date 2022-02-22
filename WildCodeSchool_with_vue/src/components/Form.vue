<script setup>
// import { defineProps, onMounted, ref } from "vue";
defineProps({
  // crewArray: {
  //   type: Array,
  //   required: true,
  // },
  addrCew: {
    type: Function,
    required: true,
  },
});
// const crewInput = ref("");
// const crewArray = [
//   {
//     id: 1,
//     name: "Eleftheria",
//   },
// ];
// const label = ref("");
// function addrCew(e) {
//   // label.value = `Don't touch me`;
//   let preventCharge = e.preventDefault();
//   // Si l'input est vide, on ne peut pas l'envoyer
//   if (label.value.trim() === "") {
//     return preventCharge;
//   } else {
//     console.log({ crewArray });
//     console.log("value", label);
//     console.log("label values", label.value);
//     crewArray.unshift(label.value.trim());
//     if (label.value.trim() !== "") {
//       label.value = "";
//     }
//   }
//   localStorage.setItem("crew-member", crewArray);
// }
// onMounted(() => {
//   if (localStorage.getItem("crew-member") !== null) {
//     let pushCrew = crewArray.unshift(localStorage.getItem("crew-member"));
//     console.log(pushCrew);
//   }
//   if (localStorage.getItem("crew-member") === null) {
//     localStorage.setItem("crew-member", crewArray);
//   }
// });
</script>

<template>
  <!-- New member form -->
  <!-- v-on et @ le même -->
  <form @submit.prevent="addrCew(e)" class="new-member-form">
    <label for="addName">{{ Argonaute }}</label>
    <input
      id="addName"
      name="addName"
      type="text"
      autocomplete="off"
      placeholder="Charalampos"
      v-model="label"
    />
    <button
      id="button-add"
      role="button"
      type="submit"
      :disabled="label === ''"
      @click="addrCew"
    >
      Ajouter
    </button>
  </form>
  <!-- Member list -->
</template>

<style scoped lang="scss">
.new-member-form {
  margin: 2em 0 4em 0;
  text-align: center;
  label {
    display: block;
    margin-bottom: 0.5em;
  }
}
#button-add {
  background-color: #f76c6c;
  padding: 0 16px;
  line-height: 30px;
  border-radius: 10px;
  box-shadow: black 4px 4px 0 0;
  color: black;
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    box-shadow: black 2px 2px 0 0;
    transform: translate(2px, 2px);
  }
}
</style>
