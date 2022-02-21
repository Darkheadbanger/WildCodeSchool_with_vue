<script setup>

</script>

<template>
  <main>
    <!-- New member form -->
    <h2>Ajouter un(e) Argonaute</h2>
    <form class="new-member-form">
      <label for="addName">Nom de l&apos;Argonaute</label>
      <input
        id="addName"
        name="addName"
        type="text"
        placeholder="Charalampos"
      />
      <button id="button-add" role="button" type="submit">Ajouter</button>
    </form>

    <!-- Member list -->
    <h2>Membres de l'équipage</h2>
    <section class="member-list"></section>
  </main>
</template>

<style scoped lang="scss">
main {
  max-width: 960px;
  margin: 0 auto;
}
.member-list {
  color: $member-text-color;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  .member-item {
    margin: 2em 0 2em 0;
    position: relative;
    line-height: 3em;
    border-radius: 10px;
    color: $name-text-color;
    @include nameShadow;
    background-color: $name-background;
    text-align: center;
    padding: 0em 7em;
  }
}
</style>
