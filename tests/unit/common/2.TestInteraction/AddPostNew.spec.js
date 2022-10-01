import { mount } from "@vue/test-utils";
import NewTask from "@/components/NewTask";
import { nextTick } from "vue";

describe("Test them cong viec", () => {

  test("test khi click button thi ham addNewTask co duoc goi khong", async () => {
    const wrapper = mount(NewTask);
    const spy = jest.spyOn(wrapper.vm, "addNewTask");

    //Set tên task mới là : write unit test
    const input = wrapper.find("input");
    await input.setValue("write unit test nvcuong1");
    await wrapper.find("button").trigger("click"); // lần đầu emit ra giá trị new task

 
    expect(wrapper.vm.addNewTask).toBeCalled();
  });
});
