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

  test("test ham addNewTask co validate khi newTaskText rong hay khong", async () => {
    const wrapper = mount(NewTask);

    const spy = jest.spyOn(wrapper.vm, "addNewTask");
    const spyOn1 = jest.spyOn(wrapper.vm, "checkIsNullTask");

    // act
    wrapper.setData({ newTaskText: "" });
    await wrapper.find("button").trigger("click"); // lần đầu emit ra giá trị new task
    expect(wrapper.vm.addNewTask).toBeCalled();
    expect(wrapper.vm.checkIsNullTask).toBeCalled();
  });

  test("test ham addNewTask co validate khi newTaskText rong hay khong", async () => {
    const wrapper = mount(NewTask);
    const spy = jest.spyOn(wrapper.vm, "emitTask");
    const spyOn1 = jest.spyOn(wrapper.vm, "checkIsNullTask");

    wrapper.vm.checkIsNullTask = jest.fn(() => {
      return false;
    });
    wrapper.vm.newTaskText = "123";

    // act
    wrapper.vm.emitTask = jest.fn(() => {
      wrapper.vm.$emit("addNewTask", wrapper.vm.newTaskText);
      wrapper.vm.newTaskText = "nvcuong9";
    });

    await wrapper.find("button").trigger("click"); // lần đầu emit ra giá trị new task
    expect(wrapper.vm.emitTask).toBeCalled();
    expect(wrapper.vm.newTaskText).toEqual("nvcuong9");
  });
});
