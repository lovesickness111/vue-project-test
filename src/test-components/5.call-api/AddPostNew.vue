<template>
  <div class="edit-post-content">
    <EditorControl @contentEditor="contentEditorF" />
    <button @click="savePost" class="button">Lưu</button>
  </div>
</template>

<script>
import EditorControl from "./EditorControl.vue"
export default {
  components: {
    EditorControl,
  },
  data() {
    return {
        content: null,
    };
  },
  methods: {
    savePost() {
      alert(this.content);
    },
    contentEditorF(value){
        this.content = value;
    }

  },
};
</script>

<style scoped>
.button {
    width: 80px;
    height: 36px;
    background-color: cornflowerblue;
    border: none;
    outline: none;
    border-radius: 7px;
    margin-top: 10px;
    cursor: pointer;
}
</style>