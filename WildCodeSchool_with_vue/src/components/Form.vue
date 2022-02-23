<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  // Nom de l'Argonaute
  Argonaute: { type: String, required: true },
  getData: { type: Function },
  // Props label pour réccuperer le label dans la function addArray
  modelValue: { type: String, required: true },
});
defineEmits(["update:modelValue"]);

// function onClick() {
//   this.$emit("on-click");
// }
// Je dois passer l'input de l'enfant au parents en utilisant emit car props ne fonctionne que pour parent enfant
</script>

<template>
  <!-- New member form -->
  <!-- v-on et @ le même -->
  <!-- v-on:submit.prevent="getData()" -->
  <form class="new-member-form">
    <label for="addName">{{ Argonaute }}</label>
    <!-- :value="props.label" pour récuperer le label du props qui se trouve dans le component forms -->
    <!-- J'aimerais que cela se connecte et quand on clique le bouton ajouter, va ajouter l'input que l'utilisateur mis dans le tableau addCrew -->
    <input
      id="addName"
      name="addName"
      type="text"
      autocomplete="off"
      placeholder="Charalampos"
      :value="props.modelValue"
    />
    <!-- v-model="label" -->
    <button
      id="button-add"
      role="button"
      type="submit"
      :disabled="label === ''"
      @click.prevent="$emit('onClick')"
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
