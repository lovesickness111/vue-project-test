<template>
  <div class="post-list-container">
    <button class="button-add" @click="reload">Get posts</button>
    <!-- <ul>
      <li v-for="post in posts" :key="post.id" data-test="post">
        {{ post.title }}
      </li>
    </ul> -->
    <PostItem :listPost="posts"></PostItem>
  </div>
</template>

<script>
import axios from "axios";
import PostItem from "./PostItem.vue"
export default {
  components: { PostItem },
  data() {
    return {
      //posts: [{id: 1,content: "post001"}, {id: 2,content: "post002"}],
      posts: null
    };
  },
  async created() {
    await this.getPosts();
  },
  methods: {
    async getPosts() {
      // get
      this.posts = await axios.get("/api/posts");
   
      
    },
    async reload() {
      // post
      
      this.posts = await axios.default.post("/api/posts", {
          "id": "111"
        });
      
    },
    

  },
};
</script>