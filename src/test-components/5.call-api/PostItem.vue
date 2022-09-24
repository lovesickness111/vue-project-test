<template>
  <div data-test="post-item">
    <div v-for="post in listPostD" :key="post.id">
        <div>{{ post.content }}</div>
    </div>
  </div>
</template>

<script>
import listPost from "./postList.js"
export default {
  name: "PostItem",
  components: {},
  props: {
    // listPost: {
    //   type: Array,
    //   default: function () {
    //     return [];
    //   },
    // },
  },
  data() {
    return {
        listPostD: listPost
    }
  }
};
</script>