<template>
    <div class="task-item" >
        <input type="checkbox" class="task-checkbox" v-model="taskItem.isCompleted">
        <div :class="{completed: taskItem.isCompleted}">{{taskItem.text}}</div>
    </div>
</template>


<script>
export default {
    props: ['task'],
    mounted() {
        console.log(this.task);
    },
    data: function(){
            return { taskItem :  this.task}
    }
}
</script>

<style scoped>
.completed {
    text-decoration: line-through;
}

.task-item {
    display: flex;
}
.task-checkbox {
    margin-right: 8px;
    cursor: pointer;
}
</style>
    