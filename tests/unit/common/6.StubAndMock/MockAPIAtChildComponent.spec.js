import { shallowMount, mount } from "@vue/test-utils";
import ChildComponent from "@/test-components/6.StubAndMock/ChildComponent.vue";
import UnitTestHelpers from "@/test-factories/UnitTestHelpers";
import { nextTick } from "vue";
import flushPromises from "flush-promises";

jest.mock("axios", () => ({
  get: (url) => {
    switch (url) {
      case "/someAPI":
        return Promise.resolve("child component value from mock API");
      default:
        return Promise.resolve("default child component value from mock API");
    }
  },
}));

// Nhóm các test case
describe("Test component ChildComponent Critical", () => {
  it("Check hàm afterGetAPI được gọi sau khi mount", async () => {
    const wrapper = mount(ChildComponent);
    const spy = jest.spyOn(wrapper.vm, "afterGetAPI");
    const spyOn2 = jest.spyOn(wrapper.vm, "checkFullName");
    await nextTick();

    console.log(wrapper.html());
    expect(wrapper.vm.afterGetAPI).toBeCalled();
    expect(wrapper.vm.checkFullName).toHaveBeenCalledTimes(1);
  });
});
