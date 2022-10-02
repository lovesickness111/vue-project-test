<template>
  <div class="wrap-input">
    <MsInput :input="newTaskText" @valueChange="changeValueInput"></MsInput>

    <button class="wrap-button" data-test="add-task" @click="addNewTask()">
      Thêm mới
    </button>
  </div>
</template>

<script>
import MsInput from "@/components/BaseComponent/MsInput.vue";
export default {
  name: "TaskList",
  components: { MsInput },

  data() {
    return {
      newTaskText: "",
    };
  },
  methods: {
    addNewTask() {
      // eslint-disable-next-line
      // check null value
      if (!this.checkIsNullTask()) {
        // this.unExist.Name = "Task";
        this.emitTask();
        // console.log("log láo");
      } else {
        this.inValidTask();
      }
    },
    checkIsNullTask() {
      return !this.newTaskText || this.newTaskText.trim() == "";
    },
    emitTask() {
      this.$emit("addNewTask", this.newTaskText);
      this.newTaskText = "";
    },
    inValidTask() {
      this.newTaskText = "Task bị rỗng";
    },
    changeValueInput(e) {
      this.newTaskText = e;
    },
  },
};
</script>

<style scoped>
.wrap-input {
  height: 32px;
  width: 50%;
  display: flex;
  align-items: center;
  max-width: 600px;
}

.input-task {
  height: 100%;
  flex-grow: 1;
  margin-right: 16px;
  border-radius: 8px;
  border: none;
  padding: 0px 8px;
}

.wrap-button {
  height: 100%;
  cursor: pointer;
  padding: 0px 16px;
  background: #3085d6;
  border: unset;
  border-radius: 8px;
  color: white;
  font-weight: bold;
}
</style>
