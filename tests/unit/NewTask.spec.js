import { mount } from "@vue/test-utils";
import NewTask from "@/components/NewTask";

describe("TestThemCongViec Critical", () => {
  test("test them va hien thi cong viec binh thuong", async () => {
    const wrapper = mount(NewTask);
    // 1 nhập teen công việc = Arrange

    // 2 bấm click thêm = Action

    // 3 kiểm tra = Assert

    // console.log(wrapper.vm);

    //Set tên task mới là : write unit test
    wrapper.vm.newTaskText = "write unit test"
    wrapper.find("button").trigger("click"); // lần đầu emit ra giá trị new task

  


    // 2 bấm click thêm = Action
    await wrapper.find("button").trigger("click"); // lần đầu emit ra giá trị new task
    //wrapper.vm.addNewTask();
    // 3 kiểm tra = Assert
    //Check xem có event addNewTask không
    expect(wrapper.emitted()).toHaveProperty("addNewTask");

    const addNewTask = wrapper.emitted("addNewTask");

    //Check xem có emit ra đúng task name
    expect(wrapper.emitted()).toHaveProperty("addNewTask");
    expect(addNewTask[0]).toEqual(["write unit test"]);
  });
  test("test them cong viec bi null", async () => {
    const wrapper = mount(NewTask);
    jest.spyOn(wrapper.vm, "inValidTask");
    wrapper.vm.checkIsNullTask = jest.fn(() => {
      return true;
    });
    // debugger;

    // 1 nhập teen công việc = Arrange
    wrapper.vm.newTaskText = "nvcuong9"

    // 2 bấm click thêm = Action
    await wrapper.find("button").trigger("click"); // lần đầu emit ra giá trị new task

    // 3 kiểm tra = Assert
    //Check xem có gọi vào hàm inValidTask ko
    expect(wrapper.vm.inValidTask).toBeCalled();
  });
});
