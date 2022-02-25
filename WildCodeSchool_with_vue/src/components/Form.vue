<script setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  // Nom de l'Argonaute
  Argonaute: { type: String, required: true },
});
defineEmits(["add-member"]);
const memberName = ""; // correpsond a v-model="label"
</script>

<template>
  <!-- v-on et @ le même -->
  <form class="new-member-form">
    <label for="addName">{{ Argonaute }}</label>
    <!-- J'aimerais que cela se connecte et quand on clique le bouton ajouter, va ajouter l'input que l'utilisateur mis dans le tableau addCrew -->
    <input
      type="text"
      id="addName"
      name="addName"
      placeholder="Charalampos"
      autocomplete="off" 
      v-model="memberName"
    />
    <!-- :value="props.modelValue" -->
    <!-- v-model="label" -->
    <button
      id="button-add"
      role="button"
      type="submit"
      :disabled="formLabel === ''"
      @click.prevent="$emit('add-member', memberName)"
    >
      Ajouter Membre
    </button>
  </form>
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
