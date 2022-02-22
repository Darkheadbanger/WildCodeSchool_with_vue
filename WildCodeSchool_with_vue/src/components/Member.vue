<script setup>
defineProps({
  members: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <!-- <div class="member-item">Eleftheria</div> -->
  <div class="member-item">{{ members.name }}</div>
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
