<template>
    <div class="wrap-input">
        <input data-test="input-task" type="text" class="input-task" name="input-task" v-model="newTaskText" />

        <button class="wrap-button" data-test="add-task" @click="addNewTask()">
            Thêm mới
        </button>

    </div>
</template>

<script>
export default {
    name: 'TaskList',
    data() {
        return {
            newTaskText: ""
        }
    },
    methods: {
        addNewTask() {
            this.$emit('addNewTask',this.newTaskText);
            this.newTaskText = "";
        }
    }
}
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
