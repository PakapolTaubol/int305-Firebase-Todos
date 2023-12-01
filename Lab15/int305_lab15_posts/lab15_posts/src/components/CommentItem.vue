<script setup>
const props = defineProps({
  comment: {
    type: Object,
    required: true,
  },
});

// console.log(props.comment);
</script>

<template>
  <div class="comment">
    <p class="commenter">
      <span class="label">Name : </span><span>{{ comment.name }}</span>
      <span class="label">Stars : </span><span>{{ comment.stars }}</span>
      <span class="label">Date : </span><span>{{ comment.cmtdate ? comment.cmtdate.toDate() : "" }}</span>
      <span class="label">Comment : </span>
    </p>
    <div><span class="pl-8 text-sm">{{ comment.comment }}</span></div>
  </div>
</template>

<style scoped>
.comment {
  margin-left: 10px;
  padding: 5px;
}

.commenter {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 5fr;
  font-size: smaller;
  font-style: italic;
}

.content {
  background-color: rgb(100, 100, 100);
}

.label {
  color: hsla(160, 100%, 37%, 1);
}
</style>
