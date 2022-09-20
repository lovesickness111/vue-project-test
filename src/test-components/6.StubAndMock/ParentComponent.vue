<template>
    <div class="full-name">
        {{fullName}}

        <div>
            <ChildComponent></ChildComponent>
        </div>
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';
// import { defineComponent } from '@vue/composition-api'

export default {
    name: "ParentComponent",
    data() {
        return {
            fullName: "parent component"
        };
    },
    components: { ChildComponent }
}
</script>