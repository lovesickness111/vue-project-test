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
"test:unit-file-only": "vue-cli-service test:unit --testPathPattern=Rege_Tên_File_muốn_test",
"test:unit-suite-only": "vue-cli-service test:unit --testNamePattern=Regex_Test_Suite",

```
Vấn đề: 
1> Lỗi nhiều trong FrontEnd là lỗi quên check null, check undefined => làm thế nào (Tìm extension)

2> Có thể viết test cho base Components không?
=> nvcuong1 đã thêm UnitTestHelpers.js


Link Cheat Sheet: https://github.com/dekadentno/vue-unit-testing-cheat-sheet?fbclid=IwAR3yi8r1AE9xF5EoZ24je0SOxpaJwp-88wvXYt0buAx3hwZdjNQ7YurkE6k

Link Project tham khảo: https://github.com/dcrystalj/vue-testing-examples?fbclid=IwAR2Rly0Ccmi9fxVq0pOKrmiKrJj0jaDNYmGxhXs9uLtBtT9hKY021k4qOKo

Link vuet test course: https://github.com/alexjoverm/vue-testing-series/tree/Test-State-Computed-Properties-and-Methods-in-Vue-js-Components-with-Jest

1. hoàn thiện project demo theo đúng chuẩn và tổ chức đào tạo (Món này nhóm mình đang bị trễ Deadline), Co extension nao ho tro check null ko?

2. Bàn về kế hoạch giải ngân giải thưởng nóng từ vòng 1 (2 triệu đồng) => hoa quả + coffe cho mentor

3. Anh đề xuất bầu thêm chức vụ Phó nhóm, phòng trường hợp sắp tới anh có nhiều việc thì Phó nhóm sẽ hỗ trợ => Vote Tuấn Nam (Chốt các biên bản họp, book lịch họp chuyên môn tối đa 2 lần/ tuần, lên ý tưởng slide, giao việc cho anh em,...) . Việt Cường phụ trách triển khai chuyên môn (Đào tạo, hỗ trợ thành viên viết test, dựng doc, video demo, giao việc...)

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
