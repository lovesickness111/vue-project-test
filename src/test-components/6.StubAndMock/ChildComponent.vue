<template>
    <div class="full-name-child">
        {{fullName}}
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ChildComponent",
    data() {
        return {
            fullName: "child component"
        }
    },
    async mounted() {
        // some fake API
        const res = await axios.get('/someAPI');
        
        this.afterGetAPI(res);
    },
    methods:{
        afterGetAPI(res){
            this.fullName = res.data ? res.data : "text default";
        }
    }
}
</script>
