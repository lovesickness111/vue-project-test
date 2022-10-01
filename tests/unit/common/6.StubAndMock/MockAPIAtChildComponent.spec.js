import { shallowMount, mount } from "@vue/test-utils";
import ChildComponent from "@/test-components/6.StubAndMock/ChildComponent.vue";
import UnitTestHelpers from "@/test-factories/UnitTestHelpers";
import { nextTick } from "vue";
import flushPromises from "flush-promises";

const mockGetAPI = jest.fn((msg) => {
  return msg;
});

jest.mock("axios", () => ({
  get: () => {
    mockGetAPI("hello");
    return Promise.resolve("child component value from mock API");
  },
}));

// Nhóm các test case
describe("Test component ChildComponent Critical", () => {
  // Mô tả test case và chi tiết ntn
  // it("renders component ChildComponent.vue với kết quả mock", async () => {
  //   // act
  //   const wrapper = mount(ChildComponent);

  //   let helper = new UnitTestHelpers(wrapper, expect);

  //   // assert

  //   // không có ông con
  //  // helper.domHasLength(".full-name-child", 1);

  //   //expect(mockGetAPI).toBeCalledWith("hello");
  //   helper.toHaveBeenCalled(mockGetAPI);

  //   // const spy = jest.spyOn(wrapper.vm, "afterGetAPI");
  //   // await nextTick();

  //   // expect(wrapper.vm.afterGetAPI).toHaveBeenCalledTimes(1);
  //   // helper.textContainInDOM(
  //   //     "child component value from mock API",
  //   //     ".full-name-child"
  //   //   );
  // });

  // it("Check hàm afterGetAPI được gọi sau khi mount", async () => {
  //   const wrapper = mount(ChildComponent);

  //   const spy = jest.spyOn(wrapper.vm, "afterGetAPI");
  //   await nextTick();
  //   expect(wrapper.vm.afterGetAPI).toBeCalled();
  // });

  it("Check fullname duoc gan", async () => {
    // arr
    const wrapper = mount(ChildComponent);
    const spy = jest.spyOn(wrapper.vm, "afterGetAPI");
    const spy1 = jest.spyOn(wrapper.vm, "checkFullName");
    wrapper.vm.checkFullName = jest.fn((msg) => {
      return false;
    });
    // act
    const wrapper = mount(ChildComponent);

    let helper = new UnitTestHelpers(wrapper, expect);

    // assert

    // không có ông con
   // helper.domHasLength(".full-name-child", 1);

    //expect(mockGetAPI).toBeCalledWith("hello");
    helper.toHaveBeenCalled(mockGetAPI);

    // const spy = jest.spyOn(wrapper.vm, "afterGetAPI");
    // await nextTick();

    // expect(wrapper.vm.afterGetAPI).toHaveBeenCalledTimes(1);
    // helper.textContainInDOM(
    //     "child component value from mock API",
    //     ".full-name-child"
    //   );
  });

  it("Check hàm afterGetAPI được gọi sau khi mount", async () => {
    const wrapper = mount(ChildComponent);

    const spy = jest.spyOn(wrapper.vm, "afterGetAPI");
    await nextTick();
    
    expect(wrapper.vm.afterGetAPI).toBeCalled();

    await nextTick();

    console.log(wrapper.html());
    expect(wrapper.vm.checkFullName).toHaveBeenCalledTimes(1);
  });
});
