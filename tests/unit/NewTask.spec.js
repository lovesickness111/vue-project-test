import { mount } from "@vue/test-utils";
import NewTask from "@/components/NewTask";
import { nextTick } from "vue";

describe("Test them cong viec", () => {
  test("test them va hien thi cong viec", () => {
    const wrapper = mount(NewTask);
    // 1 nhập teen công việc = Arrange

  //Set tên task mới là : write unit test
  const input = wrapper.find('input');
  input.setValue("write unit test");
    //Check xem có event addNewTask không 
  expect(wrapper.emitted()).toHaveProperty('addNewTask');
  wrapper.find('button').trigger('click'); // lần đầu emit ra giá trị new task
  wrapper.find('button').trigger('click'); // Lần 2 để test xem đã clear text input chưa


  
  const addNewTask = wrapper.emitted('addNewTask');

  //Check xem có emit ra đúng task name
  console.log(wrapper.emitted());

  expect(addNewTask[0]).toEqual(['write unit test'])

    //Set tên task mới là : write unit test
    const input = wrapper.find("input");
    input.setValue("write unit test");
    wrapper.find("button").trigger("click"); // lần đầu emit ra giá trị new task

  


    //Check xem có event addNewTask không
    expect(wrapper.emitted()).toHaveProperty("addNewTask");

    const addNewTask = wrapper.emitted("addNewTask");

    //Check xem có emit ra đúng task name
    expect(wrapper.emitted()).toHaveProperty("addNewTask");
    expect(addNewTask[0]).toEqual(["write unit test"]);

    //Check xem sau khi thêm mới đã clear text input chưa
    expect(addNewTask[1]).toEqual([""]);
  });

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
