## Cần kiển tra những gì với việc test gọi api

- mock dữ liệu kết quả trả về như chúng ta mong muốn
- mục đính chính vẫn là kiểm tra tính đúng của dữ liệu và việc render lên giao diện có chính xác hay không(nếu có)

## ví dụ thực tế cho 1 case test gọi api

- Tôi có màn hình danh sách bài viết, danh sách bài viết được gọi bằng phương thức GET với đường dẫn "/api/getAll". Việc đầu tiên cần làm là đảm bảo nếu gọi api thành công thì màn hình danh sách bài viết phải được hiển thị đúng với mong muốn.

- Cụ thể các bước viết test như sau: 
1. Mock dữ liệu đầu vào như tôi mong muốn
  const mockPostList = [
    { id: 1, content: "bài viết số 01" },
    { id: 2, content: "bài viết số 02" },
  ];
 tôi dùng axios cho việc all api jest hỗ trợ cú pháp như sau:
 jest.spyOn(axios, "get").mockResolvedValue(mockPostList);

2. Bạn cần biết được khi nào api được gọi, sau đó kiểm tra có thực sự gọi api hay không:
    // call 1 lần
    expect(axios.get).toHaveBeenCalledTimes(1);
    // call đến đường dẫn này hay không?
    expect(axios.get).toHaveBeenCalledWith('/api/getAll')
    
    // chờ giao diện được render xong
    await nextTick();
3. Kiểm tra giao diện có được render đúng như dữ liệu tôi đã moc hay chưa?
     // mã html của tôi như sau
        // posts chính là dữ liệu call api tôi đã mock ở trên
       <li v-for="post in posts" :key="post.id" data-test="post">
        {{ post.content }}
      </li>
    // bạn có thể log ra để xem hoặc dùng debug
    console.log(wrapper.html());
    expect(wrapper.findAll('[data-test="post"]')).toHaveLength(2)
    
    - Kiểm tra giao diện:
        expect(posts.at(0).text()).toContain('bài viết số 01')
        expect(posts.at(1).text()).toContain('bài viết số 02')


4. Tương tự với các phương thức khác: xem tại file CallApiPostListMock.spec.js
5. Lưu ý: 
- sau khi dùng xong mock chúng ta cần phải clear Mocks và Modules đi:
          jest.resetModules();
          jest.clearAllMocks();
- Khi mock API cần phải dùng switch case theo URL (xem ví dụ 2)