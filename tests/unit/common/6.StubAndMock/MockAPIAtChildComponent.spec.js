import { shallowMount, mount } from "@vue/test-utils";
import ChildComponent from "@/test-components/6.StubAndMock/ChildComponent.vue";
import UnitTestHelpers from "@/test-factories/UnitTestHelpers";
import { nextTick } from "vue";
import flushPromises from 'flush-promises';
const mockGetAPI = jest.fn();
jest.mock("axios", () => ({
  get: () => {
    mockGetAPI();
    return Promise.resolve("child component value from API")},
}));

// Nhóm các test case
describe("Test component ChildComponent", () => {
  // Mô tả test case và chi tiết ntn
  it("renders component ChildComponent.vue với kết quả mock", async () => {
    // act
    const wrapper = mount(ChildComponent);

    let helper = new UnitTestHelpers(wrapper, expect);
    //await nextTick();
    // log ra thử xem ông này render ra cái gì
    //console.log(wrapper.html());
    // assert

    // không có ông con
    helper.domHasLength(".full-name-child", 1);

    helper.toHaveBeenCalled(mockGetAPI);
    
    wrapper.vm.$nextTick(() => {
      // helper.textContainInDOM(
      //   "child component value from API",
      //   ".full-name-child"
      // );
      // eslint-disable-next-line no-undef
      //done()
    })
  // expect(wrapper.vm.afterGetAPI).toHaveBeenCalledTimes(1);
   
    
  });
});
