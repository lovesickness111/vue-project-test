# Project hướng dẫn sử dụng Unit Test tại Vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run Unit Test
```
npm run test:unit
```
Vấn đề: 
1> Lỗi nhiều trong FrontEnd là lỗi quên check null, check undefined => làm thế nào (Tìm extension)

2> Có thể viết test cho base Components không?
=> nvcuong1 đã thêm UnitTestHelpers.js


Link Cheat Sheet: https://github.com/dekadentno/vue-unit-testing-cheat-sheet?fbclid=IwAR3yi8r1AE9xF5EoZ24je0SOxpaJwp-88wvXYt0buAx3hwZdjNQ7YurkE6k

Link Project tham khảo: https://github.com/dcrystalj/vue-testing-examples?fbclid=IwAR2Rly0Ccmi9fxVq0pOKrmiKrJj0jaDNYmGxhXs9uLtBtT9hKY021k4qOKo

<template>
    <div>
        {{fullName}}
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    name: "",
    data(){
     return {
        fullName: "child component"
     }   
    },
}
</script>
