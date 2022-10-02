<template>
  <div id="todo-app">

    <slot name="typeOfTask" />

    <new-task @addNewTask="addTask" />
    <task-list :tasks="tasks"></task-list>

    <slot name="taskDisplay" />

    <div class="scoped">
      <slot name="scoped" v-bind="{description}" />
    </div>

    <slot />



  </div>
</template>

<script>
import TaskList from './../components/TaskList.vue';
import NewTask from './../components/NewTask.vue';

export default {
  name: "homePage",
  components: {
    NewTask,
    TaskList
  },
  data() {
    return {
      tasks: [],
      newTask: { id: 1, text: '', isCompleted: false },
      description: "one task selected"
    }
  },
  methods: {
    addTask(name) {
      this.tasks.push({ id: this.tasks.length + 1, text: name, isCompleted: false })
    }
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

body {
  height: 100vh;
  overflow: hidden;
}

#todo-app {
  display: flex;
  align-items: center;
  background: #d0dcdf;
  padding-top: 30px;
  height: 100%;
  flex-direction: column;
}
</style>