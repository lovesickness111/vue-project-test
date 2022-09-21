<template>
    <div class="hello">
        {{msg}}
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    name: "TestPropsAndData",
    props: {
        msg: {
            type: String,
            default: 'this is prop'
        }
    },
    data() {
        return {
            fullName: "TestPropsAndData component"
        }
    },
}
</script>
