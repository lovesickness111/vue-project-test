<template>
  <div class="post-list-container">
    <button @click="getPosts">Get posts</button>
    <!-- <ul>
      <li v-for="post in posts" :key="post.id" data-test="post">
        {{ post.title }}
      </li>
    </ul> -->
    <PostItem ></PostItem>
  </div>
</template>

<script>
import axios from "axios";
import PostItem from "./PostItem.vue"
export default {
  components: {PostItem},
  data() {
    return {
      //posts: [{id: 1,content: "post001"}, {id: 2,content: "post002"}],
      posts: null
    };
  },
  async created(){
    await this.getPosts();
  },
  methods: {
    async getPosts() {
      // get
      this.posts = await axios.get("/api/posts");
      // post
      //this.posts = await axios.post("/api/posts", {"id": "111"});
    },
    
  },
};
</script>