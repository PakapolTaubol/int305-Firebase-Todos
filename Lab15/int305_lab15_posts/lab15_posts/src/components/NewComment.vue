<script setup>
import { reactive } from "vue";
import { serverTimestamp } from "firebase/firestore";

const emits = defineEmits(["addComment"]);

const props = defineProps({
  postId: {
    type: String,
    require: true,
  },
});

const commentDetail = reactive({
  comment: "",
  email: "",
  name: "",
  stars: 0,
  cmtdate: serverTimestamp(),
});

const clearData = () => {
  commentDetail.comment = "";
  commentDetail.email = "";
  commentDetail.name = "";
  commentDetail.stars = 0;
};

const addNewCommentHandler = () => {
  // if (
  //   commentDetail.user !== "" &&
  //   commentDetail.email !== "" &&
  //   commentDetail.comment !== "" &&
  //   commentDetail.stars !== null
  // ) {
  //   const commentRef = collection(db, "posts", props.postId, "comments");
  //   await addDoc(commentRef, commentDetail);
  //   clearData();
  // } else console.error("Cannot add doc");
  emits("addComment", commentDetail);
  clearData();
};
</script>

<template>
  <div class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
    <div class="mb-4">
      <label for="username" class="block mb-1 text-gray-700">Username:</label>
      <input id="username" type="text" class="input" placeholder="Pakapol" v-model.trim="commentDetail.name" />
    </div>
    <div class="mb-4">
      <label for="email" class="block mb-1 text-gray-700">Email:</label>
      <input id="email" type="email" class="input" placeholder="pakapol@gmail.com" v-model.trim="commentDetail.email" />
    </div>
    <div class="mb-4">
      <label for="stars" class="block mb-1 text-gray-700">Stars:</label>
      <input id="stars" type="number" class="input star-width" min="0" max="5" placeholder="Stars"
        v-model.trim="commentDetail.stars" />
    </div>

    <div class="mb-4">
      <label for="comment" class="block mb-1 text-gray-700">Comment:</label>
      <textarea id="comment" class="input" placeholder="Write your comment here!"
        v-model.trim="commentDetail.comment"></textarea>
    </div>

    <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 w-full rounded-lg uppercase text-lg"
      @click="addNewCommentHandler">
      Submit
    </button>
  </div>
</template>


<style scoped>
.input {
  border: 1px solid #ccc;
  padding: 8px;
  width: 100%;
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out;
}

.star-width {
  width: 30%;
}

.input:focus {
  outline: none;
  border-color: #48bb78;
}

textarea.input {
  min-height: 100px;
  resize: vertical;
}
</style>
