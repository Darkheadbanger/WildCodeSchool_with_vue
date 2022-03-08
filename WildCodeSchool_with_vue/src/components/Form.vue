<script setup>
import { defineProps } from "vue";
defineProps({
  Argonaute: { type: String, required: true },
  // addMember: { type: Function, required: true },
});
defineEmits(["addMember"]);
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
      placeholder="Charlampos"
      v-model="memberName"
    />
    <button type="submit" @click.prevent="$emit('addMember', memberName)">
      Add Member
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
