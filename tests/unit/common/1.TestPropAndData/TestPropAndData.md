I. Props & Data 

1. Mục tiêu
- Test xem với giá trị truyền vào của Props hoặc giá trị khởi tạo của Data thì Code có chạy đúng dự định không?

2. Phương pháp
- B1: mount component với option truyển vào (prop hoặc data)
- B2: Kiểm tra với (prop hoặc data) truyền vào thì component có nhận được và render theo (prop hoặc data) đúng hay không? 

3. Lưu ý
Có 3 cách Set giá trị cho (prop hoặc data)
- Cách 1: set cùng hàm mount/shallowMount: 
const wrapper = shallowMount(HelloWorld, {
      propsData: { msg: "new message" },
    });

- cách 2: dùng hàm (setProps hoặc setData)  ví dụ: wrapper.setProps({ msg: "new message" }); 
- cách 3: Set thẳng giá trị vào Props hoặc Data (ví dụ: wrapper.vm.propName = "giá trị A")
