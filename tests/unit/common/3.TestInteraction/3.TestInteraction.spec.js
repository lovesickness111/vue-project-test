import { mount, shallowMount } from "@vue/test-utils";
import NewTask from "@/components/NewTask";
import TestInteraction from "@/test-components/2. TestInteraction/TestInteraction";
import { nextTick } from "vue";

describe("Test them cong viec", () => {

  test("test khi click button thi ham addNewTask co duoc goi khong", async () => {
    const wrapper = mount(NewTask);
    const spy = jest.spyOn(wrapper.vm, "addNewTask");

    //Set tên task mới là : write unit test
    const input = wrapper.find("input");
    await input.setValue("write unit test nvcuong1");
    // trigger gọi hàm addNewTask()
    await wrapper.find("button").trigger("click"); 

 
    expect(wrapper.vm.addNewTask).toBeCalled();
  });
});


describe("Test chon combobox", () => {

  test("test khi emit chon 1 item thi combobox có hoạt động không", async () => {
    const wrapper = mount(TestInteraction);
    const spy = jest.spyOn(wrapper.vm, "validateSelection");
  
   await wrapper.find('.ms-combo-custom').vm.$emit("selected", { name: 'Elephant', id: 'elephant' });

 
    expect(wrapper.vm.validateSelection).toBeCalledWith({ name: 'Elephant', id: 'elephant' });
  });
});
