<template>
  <div data-test="post-list">
    <div data-test="post-item" v-for="post in listPostD" :key="post.id">
      <div>{{ post.title }}</div>
    </div>
  </div>
</template>

<script>
// import listPost from "./postList.js"
export default {
  name: "PostItem",
  components: {},
  props: {
    listPost: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  watch: {
    listPost(newVal, oldVal) {
      this.listPostD = newVal;
    }
  },
  data() {
    return {
      listPostD: this.listPost
    }
  }
};
</script>