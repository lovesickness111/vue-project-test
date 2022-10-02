# Project hướng dẫn sử dụng Unit Test tại Vue

 *** Việc xác định tại sao phải test và test cái gì rất quan trọng. Đầu tiên chúng ta cần phải xác định khi nào viết Unit test cho FrontEnd. ****

1. Khi có 1 hàm nào đó nhạy cảm, có chức năng quan trọng và bạn nhận thấy cần biết chắc nó hoạt động trơn tru. (VD: hàm check quyền trong ứng dụng,...)

2. Khi bạn muốn củ chắc phần code hoạt động đúng. Tuy nhiên để test nó thì bạn phải SetUp môi trường, gọi API, phải login,... Tóm lại là có rất nhiều Side Effect. Bằng việc Fake các phụ thuộc, Unit Test có thể giúp bạn test chức năng cụ thể, tạm thời loại bỏ Side effect

3. Khi chức năng của bạn có nhiều Case, bạn nghĩ là chức năng này dễ xảy ra lỗi => thế thì tốt nhất nên viết Test cho chắc! (Ví dụ: chức năng check quyền,...)

4. Khi bạn cần test function phức tạp, nhận vào nhiều tham số. => Bạn nên viết Unit test với các trường hợp tham số khác nhau. Ví dụ: Tham số Null, undefined,... 

5. Viết test cho các chức năng sử dụng nhiều lần => Lợi ích: sau này có ai sửa code thì Unit test sẽ vẫn đảm bảo chức năng hoạt động đúng

 *** Không phải viết Unit Test FrontEnd khi nào? ****

1. Đừng test hàm của thư viện, framework => vì đơn giản người viết thư viện đã test cho chúng ta rồi!

2. Đa số các trường hợp tại FrontEnd chúng ta nên test Black Box. Tức là cung cấp đầu vào (INPUT) vào và Expect đầu ra (Output) mong muốn! Các trường hợp đơn giản ta nên bỏ qua test logic. Ví dụ: Cần test 1 hàm FindMaxNumber Tìm giá trị MAX trong 1 dãy số. Ta chỉ cần test khi cung cấp đầu vào (INPUT) là dãy số, và đầu ra (OUTPUT) là số lớn nhất. Không cần quan tâm bên trong hàm FindMaxNumber làm gì!

3. Khi viết test, ta cần viết case test ngắn gọn, Clean, dễ đọc, dễ hiểu.

## Set UP Project chưa có jest

Bước 1: tạo Project Vue
Bước 2: npm i @vue/cli-plugin-unit-jest
Bước 3: vue add unit-jest



## Set UP Project này chạy được trên máy tính cá nhân
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
 ** Run debugging **
"test:debug": "node --inspect-brk ./node_modules/@vue/cli-service/bin/vue-cli-service.js test:unit --runInBand",
*Tham khảo tại*
https://www.karltarvas.com/2020/06/16/vue-cli-debugging-jest-unit-tests-with-chrome-node-devtools.html
```


Vấn đề: 
1> Lỗi nhiều trong FrontEnd là lỗi quên check null, check undefined => viết test case và cung cấp các loại đầu vào khác nhau. Nếu đầu vào null thì Unit test sẽ cảnh báo

2> Có thể viết test cho base Components không? => nvcuong1 đã thêm UnitTestHelpers.js


Link Cheat Sheet: https://github.com/dekadentno/vue-unit-testing-cheat-sheet?fbclid=IwAR3yi8r1AE9xF5EoZ24je0SOxpaJwp-88wvXYt0buAx3hwZdjNQ7YurkE6k

Link Project tham khảo: https://github.com/dcrystalj/vue-testing-examples?fbclid=IwAR2Rly0Ccmi9fxVq0pOKrmiKrJj0jaDNYmGxhXs9uLtBtT9hKY021k4qOKo

Link vuet test course: https://github.com/alexjoverm/vue-testing-series/tree/Test-State-Computed-Properties-and-Methods-in-Vue-js-Components-with-Jest

1. hoàn thiện project demo theo đúng chuẩn và tổ chức đào tạo (Món này nhóm mình đang bị trễ Deadline), Co extension nao ho tro check null ko?

2. Bàn về kế hoạch giải ngân giải thưởng nóng từ vòng 1 (2 triệu đồng) => hoa quả + coffe cho mentor

3. Anh đề xuất bầu thêm chức vụ Phó nhóm, phòng trường hợp sắp tới anh có nhiều việc thì Phó nhóm sẽ hỗ trợ => Vote Tuấn Nam (Chốt các biên bản họp, book lịch họp chuyên môn tối đa 2 lần/ tuần, lên ý tưởng slide, giao việc cho anh em,...) . Việt Cường phụ trách triển khai chuyên môn (Đào tạo, hỗ trợ thành viên viết test, dựng doc, video demo, giao việc...)
 4. Bổ sung Destroy trong AfterEach của test suite.

## Config để debug trong VSCode. Thêm file Launch.json

## Với debug, ta có thể: 
1. Chạy 1 hoặc nhiều test suite theo ý thích. 
2. Lọc ra các Test case failed
3. Run test 1 vài file theo ý thích
4. Debug trong VSCode hoặc chrome. Xem biến, xem hàm, luồng chạy,...

{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Jest All Tests",
      "type": "node",
      "request": "launch",
      "runtimeArgs": [
        "--inspect-brk",
        "${workspaceRoot}/node_modules/jest/bin/jest.js",
        "--runInBand"
      ],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    },
    {
      "name": "Jest watch all tests",
      "type": "node",
      "request": "launch",
      "program": "${workspaceRoot}/node_modules/jest/bin/jest.js",
      "args": ["--verbose", "-i", "--no-cache", "--watchAll"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    },

    {
      "type": "node",
      "request": "launch",
      "name": "Jest watch current file",
      "program": "${workspaceFolder}/node_modules/jest/bin/jest",
      "args": [
        "NewTask",
        "--verbose",
        "-i",
        "--no-cache",
        "--watchAll"
      ],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
