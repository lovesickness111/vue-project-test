## Set UP Project chưa có jest

Bước 1: tạo Project Vue
Bước 2: npm i @vue/cli-plugin-unit-jest
Bước 3: vue add unit-jest

## Sau khi SetUp, Jest có thể hiểu tất cả các File có extension "spec.js hoặc spec.ts" trong thư mục "/tests/"

## Mỗi file test (file .spec.js) chỉ nên dành cho test 1 component

## Một số khái niệm quan trọng cần nhớ => Vui lòng mở file NewTask.spec.js
 1. import { mount, shallowMount } from "@vue/test-utils"; 
 => mount, shallowMount là 2 hàm quan trọng dùng để tạo ra instance của Vue Component.
 + Mount => tạo ra component với giống vue bình thường, render cả component con (nếu có)
 + shallowMount => tạo ra DUY NHẤT component chỉ định, không render component con để tránh những ảnh hưởng không muốn test

+ VD: const wrapper = mount(NewTask);
    - wrapper hiện tại là 1 đại diện của NewTask.Vue => Ta có thể truy cập tất cả thuộc tính của Component NewTask.Vue
    - wrapper.vm cho phép ta truy cập được vào data, props, methods,... của Component
    - wrapper.html() sẽ trả về chuỗi html khi component được render ra
    - const input = wrapper.find("input.input-task"); => tìm input có class .input-task để thao tác với input
    -  input.setValue("write unit test"); => Set tên task mới là : write unit test
    - wrapper.find("button").trigger("click") => gọi vào sự kiện click của button
    - Tại sao phải có Await, NextTick? => vì những luồng thao tác này bất đồng bộ nên cần phải chờ thao tác thực hiện xong thì ta mới thực thi code tiếp
    - expect => Mong chờ 1 kết quả nào đó. => Nếu (expect = true) thì test case sẽ passed, ngược là thì test case sẽ failed
  
## Những điều bạn sẽ thường xuyên gặp khi viết Unit Test
(1) tạo ra wrapper bằng cách mount hoặc shallowMount
(2) truy cập data, props, function trong Component
(3) thay đối giá trị data, props, function trong Component
(4) find element trên DOM. Check nó có tồn tại hoặc chứa attribute không?
(5) trigger events trên DOM, ví dụ như click vào 1 element
(6) check Component có chứa html element hay không? (gần giống ý 4)
(7) Fake các phụ thuộc (component con, API, methods) để test unit

