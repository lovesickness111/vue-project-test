import { mount } from "@vue/test-utils";
import TodoApp from "@/components/TodoApp.vue";
// Test Suite render component
describe("TodoApp.vue", () => {
  let wrapper;
  // trước khi mỗi testcase chạy
  beforeEach(() => {
    wrapper = mount(TodoApp);
  });

  // test render mảng trong component toDoApp
  it("renders todos to app", () => {
    // set up

    // act
    const todo = wrapper.find('[data-test="todo"');

    // assert
    expect(todo.exists()).toBe(true);
  });

  // test thêm vào mảng todos
  it("should add task to list todos", async () => {
    // act
    // assert khi chưa add task todos
    expect(wrapper.findAll('[data-test="todo"')).toHaveLength(1);

    // thực hiện điền 1 item vào ô input, phải có await để giao diện render xong
    await wrapper.get('[data-test="input-task"]').setValue("Learninig Jest");

    // bấm sự kiện click thêm (phải có await để giao diện render xong)
    await wrapper.get('[data-test="add-task"]').trigger("click");

    // assert khi đã add task todos
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
  });
  // test tick hoàn thành 1 item
  it("should completed task ", async () => {
    // 1 tick vào check box của task
   await wrapper.get(".wrap-checkbox").setChecked(true);
    // expect khi check box được tick thì item task đó phải có class task-completed
    expect(wrapper.get('[data-test="todo"').classes()).toContain(
      "task-completed"
    );
  });
});
