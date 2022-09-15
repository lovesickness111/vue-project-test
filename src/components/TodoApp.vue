<template>
  <div class="wrap-list-todo">
    <input
      data-test="input-task"
      type="text"
      class="wrap-input"
      name="input-task"
      v-model="newTaskText"
    />

    <button class="wrap-button" data-test="add-task" @click="addNewTask()">
      Thêm mới
    </button>

    <div
      :class="[task.completed ? 'task-completed' : '']"
      data-test="todo"
      v-for="(task, index) in todos"
      :key="index"
    >
      <input
        type="checkbox"
        data-test="checkbox-task"
        class="wrap-checkbox"
        v-model="task.completed"
      />
      {{ task.text }}
    </div>
  </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
  name: "TodoApp",
  data() {
    return {
      todos: [
        {
          id: 1,
          text: "Learn Vue Testing1",
          completed: false,
        },
      ],
      newTaskText: "",
    };
  },
  methods: {
    addNewTask() {
      this.todos.push({ id: 2, text: this.newTaskText, completed: false });
      this.newTaskText = "";
    },
  },
};
</script>
<style lang="css">
.task-completed {
  text-decoration: line-through;
}
</style>
